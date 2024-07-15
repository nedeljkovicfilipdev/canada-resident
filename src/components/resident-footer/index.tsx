import { LanguageSelector } from '../language-selector'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-scroll'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <section id='contact-us'>
      <div className="bg-dark-blue w-full border-t px-4 py-8 md:px-12">
        <div className="container mx-auto grid grid-cols-1 items-start gap-8 text-black md:grid-cols-3 md:items-center">
          {/* Left Section - Logo and Contact Info */}
          <div className="mb-4 flex flex-col items-center md:mb-0 md:items-start">
            <Link
              to="poster"
              smooth={true}
              duration={500}
              className="cursor-pointer font-eventbuk text-xl text-slate-700 hover:text-white dark:text-white"
            >
              RESIDENT
            </Link>

            <div className="mb-2">
              <p>
                {t('contact-phone')}:{' '}
                <a href="tel:+381645772908" className="text-blue-500">
                  +381 645772908
                </a>
              </p>
              <p>
                {t('contact-email')}:{' '}
                <a href="mailto:info@example.com" className="text-blue-500">
                  info@example.com
                </a>
              </p>
            </div>
          </div>

          {/* Middle Section*/}
          <div className="mb-4 flex flex-col items-center md:mb-0 md:items-center"></div>

          {/* Right Section - Form and Social Links */}
          <div>
            <form className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400">
                    {t('First Name')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400">
                    {t('Last Name')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  {t('Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  {t('Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full border-b border-gray-500 bg-transparent p-2"
                  rows={4}
                ></textarea>
              </div>
              <Button
                className="w-full bg-customblue py-2 text-lg font-semibold text-white hover:bg-custombluehover"
                size="lg"
                type="submit"
              >
                {t('SEND')}
              </Button>
            </form>
            <div className="mt-8 text-center">
              <p>{t('Connect with us on social media')}</p>
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
          <div className="mb-2">
            <p>
              <a href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white">
                {t('privacy-policy')}
              </a>{' '}
              |{' '}
              <a href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white">
                {t('terms-of-service')}
              </a>
            </p>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Filip Nedeljkovic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
