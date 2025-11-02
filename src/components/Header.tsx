import { Menu, X, Computer, ChevronDown, Sparkles, Users, Calendar, Building, Camera, Phone, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", icon: Sparkles },
    { name: "About", href: "#about", icon: BookOpen },
    { name: "Faculty", href: "#faculty", icon: Users },
    { name: "Timetable", href: "#timetable", icon: Calendar },
    { name: "Infrastructure & Gallery", href: "#infrastructure", icon: Building },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 backdrop-blur-xl shadow-xl border-b border-blue-200/50' 
        : 'bg-gradient-to-r from-white via-blue-50/80 to-purple-50/80 shadow-lg border-b border-blue-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAACUCAMAAADoITZaAAAAtFBMVEX+/v7///8AR3MAQXA8ZokARHEAO2z09/gAN2n2+vutu8hzg5wuXIE1WX/Czde+ytQsUHmFlKrv8fQaVHyltMMAJ2EAMGZvhp/K0doALGMAM2fm7PAAGlv3lmbg5uvY3+X1gD+HnLBXeJVjgZyUqbpPa4uUobT+8+74qIX5wakkSHROYoT5tpf2jVdKcI92kKj1ezT0dSb3onn71MP85sonPGwAIV5kdJIACVYAAEgAAFM6S3UCNuttAAAFyElEQVR4nL2YbZOaSBCAaQaGl1VBFxBhI0HQTUxOk8tdci///39d9zAoiG6dxA93Vf1UKqu9MDsPzPTMtGEwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDPO/Bk50PurA5RXDC43rYbj1N+CN4PDOa2296VLvLcU2h8DqUhWgW9xNOuHJ3IPP7xS/vHuFxUbHNyk41bS5pPK6PcD+pGV1sA7Luuj03Evr4+awOdYzRwVhtrWmy57uYWJNd86/twHwEymQMAdf9Ii0TLF1O9HsyYMPX94jX399BVhM1N1CTmfY0WOsPlsdGYD1MVs1Lbgrt1R9w2CFQbpVuklsrTEIQYjfyo4NPEuRzO+QwXYLS9qmTTJmF/ep6RIEvbAkGXJ5/9HAkbWYCBW2UYaezB6/io4MLOoss+kCm/4X+4D67dQvbhOjoBmXjQx2w47ONvBsm+5dMnjP+kmIoYyw1DgDb5ddkfny7hv91b4MvcaDsDsyUPxYYX+FK8IwtF1hTwNynr9QS8IMpyH9yOpWxpSf0p+SwQcVhe5AxhS+6t76IIYyXz781gz0CxkMzPfuSQbW2wR/l03nte/79dxKQpIJYmw9fKr9IPCj+VauzjJmtslPT2KMDD6qmfX7QKZpB1I5HGZfP77qCXUpg5EonHht7tjiWxV2mXpNXip2+GYAPglTTKOFTlZF5JZnGdM9nh7FKBmaOMti8GZonIFXJwOZz99OSWkggxMprXQHoFavwPeglfNSTGjrvW2KuXHKa0bqd2RsGf2cDPXKu5QxMxoSuSUGMq/nNWgog73L21/uaUr73QQFHubgvU0TvRN0TjL0z9XTZrQMrQYnGVvLYB6FItbvqSPT4YqMcXrmNY7QbO5d9IZkzF4OVjc0Ms+SbHQeHS2D97YyYjNVOuIZ83+pR1klzzKLXONdl2kfj5obwzgNM1tE3sWOAGXsabTEnC0nTXZ5hIwsq+bdfE/Be1adtcMgOcv8+ONF8Wf0pswan4l8GnQG0wI9mJUVrXOns5shmTAoaFjLJb2sh8i482CvPxjF90ahaocbySz1mEvalpnhuJHzYV+g2NOSKVaJVfpFrtNDI+M3a+c+ohX5ITLLRTPObBvKZsWMZyNkqFuivNIXCLauS/cJNzGr3ew0Z0gGatpEqA3FY2S8YzND4kJP/BjSMTLmdRkcgdFx4iaScpdMwjlAR8ZR02a7hgfJOOmqSQV69ZebMTK3hhn9DhbFLKrM2KXNzqrsyOh0L5eLxyQAbCdrUoDudRyMkbmRAFod8Rb5bCkpF8s1nGXQhrZubv2oOQNH1+yQOGNkbqTmrg+uY5TaaDCeZfDjixrj2PZDZHQWawPGCBlDTeXLRRNO/2mhdIrKVV8GaA9li2fzMTKG2dnFxHjwGiOTX9vO0Jfu4W29RZlNTwYH2lI2G5GHzBmjPJ9ibDMfJXNtozlLaYbv8vPxeYYzSxz7MnTwaPLpQ97MaU9G34/OSBlj6w6PAHh++msZ6AMApBtKXbMLGUONPi3T1jXuserLtL2kPlMHxsjgWv8p6x3OVupw5qyk+bSjoxmG8H53awxkjGjfDjMHryxocNxTDejJOKdxJibFWBmqhuhjsxmGoj02OyvMxhQJ6Yfpyry7zug7vaPQMov0UPilk/89VgZ73x7K3PlitAwmgXJQ0IDFHzqiQi+qOHMpgzbqpak5c4DgOS3Nu2R0NSlRMmtLV5gStZCl38+lpmVTXhJx1Cs1XW+1W2qKZU1NQynjTOKNUmbxxG+rQKEQe7+T55xMqFITkEz5o7bukWmLgJOS/qJT69rfplAy4bkIWOoLp36vCHir3bYIWLVFQForfQxtqlIlguay2taytkH3hFOEughYQRBEeXVXBugVTC/Kp9frsLdLsrcbvghdXDW873z1HS4MwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/wH+QdthnFcCgkhdAAAAABJRU5ErkJggg=="
                alt="MIT College Logo"
                className={`h-16 w-16 rounded-xl object-contain shadow-lg border-2 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:scale-105 bg-white ${
                  isScrolled ? 'h-12 w-12' : ''
                }`}
              />
              {/* Animated glow ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              
              {/* Fallback icon overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center opacity-0">
                <Computer className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="ml-2">
              <h1 className={`font-bold text-primary tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-xl'
              }`}>
                Maharashtra Institute Of Technology
              </h1>
              <p className={`text-blue-600 font-semibold mt-1 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Computer Science Laboratory
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-3xl p-6 mt-4 shadow-xl backdrop-blur-sm border border-white/20">
              <div className="grid grid-cols-1 gap-3">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                          : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110'
                      }`}>
                        <IconComponent className={`h-5 w-5 ${
                          isActive ? 'text-white' : 'text-white'
                        }`} />
                      </div>
                      <div>
                        <span className="font-semibold text-lg">{item.name}</span>
                        <div className={`text-sm opacity-70 ${
                          isActive ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          Navigate to {item.name.toLowerCase()}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="ml-auto">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          isActive ? 'text-white rotate-[-90deg]' : 'text-gray-400 group-hover:rotate-[-90deg] group-hover:text-blue-600'
                        }`} />
                      </div>
                    </a>
                  );
                })}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
                <Sparkles className="h-6 w-6 mx-auto mb-2 animate-pulse" />
                <p className="font-semibold">Welcome to MIT Lab</p>
                <p className="text-sm text-blue-100">Excellence in Computer Science</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}