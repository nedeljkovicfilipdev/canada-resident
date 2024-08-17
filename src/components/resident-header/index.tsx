import React, { ReactNode, useState } from 'react';
import { LanguageSelector } from '../language-selector';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { Github, Menu, X } from 'lucide-react'; // Import X icon for close button
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

interface IProps {
  leftNode?: ReactNode;
}

export function Header(props: IProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBlog = () => {
    navigate('/blog');
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-2 md:px-12">
        <ScrollLink to="poster" smooth={true} duration={500} className="flex font-bold md:flex-col sm:flex-row text-customblue items-center text-center cursor-pointer hover:opacity-75">
          <img 
            src="/images/logo/dv-icon.png" 
            alt="Diverse Logo" 
            className="h-10 w-auto" 
          />
          <span className=''>DIVERSE VISA</span>
        </ScrollLink>
        <div className="hidden md:flex flex-grow items-center justify-center gap-4">
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500">
            {t('about-nav')}
          </ScrollLink>
          <ScrollLink to="our-programs" smooth={true} duration={500} className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-custombluehover transition-colors duration-500">
            {t('our-programs-nav')}
          </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500">
            {t('services-nav')}
          </ScrollLink>
          <ScrollLink to="consultations" smooth={true} duration={500} className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500">
            {t('consultations')}
          </ScrollLink>
          <ScrollLink to="contact-us" smooth={true} duration={500} className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500">
            {t('contact-nav')}
          </ScrollLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Button onClick={handleBlog} className="cursor-pointer bg-customblue hover:bg-custombluehover">
            {t('blog-nav')}
          </Button>
        </div>
        <button 
          className="md:hidden flex items-center justify-center p-2 text-slate-700"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white shadow-lg md:hidden">
          <div className="flex justify-between items-center p-4">
            <span className="text-xl font-bold">{t('title-header')}</span>
            <button 
              className="p-2 text-slate-700"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4 mt-8">
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('about-nav')}
            </ScrollLink>
            <ScrollLink 
              to="services" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('services-nav')}
            </ScrollLink>
            <ScrollLink 
              to="consultations" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('consultations')}
            </ScrollLink>
            <ScrollLink 
              to="our-programs" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('our-programs-nav')}
            </ScrollLink>
            <ScrollLink 
              to="our-network" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('our-network-nav')}
            </ScrollLink>
            <ScrollLink 
              to="contact-us" 
              smooth={true} 
              duration={500} 
              className="text-xl text-slate-700 hover:text-customblue"
              onClick={toggleMenu}
            >
              {t('contact-nav')}
            </ScrollLink>
          </nav>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
            <LanguageSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
