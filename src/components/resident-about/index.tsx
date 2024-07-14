import React from 'react'
import { useTranslation } from 'react-i18next'

export const ResidentAbout: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="about">
      <div className="mt-[50px] w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-20">
            <h1 className="mb-6 text-center text-3xl tracking-tighter text-black sm:text-5xl xl:text-6xl">
              {t('about-us')}
            </h1>
            <section className="space-y-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold">{t('our-story')}</h2>
                <div className="space-y-4">
                  <p className="text-xl">{t('background-company')}</p>
                  <p className="text-xl">{t('founder-story-motivation')}</p>
                  <p className="text-xl">{t('journey-leading-service')}</p>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">{t('our-team')}</h2>
                <div className="space-y-4">
                  <p className="text-xl">{t('key-team-members')}</p>
                  <p className="text-xl">{t('expertise-experience')}</p>
                  <p className="text-xl">{t('photos-contact-info')}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
