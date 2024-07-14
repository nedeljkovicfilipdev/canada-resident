import React from 'react'
import { Globe2, Rocket, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const ResidentServices: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="services">
      <div className="mt-[50px] w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-20">
            <h2 className="text-center text-3xl font-bold">{t('services')}</h2>

            <div className="space-y-12">
              {/* Initial Consultations */}
              <div className="rounded-lg p-6">
                <h3 className="mb-4 text-2xl font-bold">{t('initial-consultations')}</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-300 p-4">
                    <p className="text-center text-xl font-bold text-gray-600">{t('expect-first-meeting')}</p>
                  </div>
                  <div className="rounded-lg border border-gray-300 p-4">
                    <p className="text-center text-xl font-bold text-gray-600">{t('prepare-first-meeting')}</p>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="rounded-lg p-6">
                <h3 className="mb-4 text-2xl font-bold">{t('other-services')}</h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-300 p-4">
                    <div className="rounded-full bg-gray-200 p-4 text-gray-600">
                      <Rocket size={32} />
                    </div>
                    <h4 className="text-xl font-bold">{t('service-1')}</h4>
                    <p className="text-center text-gray-600">{t('service-1-desc')}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-300 p-4">
                    <div className="rounded-full bg-gray-200 p-4 text-gray-600">
                      <Globe2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold">{t('service-2')}</h4>
                    <p className="text-center text-gray-600">{t('service-2-desc')}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-300 p-4">
                    <div className="rounded-full bg-gray-200 p-4 text-gray-600">
                      <Wrench size={32} />
                    </div>
                    <h4 className="text-xl font-bold">{t('service-3')}</h4>
                    <p className="text-center text-gray-600">{t('service-3-desc')}</p>
                  </div>
                  {/* Add more service blocks as needed */}
                </div>
              </div>

              {/* Success Stories */}
              <div className="rounded-lg p-6">
                <h3 className="mb-4 text-2xl font-bold">{t('success-stories')}</h3>
                <p className="text-xl">{t('testimonial-1')}</p>
                <p className="text-xl">{t('testimonial-2')}</p>
                <p className="text-xl">{t('testimonial-3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
