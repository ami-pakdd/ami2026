'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'topics', 'dates', 'organizers', 'submission'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const NavLink = ({ href, children }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`
        relative px-3 py-2 font-semibold transition-colors
        text-ctu-blue hover:text-ctu-cyan
      `}
    >
      {/* Underline Active */}
      <span
        className={`
          absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full
          transition-all duration-300
          ${activeSection === href ? 'bg-ctu-cyan w-full' : 'w-0'}
        `}
      />
      {children}
    </button>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-ctu-blue/10 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-ctu-blue hover:text-ctu-cyan transition-colors"
          >
            AMI-PAKDD 2026
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink href="home">Home</NavLink>
            <NavLink href="topics">Topics</NavLink>
            <NavLink href="dates">Important Dates</NavLink>
            <NavLink href="organizers">Organizers</NavLink>
            <NavLink href="submission">Submission</NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ctu-blue"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-ctu-blue/10">
            <div className="flex flex-col gap-2">
              <NavLink href="home">Home</NavLink>
              <NavLink href="topics">Topics</NavLink>
              <NavLink href="dates">Important Dates</NavLink>
              <NavLink href="organizers">Organizers</NavLink>
              <NavLink href="submission">Submission</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
