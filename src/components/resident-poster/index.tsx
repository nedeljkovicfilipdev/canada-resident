import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Link } from 'react-scroll';

const ResidentPoster = () => {
  const { t } = useTranslation();

  return (
    <section id="poster" className="h-screen">
      <div className="h-full w-full bg-[url('/images/canada-resident-poster4.jpg')] bg-cover bg-center pt-96">
        <div className="px-4 md:px-6">
          <div className="grid items-center gap-6">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="mb-24 bg-customblue bg-opacity-75 p-2 rounded-2xl shadow-lg container">
                <h1 className="mb-6 font-bold tracking-tighter text-white sm:text-xl xl:text-5xl">
                  {t('headline')}
                </h1>
                <h2 className="mb-6 font-regular text-3xl tracking-tighter text-white sm:text-2xl xl:text-2xl">
                  {t('subHeadline')}
                </h2>
                <Link 
                  to="contact-us" 
                  smooth={true} 
                  duration={500} 
                  className="cursor-pointer font-bold inline-flex items-center gap-3 py-4 px-6 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                  {t('callToAction')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentPoster;
