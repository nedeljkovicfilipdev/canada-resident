import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { Link } from 'react-scroll'

export const ResidentPoster = () => {
  const { t } = useTranslation()

  return (
    <section id="poster">
      <div className="min-h-[100vh] w-full bg-[url('/images/canada-resident-poster.png')] bg-cover bg-center pt-96 md:clip-path-custom-circle">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mb-24">
                <h1 className="mb-6 text-5xl tracking-tighter text-white drop-shadow-md sm:text-5xl xl:text-6xl">
                  {t('headline')}
                </h1>
                <h2 className="mb-6 text-3xl tracking-tighter text-white drop-shadow-md sm:text-2xl xl:text-3xl">
                  {t('subHeadline')}
                </h2>
                <Link 
                  to="contact-us" 
                  smooth={true} 
                  duration={500} 
                  className="cursor-pointer inline-flex items-center gap-3 py-4 px-6 bg-white text-black border-2 border-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                  {t('callToAction')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
