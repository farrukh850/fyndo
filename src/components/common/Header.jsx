import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from "../common/Button"
import "../../../src/assets/css/main.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  // Scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

    // Navigation items data
    const navItems = [
      { id: 'intro', label: 'The Intro' },
      { id: 'meet-fyndo', label: 'Meet Fyndo' },
      { id: 'estimation', label: 'Estimation' },
      { id: 'screening', label: 'Screening' },
      { id: 'security', label: 'Security' },
      { id: 'timeline', label: 'Timeline' },
      { id: 'fyndo', label: 'Fyndo' },
      { id: 'faq', label: 'FaQ' },
      { id: 'support', label: 'Support' }
    ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`header h-[60px] fixed top-0 right-0 left-0 flex items-center px-0 lg:px-5 w-full bg-[#191919] border-b border-[#191919] font-stk-book z-[1000]`}>
      <nav className="container flex justify-between items-center">
        <Link to="/">
          <img src="/images/logo.svg" className="w-14" alt="LEAP Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-sm text-white/60 tracking-[-0.14px] hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
          <Link to="/plan" className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer items-center flex justify-center"><p className="text-sm text-[#292929]">Pick a Plan</p></Link>
        </div>
        
       <div className="flex items-center gap-2 xl:hidden">
        <Link to="/plan" className="w-[103px] h-[36px] rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Pick a Plan</p></Link>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden focus:outline-none cursor-pointer w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 object-contain ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 w-4 bg-white transition-all duration-300 object-contain ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
       </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden h-screen fixed top-[60px] left-0 right-0 bg-black shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="container flex items-start flex-col p-0">
          {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-2xl pt-2 pr-3 pb-2 text-white/60 tracking-[-0.14px] hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </button>
          ))}
          <Link to="/plan" className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer hidden lg:flex  items-center justify-center"><p className="text-base text-[#292929]">Pick a Plan</p></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;