import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Topics', href: '#topics', id: 'topics' },
    { name: 'Speakers', href: '#speakers', id: 'speakers' },
    { name: 'Dates', href: '#dates', id: 'dates' },
    { name: 'Registration', href: '#registration', id: 'registration' },
    { name: 'Committee', href: '#committee', id: 'committee' },
    { name: 'Venue', href: '#venue', id: 'venue' },
  ];

  // Handle scroll shadow transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for Scroll-Spy
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.id);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-nav"
      className={`sticky top-0 z-40 bg-white border-b border-slate-200/80 transition-shadow duration-200 ${isScrolled ? 'shadow-md py-0' : 'shadow-sm py-0'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo and Big Brand Name (Matching Logo Size) */}
          <div className="flex items-center shrink-0 mr-4 xl:mr-6">
            <a
              href="#hero"
              className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none shrink-0"
              aria-label="IS-SITEPA 2026 Home"
            >
              <img
                src="/assets/images/logos/is-sitepa.png"
                alt="IS-SITEPA Logo"
                className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0"
              />
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-crimson leading-none transition-colors group-hover:text-crimson-hover uppercase whitespace-nowrap">
                IS-SITEPA 2026
              </span>
            </a>
          </div>

          {/* Center Desktop Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs xl:text-sm font-semibold transition-colors duration-150 relative py-1 whitespace-nowrap ${isActive
                      ? 'text-crimson font-bold'
                      : 'text-slate-700 hover:text-crimson'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={siteConfig.links.registerNow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-lg bg-crimson hover:bg-crimson-hover text-white text-xs xl:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap"
            >
              <i className="fa-solid fa-ticket text-xs"></i>
              <span>Register Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-crimson hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-crimson"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${isActive
                    ? 'bg-crimson/10 text-crimson font-bold'
                    : 'text-slate-700 hover:text-crimson hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={siteConfig.links.registerNow}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full text-center py-2.5 bg-crimson hover:bg-crimson-hover text-white rounded-lg font-semibold text-sm transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
