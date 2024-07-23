import React from 'react'
import { useTranslation } from 'react-i18next'

export const ResidentAbout: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about">
      <div className="relative w-full py-16 text-white text-justify">
        
        {/* Background Image */}
{/*         <img
          src="/images/visa-application-canada1.jpg"
          alt="Visa Application Canada"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row mx-auto w-full max-w-full p-10 rounded-lg bg-white bg-opacity-95 shadow-md">
            
            {/* Left Column: Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="/images/canada-portfolio2.jpg"
                alt="Visa Application Canada"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-1/2 md:pl-10">
              {/* Header */}
              <div className="flex items-center justify-center mb-8">
                <h1 className="text-center text-3xl font-bold tracking-tighter text-black sm:text-5xl xl:text-6xl">
                  {t('about-us')}
                </h1>
              </div>

              {/* Content Sections */}
              <div className="p-2">
                <p className="text-xl text-gray-900">{t('diverse-story')}</p>
              </div>
              <div className="p-2">
                <p className="text-xl text-gray-900">{t('diverse-mission')}</p>
              </div>
              <div className="p-2">
                <p className="text-xl text-gray-900">{t('diverse-vision')}</p>
              </div>
              <div className="p-2">
                <p className="text-xl text-gray-900">{t('diverse-values')}</p>
              </div>
              <div className="p-2 space-y-8">
                <h2 className="text-3xl text-gray-800 text-center">{t('our-team')}</h2>
                <p className="text-xl text-gray-900 font-arial">{t('diverse-team-about')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
