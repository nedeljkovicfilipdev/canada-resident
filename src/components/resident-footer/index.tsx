import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, PhoneCall } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await axios.post('http://localhost:3000/api/emails/send', formData); // Adjust this URL to match your deployment
      if (response.status === 200) {
        setStatus('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Clear the form
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again later.');
    }
  };

  return (
    <section id="contact-us">
      <div className="bg-customblue text-gray-200 w-full border-t px-4 py-8 md:px-12">
        <div className="container mx-auto grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:items-center">
          {/* Left Section - Logo and Contact Info */}
          <div className="mb-4 flex flex-col items-center md:mb-0 md:items-start">
            <Link
              to="poster"
              smooth={true}
              duration={500}
              className="cursor-pointer text-4xl hover:text-white dark:text-white"
            >
            <img 
                src="/images/logo/diverse-logo-crop.png" 
                alt="Diverse Logo" 
                className="h-60 w-auto dark:filter dark:brightness-90" 
            />
            </Link>

            <div className="mb-6 p-4 text-white rounded-lg shadow-md">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm">
                    {t('First Name')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm">
                    {t('Last Name')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm">
                  {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  rows={4}
                ></textarea>
              </div>
              <Button
                className="w-full bg-customblue py-2 text-lg text-white font-bold hover:bg-custombluehover"
                size="lg"
                type="submit"
              >
                {t('SEND')}
              </Button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
            <div className="mt-8 text-center font-light">
              <p>{t('connect-social-network')}</p>
              <div className="mt-2 flex justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white" title="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white" title="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white" title="LinkedIn">
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
