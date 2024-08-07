import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const ResidentPoster = () => {
  const { t } = useTranslation();

  return (
    <section id="poster" className="relative h-screen">
      {/* Background Color and Opacity */}

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/canada-poster.jpg')] bg-cover bg-center z-0"></div>

      <div className="relative h-full w-full flex items-center justify-center px-4 md:px-6 z-20">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-4 text-center mt-40">
            <div className="p-8 rounded-2xl shadow-lg bg-opacity-75 bg-customblue mb-12">
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
    </section>
  );
};

export default ResidentPoster;
