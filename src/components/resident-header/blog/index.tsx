import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSelector } from "src/components/language-selector";

export const HeaderBlog = () => {

    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        
    <div className="relative">
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border bg-slate-50 px-4 py-2 md:px-12">
    <Link
      to="/"
      className="flex font-bold md:flex-col sm:flex-row text-customblue items-center text-center cursor-pointer hover:opacity-75"
      onClick={handleClick}
    >
      <img 
        src="/images/logo/dv-icon.png" 
        alt="Diverse Logo" 
        className="h-10 w-auto" 
      />
      <span>DIVERSE VISA</span>
    </Link>

      <div className="hidden md:flex items-center gap-4">
        <LanguageSelector />
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
          <Link 
            to="/" 
            className="text-xl text-slate-700 hover:text-customblue"
            onClick={toggleMenu}
          >
            {t('home')}
          </Link>
        </nav>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <LanguageSelector />
        </div>
      </div>
    )}
  </div>
);
}

export default HeaderBlog;
