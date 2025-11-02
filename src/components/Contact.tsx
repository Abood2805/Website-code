import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Computer Science Block",
        "Room 502B, Fourth Floor, Gate No.5",
        "MIT College Campus, Beed Bypass Road, Satara Parisar,", 
        "Chh. Sambhajinagar(Aurangabad), Maharashtra, India",
        "PIN: 431010"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Lab Office: +91 11 2345 6789",
        "Lab In-charge: +91 98765 43210",
        "Technical Support: +91 98765 43211",
        "Emergency: +91 98765 43212"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "lab.incharge@college.edu",
        "technical.support@college.edu",
        "cse.department@college.edu",
        "admin@college.edu"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:30 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Closed",
        "Holidays: As per college calendar"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl mb-6 shadow-lg">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Connect With Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to experience the future of computer science education? Our expert team is here to assist 
            with lab access, technical support, and any questions about our world-class facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Google Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Lab Location - Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.075997455945!2d75.32200491859295!3d19.849271977564374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb988c254eb873%3A0x4388791935b718e6!2sMaharashtra%20Institute%20Of%20Technology!5e1!3m2!1sen!2sin!4v1762020264882!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maharashtra Institute of Technology Location"
                    className="w-full"
                  />
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Campus Directions:
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      From the main entrance (Gate No. 5), proceed to the Computer Science Block. Take the elevator or stairs to the fourth floor. The lab is located in Room 502B, marked with a "Computer Lab" sign.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Quick Tips:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Click on the map to open in Google Maps</li>
                      <li>• Get turn-by-turn navigation</li>
                      <li>• View street view for better guidance</li>
                      <li>• Check real-time traffic conditions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Full Name
                  </label>
                  <Input placeholder="Enter your full name" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Student ID (Optional)
                  </label>
                  <Input placeholder="Enter your student ID" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Subject
                  </label>
                  <Input placeholder="Message subject" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Type your message here..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full">
                  Send Message
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  <p>We typically respond within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For urgent technical issues or lab access problems during operating hours, 
            contact our technical support team directly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Call support — centered, fixed min width, icon won't shrink */}
            <a
              href="tel:+919876543211"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-2xl shadow-md transition transform hover:-translate-y-1 min-w-[160px] whitespace-nowrap text-center"
              aria-label="Call technical support"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium">Call Support</span>
            </a>

            {/* Email support — matching shape/visual style, centered text */}
            <a
              href="mailto:technical.support@college.edu"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-2xl shadow-md transition transform hover:-translate-y-1 min-w-[160px] whitespace-nowrap text-center"
              aria-label="Email technical support"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium">Email Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}