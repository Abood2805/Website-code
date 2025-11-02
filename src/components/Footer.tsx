import { Computer, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Timetable', href: '#timetable' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/MITComputerLab', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/MITComputerLab', name: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/MITComputerLab', name: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/mit-computer-lab', name: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/MITComputerLab', name: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDE: Lab Info & Social Media */}
          <div className="lg:col-span-5 space-y-5">
            {/* Lab Header */}
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg flex-shrink-0">
                <Computer className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Maharashtra Institute Of Technology</h3>
                <p className="text-blue-400 text-sm font-medium mt-1">Computer Science Laboratory • Room 502B</p>
              </div>
            </div>
            
            {/* Lab Description */}
            <p className="text-gray-400 leading-relaxed">
              Pioneering the future of computer science education through cutting-edge technology, 
              innovative curricula, and world-class facilities that prepare students for tomorrow's challenges.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Quick Links & Contact Info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <span className="w-1 h-6 bg-blue-400 rounded-full mr-3"></span>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300 font-medium cursor-pointer group"
                    >
                      <span className="w-0 h-0.5 bg-blue-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 rounded"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                <span className="w-1 h-6 bg-blue-400 rounded-full mr-3"></span>
                Contact Info
              </h4>
              <div className="space-y-3.5">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-gray-400 text-sm leading-relaxed">
                    <p className="font-medium text-gray-300">Computer Science Block</p>
                    <p>Room 502B, Fourth Floor, Gate No.5</p>
                    <p>MIT College Campus, Beed Bypass Rd</p>
                    <p>Satara Parisar, Chhatrapati Sambhajinagar</p>
                    <p>(Aurangabad), Maharashtra 431010</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm hover:text-white transition-colors">+91 11 2345 6789</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:lab.incharge@college.edu" className="text-gray-400 text-sm hover:text-white transition-colors">
                    lab.incharge@college.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              <p>&copy; 2024 Maharashtra Institute Of Technology Computer Lab. All rights reserved.</p>
              <p className="mt-1">Advanced Computer Science Laboratory - Academic Excellence Initiative</p>
            </div>
            
            {/* Developer Credits */}
            <div className="text-gray-400 text-sm text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <span>Designed & Developed by</span>
                <a 
                  href="https://github.com/student-developer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-1">Mohammed Noman</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <p className="mt-1 text-xs">
                CSE B.Tech Student • Roll No: BT2317• Contact: mohammed.noman@mit.asia
              </p>
            </div>
          </div>
          
          {/* Additional Footer Links */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-xs text-gray-500">
              <div className="flex space-x-4 mb-2 lg:mb-0">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Accessibility</a>
              </div>
              <div>
                <span>Built with React, TypeScript & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
