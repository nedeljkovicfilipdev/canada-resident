import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { Link } from 'react-scroll'

export const ResidentPoster = () => {
  const { t } = useTranslation()

  return (
    <section id="poster">
      <div className="min-h-[100vh] w-full bg-[url('/images/canada-resident-poster.jpg')] bg-cover bg-center pt-96 md:clip-path-custom-circle">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mb-24">
                <h1 className="mb-6 text-3xl tracking-tighter text-white sm:text-5xl xl:text-6xl">{t('headline')}</h1>
                <h2 className="mb-6 text-xl tracking-tighter text-white sm:text-2xl xl:text-3xl">{t('subHeadline')}</h2>
                <Button className="gap-3 py-6 text-lg font-semibold" size={'lg'} variant={'secondary'} asChild>
                  <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
                    {t('callToAction')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
