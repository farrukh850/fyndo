import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from "../common/Button"
import "../../../src/assets/css/main.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

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
    <header className={`header h-[60px] fixed top-0 right-0 left-0 flex items-center px-5 w-full bg-[#191919] border-b border-[#191919] font-stk z-[1000]`}>
      <nav className="container flex justify-between items-center">
        <Link to="/">
          <img src="/images/logo.svg" className="w-14" alt="LEAP Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > The Intro</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Meet Fyndo</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Estimation</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Screening</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Security</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Timeline</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Fyndo</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > FaQ</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Support</NavLink>
          <Link to="/plan" className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-sm text-[#292929]">Pick a Plan</p></Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-[60px] left-0 right-0 bg-black shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
        <div className="container flex flex-col gap-4">
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > The Intro</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Meet Fyndo</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Estimation</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Screening</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Security</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Timeline</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Fyndo</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > FaQ</NavLink>
          <NavLink to="/" className="text-sm text-white/60 tracking-[-0.14px]" > Support</NavLink>
          <Link to="/plan" className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer flex items-center justify-center"><p className="text-base text-[#292929]">Pick a Plan</p></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;