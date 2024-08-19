import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { EmailForm } from '../_email';

const ResidentPoster = () => {
  const { t } = useTranslation();

  return (
    <section id="poster" className="relative h-screen">
  <div className="absolute inset-0 bg-[url('/images/canada-poster.jpg')] bg-cover bg-center z-0"></div>
    <div className="relative h-full w-full flex z-20">
      <div className="grid md:grid-cols-7 gap-6 items-center w-full">
        <div className="xl:col-span-7 flex flex-col md:flex-row items-center justify-between shadow-lg bg-opacity-75 bg-customblue p-8 w-full">
          <div className="flex flex-col mx-auto items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl font-black tracking-tighter xl:text-5xl">
              {t('headline')}
            </h1>
            <h2 className="mb-6 font-regular text-xl tracking-tighter xl:text-2xl">
              {t('subHeadline')}
            </h2>
          </div>
          <div className="md:w-2/7 bg-white bg-opacity-95 p-6 text-black rounded-2xl shadow-lg text-left">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
</section>
  );
};

export default ResidentPoster;

{/* <section id="poster" className="relative h-screen">
  <div className="absolute inset-0 bg-[url('/images/canada-poster.jpg')] bg-cover bg-center z-0"></div>
    <div className="relative h-full w-full flex z-20">
      <div className="grid md:grid-cols-7 gap-6 items-center w-full">
        <div className="xl:col-span-7 flex flex-col md:flex-row items-center justify-between shadow-lg bg-opacity-75 bg-customblue p-8 w-full">
          <div className="flex flex-col mx-auto items-center justify-center text-center text-white">
            <h1 className="mb-6 text-2xl font-black tracking-tighter xl:text-5xl">
              {t('headline')}
            </h1>
            <h2 className="mb-6 font-regular text-xl tracking-tighter xl:text-2xl">
              {t('subHeadline')}
            </h2>
          </div>
          <div className="md:w-2/7 bg-white bg-opacity-80 p-6 text-black rounded-2xl shadow-lg text-left">
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
</section> */}

/* 
    <section id="poster" className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/images/canada-poster.jpg')] bg-cover bg-center z-0"></div>
      <div className="relative h-full w-full flex z-20">
        <div className="grid md:grid-cols-1 gap-6 items-center w-full">
          <div className="flex flex-col items-center justify-center shadow-lg bg-opacity-75 bg-customblue p-8 w-full text-center text-white">
            <h1 className="mb-6 text-2xl font-black tracking-tighter xl:text-5xl">
              {t('headline')}
            </h1>
            <h2 className="mb-6 font-regular text-xl tracking-tighter xl:text-2xl">
              {t('subHeadline')}
            </h2>
            <Link 
              to="contact-us" 
              smooth={true} 
              duration={500} 
              className="mt-6 cursor-pointer font-bold inline-flex items-center justify-center gap-3 py-4 px-6 bg-customblue text-white rounded-lg shadow-md hover:bg-custombluehover transition-colors duration-300"
            >
              {t('callToAction')}
            </Link>
          </div>
        </div>
      </div>
    </section> 
*/