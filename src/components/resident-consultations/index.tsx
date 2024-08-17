import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export const ResidentJourney = () => {
  const { t } = useTranslation();

  const firstMeetingPoints = t('journeyStart.firstMeetingPoints', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section id="consultations" className="h-screen relative">
      <section className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/visa-application-canada.jpg')" }}>
        <div className="absolute top-0 left-0 w-full text-center bg-opacity-70 bg-customblue shadow-lg p-4">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">{t('journeyStart.consultationsTitle')}</h2>
        </div>

        <div className="flex flex-col items-center justify-center h-full p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {firstMeetingPoints.map((point, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg ${index === 0 ? 'bg-white text-black' : 'bg-customblue text-white bg-opacity-90'} h-auto`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                    <p className='text-lg mt-2'>{point.description}</p>
                  </div>
                  {index === 0 && (
                    <Link 
                      to="contact-us" 
                      smooth={true} 
                      duration={500} 
                      className="mt-6 cursor-pointer font-bold inline-flex items-center justify-center gap-3 py-4 px-6 bg-customblue text-white rounded-lg shadow-md hover:bg-custombluehover transition-colors duration-300"
                    >
                      {t('callToAction')}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ResidentJourney;
