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
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-4 md:px-12">
        <Link to="/" className="cursor-pointer font-lato text-xl text-slate-700 hover:text-white dark:text-white">
          {t('title-header')}
        </Link>
        <div className="hidden md:flex flex-grow items-center justify-center gap-4 font-regular">
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('about-nav')}
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('services-nav')}
          </ScrollLink>
          <ScrollLink to="consultations" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('consultations')}
          </ScrollLink>
          <ScrollLink to="our-programs" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('our-programs-nav')}
          </ScrollLink>
          <ScrollLink to="our-network" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('our-network-nav')}
          </ScrollLink>
          <ScrollLink to="contact-us" smooth={true} duration={500} className="cursor-pointer hover:text-white">
            {t('contact-nav')}
          </ScrollLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          {/* Uncomment if you want to include the blog button */}
          {/* <Button onClick={handleBlog} className="cursor-pointer bg-customblue hover:bg-custombluehover">
            {t('blog-nav')}
          </Button> */}
        </div>
        <button 
          className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-white"
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
              className="p-2 text-slate-700 hover:text-white"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4">
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
