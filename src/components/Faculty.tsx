import { Mail, BookOpen, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Sarika H. Zile",
      designation: "Lab In-charge & Associate Professor",
      specialization: "Data Structures, Algorithms, Machine Learning",
      experience: "12 years",
      email: "sarika.zile@mit.asia",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1551989745-347c28b620e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlYWNoZXJ8ZW58MXx8fHwxNzYxOTA2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Mohammed Noman",
      designation: "Assistant Professor",
      specialization: "Software Engineering, Data Analytics",
      experience: "2 years",
      email: "mohammed.noman@mit.asia",
      phone: "+917666641597",
      image: "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWFjaGVyfGVufDF8fHx8MTc2MTkyMDEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Dr. Anita Patel",
      designation: "Assistant Professor",
      specialization: "Computer Networks, Cybersecurity",
      experience: "10 years",
      email: "anita.patel@mit.asia",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHByb2Zlc3NvcnxlbnwxfHx8fDE3NjE5MjAxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Mr. Suresh Verma",
      designation: "Lab Technician",
      specialization: "Hardware Maintenance, System Administration",
      experience: "15 years",
      email: "suresh.verma@mit.asia",
      phone: "+91 98765 43213",
      image: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljaWFuJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc2MTkyMDEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 font-medium">Our Faculty Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to providing quality education and guidance
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facultyMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image Section */}
                  <div className="sm:w-1/3">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="sm:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {member.designation}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                        <span>{member.specialization}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{member.experience} of experience</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-purple-500 flex-shrink-0" />
                        <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
