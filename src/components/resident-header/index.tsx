import React, { ReactNode, useState } from 'react';
import { LanguageSelector } from '../language-selector';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react'; // Import X icon for close button
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
  leftNode?: ReactNode;
}

export function Header(props: IProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation and scroll to section
  const handleNavigation = (sectionId: string) => {
    navigate("/"); // Navigate to the homepage
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the mobile menu
    }
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 0); // Ensure the navigation completes before scrolling
  };

  const handleBlog = () => {
    navigate('/blog');
    window.scrollTo(0, 0);
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the mobile menu
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-2 md:px-12">
        <button
          onClick={() => handleNavigation('poster')}
          className="flex font-bold md:flex-col sm:flex-row text-customblue items-center text-center cursor-pointer hover:opacity-75"
        >
          <img
            src="/images/logo/dv-icon.png"
            alt="Diverse Logo"
            className="h-10 w-auto"
          />
          <span>DIVERSE VISA</span>
        </button>
        <div className="hidden md:flex flex-grow items-center justify-center gap-4">
          <button
            onClick={() => handleNavigation('about')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('about-nav')}
          </button>
          <button
            onClick={() => handleNavigation('our-programs')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-custombluehover transition-colors duration-500"
          >
            {t('our-programs-nav')}
          </button>
          <button
            onClick={() => handleNavigation('services')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('services-nav')}
          </button>
          <button
            onClick={() => handleNavigation('consultations')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('consultations')}
          </button>
          <button
            onClick={() => handleNavigation('contact-us')}
            className="cursor-pointer p-2 rounded-xl hover:text-white hover:bg-customblue transition-colors duration-500"
          >
            {t('contact-nav')}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector isMenuOpen={isMenuOpen} />
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
            <button
              onClick={() => handleNavigation('about')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('about-nav')}
            </button>
            <button
              onClick={() => handleNavigation('our-programs')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('our-programs-nav')}
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('services-nav')}
            </button>
            <button
              onClick={() => handleNavigation('consultations')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('consultations')}
            </button>
            <button
              onClick={() => handleNavigation('contact-us')}
              className="text-xl text-slate-700 hover:text-customblue"
            >
              {t('contact-nav')}
            </button>
            
          </nav>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center">
            <div className='mb-2'>
              <LanguageSelector isMenuOpen={isMenuOpen} /> {/* Ensure LanguageSelector is positioned correctly */}
            </div>
            <Button onClick={handleBlog} className="cursor-pointer bg-customblue hover:bg-custombluehover">
              {t('blog-nav')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
