import { useState, useEffect } from 'react';
import { ChevronUp, Menu as MenuIcon } from 'lucide-react';
import { Button } from './ui/button';

// Scroll Progress Indicator
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transition-all duration-300 ease-out shadow-sm"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// Back to Top Button
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6 text-white" />
    </Button>
  );
}

// Floating Quick Actions Menu
export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { label: 'Gallery', href: '#gallery', icon: '🖼️' },
    { label: 'Contact', href: '#contact', icon: '📞' },
    { label: 'Timetable', href: '#timetable', icon: '⏰' },
    { label: 'Faculty', href: '#faculty', icon: '👨‍🏫' },
  ];

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <div className={`mb-4 space-y-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {quickActions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className="flex items-center space-x-3 bg-white backdrop-blur-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-200 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg">{action.icon}</span>
            <span className="text-sm font-medium text-gray-700">{action.label}</span>
          </a>
        ))}
      </div>
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 ${isOpen ? 'rotate-45' : ''}`}
        aria-label="Quick actions menu"
      >
        <MenuIcon className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}

// Enhanced Scroll Animation Hook
export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add fade-in-up animation to sections
          if (entry.target.tagName === 'SECTION') {
            entry.target.classList.add('animate-fade-in-up');
          }
          
          // Add specific animations based on class names
          if (entry.target.classList.contains('fade-in-up-scroll')) {
            entry.target.classList.add('animate');
          }
          if (entry.target.classList.contains('slide-in-left-scroll')) {
            entry.target.classList.add('animate');
          }
          if (entry.target.classList.contains('slide-in-right-scroll')) {
            entry.target.classList.add('animate');
          }
          if (entry.target.classList.contains('scale-in-center-scroll')) {
            entry.target.classList.add('animate');
          }
          if (entry.target.classList.contains('stagger-children')) {
            entry.target.classList.add('animate');
          }
        }
      });
    }, observerOptions);

    // Add animation classes to CSS
    const style = document.createElement('style');
    style.textContent = `
      .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      
      .animate-fade-in-up {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animate-bounce-in {
        animation: bounceIn 0.8s ease-out;
      }
      
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.3) translateY(100px);
        }
        50% {
          opacity: 1;
          transform: scale(1.05) translateY(-10px);
        }
        70% {
          transform: scale(0.9) translateY(0);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      .floating-animation {
        animation: floating 3s ease-in-out infinite;
      }
      
      @keyframes floating {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .pulse-slow {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `;
    
    if (!document.querySelector('[data-scroll-styles]')) {
      style.setAttribute('data-scroll-styles', 'true');
      document.head.appendChild(style);
    }

    // Observe all sections and animation elements
    const sections = document.querySelectorAll('section, .scroll-animate');
    const animationElements = document.querySelectorAll('.fade-in-up-scroll, .slide-in-left-scroll, .slide-in-right-scroll, .scale-in-center-scroll, .stagger-children');
    
    sections.forEach((section) => {
      section.classList.add('scroll-animate');
      observer.observe(section);
    });
    
    animationElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}