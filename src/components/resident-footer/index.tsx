import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { Link } from 'react-scroll';
import { EmailForm } from '../_email/index';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-us">
      <div className="bg-customblue text-gray-200 w-full px-4 py-8 md:px-12">
        <div className="container mx-auto grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:items-center">
          {/* Left Section - Logo and Contact Info */}
          <div className="mb-4 flex flex-col items-center md:mb-0 md:items-start bg-black bg-opacity-10 rounded-2xl p-4">
            <Link
              to="poster"
              smooth={true}
              duration={500}
              className="cursor-pointer text-4xl hover:text-white dark:text-white"
            >
            <img 
                src="/images/logo/dv-logo-white.png" 
                alt="Diverse Logo" 
                className="h-54 w-auto dark:filter dark:brightness-90 rounded-2xl" 
            />
            </Link>

            <div className="mb-6 p-4 text-white rounded-lg">
              <p className="mb-2">
                <a href="tel:+381645772908" className="flex text-blue-400 hover:text-blue-300">
                  <Phone className='mr-4'/>+381 64 4684465
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+381645772908" className="flex text-blue-400 hover:text-blue-300">
                  <PhoneCall className='mr-4 text-customgreen'/>+381 64 4684465
                </a>
              </p>
              <p className="mb-4">
                <a href="mailto:info@example.com" className="flex text-blue-400 hover:text-blue-300">
                <Mail className='mr-4'/>info@diversevisa.com
                </a>
              </p>
              <div className="mt-10 text-lg font-semibold">Locations:</div>
              <div className="mt-2">
                <p className='flex mb-4'><MapPin className='mr-4'/>Belgrade, Serbia</p>
                <p className='flex'><MapPin className='mr-4'/>Toronto, Canada</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-4 flex flex-col items-center md:mb-0 md:items-center"></div>

          {/* Right Section - Form and Social Links */}
          <div className='bg-white p-6 text-black rounded-2xl'>
            <EmailForm />
            <div className="mt-8 text-center font-light">
              <p>{t('connect-social-network')}</p>
              <div className="mt-2 flex justify-center gap-4">
                <a href="https://www.instagram.com/diversevisa?igsh=eXpvb3Zsd2R5dW03" className="text-custombluehover hover:text-customblue" title="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61564051493332" className="text-custombluehover hover:text-customblue" title="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://www.linkedin.com/company/diverse-visa/" className="text-custombluehover hover:text-customblue" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Footer Links and Contact Info */}
        <div className="mt-8 text-center text-gray-400">
          {/* Terms and Policy Links */}
          {/* <div className="mb-2">
            <p>
              <a href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white">
                {t('privacy-policy')}
              </a>{' '}
              |{' '}
              <a href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white">
                {t('terms-of-service')}
              </a>
            </p>
          </div> */}
          <div>
            <p>&copy; {new Date().getFullYear()} Filip Nedeljkovic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
