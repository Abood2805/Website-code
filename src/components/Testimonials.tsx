import { Star, Quote, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: "Noman",
      role: "3rd Year CSE Student",
      avatar: "PS",
      rating: 5,
      content: "The computer lab at MIT has been instrumental in my journey. The modern infrastructure and supportive faculty helped me develop skills that landed me an internship at a top tech company.",
      achievement: "Google Summer of Code 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Rahul Patel",
      role: "Final Year Student",
      avatar: "RP",
      rating: 5,
      content: "From learning basic programming to developing complex AI projects, this lab provided everything I needed. The community engagement projects taught me real-world problem solving.",
      achievement: "Microsoft Intern 2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ananya Singh",
      role: "2nd Year CSE Student",
      avatar: "AS",
      rating: 5,
      content: "The events and workshops organized here are amazing! I participated in the CodeFest and won second place. The exposure to cutting-edge technology is unmatched.",
      achievement: "CodeFest Winner 2024",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Arjun Kumar",
      role: "Alumni - Software Engineer",
      avatar: "AK",
      rating: 5,
      content: "The foundation I built in this computer lab stays with me even today in my professional career. The collaborative environment and modern facilities prepared me for the industry.",
      achievement: "Amazon SDE 2023",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Sneha Reddy",
      role: "4th Year CSE Student",
      avatar: "SR",
      rating: 5,
      content: "The lab's focus on community engagement through technology is inspiring. Working on projects that help society while learning advanced concepts has been an incredible experience.",
      achievement: "Research Paper Published",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Vikram Yadav",
      role: "3rd Year Student",
      avatar: "VY",
      rating: 5,
      content: "The high-speed internet, modern systems, and collaborative workspace make this lab perfect for both individual study and group projects. Highly recommend to all CSE students!",
      achievement: "Hackathon Champion 2024",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const achievements = [
    {
      title: "500+",
      subtitle: "Students Trained",
      description: "Successfully mentored and trained over 500 students in modern computing technologies",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "50+",
      subtitle: "Industry Placements",
      description: "Students placed in top companies like Google, Microsoft, Amazon, and leading startups",
      icon: Award,
      color: "text-green-600"
    },
    {
      title: "25+",
      subtitle: "Research Projects",
      description: "Ongoing research projects in AI, ML, IoT, and community-focused technology solutions",
      icon: Star,
      color: "text-purple-600"
    },
    {
      title: "100%",
      subtitle: "Modern Infrastructure",
      description: "Latest hardware, high-speed connectivity, and state-of-the-art development environments",
      icon: Quote,
      color: "text-orange-600"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our students and alumni about their transformative experiences in our computer lab
            and how it shaped their careers in technology.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <achievement.icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">{achievement.subtitle}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${testimonial.color}`} />
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-600/20" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="mb-4">
                  <Badge className={`bg-gradient-to-r ${testimonial.color} text-white border-0 px-3 py-1`}>
                    🏆 {testimonial.achievement}
                  </Badge>
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className={`bg-gradient-to-r ${testimonial.color} text-white font-semibold`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                Join hundreds of successful students who have transformed their careers through our computer lab programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                </a>
                <a 
                  href="#events" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Events
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}