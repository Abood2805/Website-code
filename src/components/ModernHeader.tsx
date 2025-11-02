import { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen, Users, Calendar, Building, Zap, Phone, ChevronDown } from 'lucide-react';

/**
 * Modern Advanced Navigation Bar Component
 * 
 * Features:
 * - Responsive design (Desktop, Tablet, Mobile)
 * - Sticky positioning with scroll effects
 * - Active link highlighting
 * - Smooth hover animations
 * - Mobile hamburger menu with slide-in effect
 * - Gradient background with subtle shadows
 * - Logo and branding on the left
 * - Navigation links in center/right
 * - Fully customizable and well-commented
 * - Accessibility compliant
 * - Dark mode support
 */

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string; // For accessibility and tooltips
}

export function ModernHeader() {
  // ===========================================
  // STATE MANAGEMENT
  // ===========================================
  
  /** Controls mobile menu open/close state */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  /** Tracks if user has scrolled (for sticky effects) */
  const [isScrolled, setIsScrolled] = useState(false);
  
  /** Tracks currently active section for navigation highlighting */
  const [activeSection, setActiveSection] = useState('home');

  // ===========================================
  // NAVIGATION CONFIGURATION
  // ===========================================
  
  /**
   * Navigation items configuration
   * Add/remove/modify items here to customize the navigation
   */
  const navigationItems: NavigationItem[] = [
    { 
      name: "Home", 
      href: "#home", 
      icon: Home,
      description: "Go to homepage"
    },
    { 
      name: "About", 
      href: "#about", 
      icon: BookOpen,
      description: "Learn about our computer lab"
    },
    { 
      name: "Faculty", 
      href: "#faculty", 
      icon: Users,
      description: "Meet our expert faculty members"
    },
    { 
      name: "Timetable", 
      href: "#timetable", 
      icon: Calendar,
      description: "View lab schedules and timings"
    },
    { 
      name: "Infrastructure", 
      href: "#infrastructure", 
      icon: Building,
      description: "Explore our facilities and gallery"
    },
    { 
      name: "Contact", 
      href: "#contact", 
      icon: Phone,
      description: "Get in touch with us"
    }
  ];

  // ===========================================
  // SCROLL EFFECTS & ACTIVE SECTION DETECTION
  // ===========================================
  
  useEffect(() => {
    /**
     * Handles scroll events for:
     * 1. Sticky navbar background changes
     * 2. Active section detection for navigation highlighting
     */
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update scrolled state for navbar styling
      setIsScrolled(scrollPosition > 50);
      
      // Active section detection
      const sections = navigationItems.map(item => item.href.substring(1)); // Remove # from href
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

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  // ===========================================
  // EVENT HANDLERS
  // ===========================================
  
  /**
   * Toggles mobile menu with smooth animation
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  /**
   * Closes mobile menu when link is clicked
   */
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Handles navigation link clicks with smooth scrolling
   * @param href - The target section href (e.g., "#about")
   */
  const handleNavClick = (href: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to target section
    const targetId = href.substring(1); // Remove # from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 90; // Account for fixed header height + padding
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update active section immediately for better UX
      setActiveSection(targetId);
    }
  };

  /**
   * Closes mobile menu when clicking outside
   */
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Handles keyboard navigation (Escape key to close mobile menu)
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // ===========================================
  // STYLING CLASSES
  // ===========================================
  
  /**
   * Dynamic classes for the main header based on scroll state
   */
  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 
    transition-all duration-500 ease-in-out
    ${isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50' 
      : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-100/30 dark:border-gray-800/30'
    }
  `.trim().replace(/\s+/g, ' ');

  /**
   * Classes for navigation links with active state styling
   */
  const getNavLinkClasses = (href: string, isMobile: boolean = false) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;
    
    const baseClasses = `
      group relative flex items-center space-x-2 px-4 py-2 rounded-xl
      font-medium transition-all duration-300 ease-in-out
      hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 
      dark:hover:from-blue-900/20 dark:hover:to-purple-900/20
      focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
      ${isMobile ? 'w-full justify-start py-3 px-6' : ''}
    `;
    
    const activeClasses = isActive 
      ? `
        bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg
        hover:from-blue-700 hover:to-purple-700
        transform scale-105
      `
      : `
        text-gray-700 dark:text-gray-200 
        hover:text-blue-600 dark:hover:text-blue-400
        hover:scale-105
      `;
    
    return `${baseClasses} ${activeClasses}`.trim().replace(/\s+/g, ' ');
  };

  // ===========================================
  // COMPONENT RENDER
  // ===========================================
  
  return (
    <>
      {/* Main Navigation Header */}
      <header className={headerClasses}>
        <div className="w-full px-2 sm:px-3 md:px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* ===== LEFT SIDE: Logo & Branding ===== */}
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
              {/* College Logo - Simple & Clean */}
              <div className="relative">
                {/* Main Logo */}
                <img
                  src="https://raw.githubusercontent.com/AbdulRahman-droid208/college-website/main/WhatsApp%20Image%202025-10-31%20at%203.43.38%20PM.jpeg"
                  alt="Maharashtra Institute Of Technology Logo"
                  className={`
                    object-cover rounded-full shadow-lg 
                    border-2 border-blue-500
                    group-hover:border-blue-600
                    transition-all duration-300 ease-out
                    group-hover:scale-105
                    ${isScrolled ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'}
                  `}
                />
              </div>
              
              {/* College Name & Title - ENHANCED */}
              <div className="flex flex-col">
                <h1 className={`font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-blue-900 transition-all duration-500 leading-tight ${isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl md:text-2xl'}`}>
                  Maharashtra Institute Of Technology
                </h1>
                <p className={`text-blue-700 dark:text-blue-300 font-bold group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-500 flex items-center gap-1.5 sm:gap-2 ${isScrolled ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Computer Science Laboratory
                </p>
              </div>
            </div>

            {/* ===== CENTER/RIGHT: Desktop Navigation ===== */}
            <nav className="hidden 2xl:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={getNavLinkClasses(item.href)}
                  aria-label={item.description}
                  title={item.description}
                >
                  {/* Navigation Icon */}
                  <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  
                  {/* Navigation Text */}
                  <span className="relative">
                    {item.name}
                    {/* Hover underline effect for non-active items */}
                    {activeSection !== item.href.substring(1) && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    )}
                  </span>
                </a>
              ))}
            </nav>

            {/* ===== RIGHT: Mobile Menu Button ===== */}
            <div className="2xl:hidden">
              <button
                onClick={toggleMobileMenu}
                className="
                  p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl text-gray-700 dark:text-gray-200
                  hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50
                  dark:hover:from-blue-900/20 dark:hover:to-purple-900/20
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50
                  transition-all duration-300 hover:scale-110
                  border border-gray-200 dark:border-gray-700
                  hover:border-blue-300 dark:hover:border-blue-600
                "
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                  {/* Animated Hamburger/Close Icon */}
                  <Menu 
                    className={`
                      absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 
                      ${isMobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}
                    `} 
                  />
                  <X 
                    className={`
                      absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 
                      ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}
                    `} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm 2xl:hidden"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* ===== MOBILE SLIDE-IN MENU ===== */}
      <div 
        className={`
          fixed top-20 right-0 bottom-0 z-50 w-80 max-w-[90vw]
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
          border-l border-gray-200/50 dark:border-gray-700/50
          shadow-2xl 2xl:hidden
          transform transition-transform duration-500 ease-in-out
          flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Mobile navigation menu"
        role="navigation"
      >
        {/* Mobile Menu Header */}
        <div className="flex-shrink-0 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse"></div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Navigation Menu
            </h2>
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Explore our computer lab sections
          </p>
        </div>

        {/* Mobile Navigation Links - Scrollable */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(100vh - 300px)' }}>
          {navigationItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`
                ${getNavLinkClasses(item.href, true)}
                transform transition-all duration-300
                hover:translate-x-2 hover:shadow-lg
              `}
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
              }}
              aria-label={item.description}
            >
              {/* Mobile Menu Icon */}
              <div className="
                p-2 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 
                dark:from-blue-900/30 dark:to-purple-900/30
                group-hover:from-blue-200 group-hover:to-purple-200
                dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40
                transition-all duration-300
              ">
                <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Mobile Menu Text */}
              <div className="flex-1 text-left">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.description}
                </div>
              </div>
              
              {/* Active Indicator */}
              {activeSection === item.href.substring(1) && (
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="flex-shrink-0 p-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 MIT Computer Lab
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Excellence in Technology Education
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// ===========================================
// ADDITIONAL STYLES (Add to globals.css if needed)
// ===========================================

/**
 * Custom keyframes for mobile menu animations
 * These are already included in your globals.css file
 * 
 * @keyframes slideInFromRight {
 *   from {
 *     opacity: 0;
 *     transform: translateX(100px);
 *   }
 *   to {
 *     opacity: 1;
 *     transform: translateX(0);
 *   }
 * }
 */