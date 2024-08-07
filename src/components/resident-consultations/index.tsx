import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

export const ResidentJourney = () => {
  const { t } = useTranslation();

  const firstMeetingPoints = t('journeyStart.firstMeetingPoints', { returnObjects: true }) as string[];
  const preparePoints = t('journeyStart.preparePoints', { returnObjects: true }) as string[];
  const successStories = t('journeyStart.successStories', { returnObjects: true }) as { text: string, author: string }[];

  return (
    <section id="consultations" className="p-8 h-screen">
      <section className="relative h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/visa-application-canada.jpg')" }}>
        <div className="absolute top-0 w-full flex justify-center pt-8">
          <div className="text-center text-white p-6 bg-opacity-70 bg-customblue rounded-lg shadow-lg">
            <h2 className="sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">{t('journeyStart.consultationsTitle')}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          <div className="col-span-1 md:col-span-3 flex items-center justify-center">
            <div className="w-full md:w-2/5 h-auto md:h-[350px] bg-customblue text-white p-6 rounded-lg shadow-lg bg-opacity-90">
              <h4 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold">{t('journeyStart.firstMeetingTitle')}</h4>
              <ul className="list-disc list-inside space-y-1 md:space-y-2 text-lg md:text-xl">
                {firstMeetingPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white py-2">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">{t('journeyStart.successStoriesTitle')}</h3>
          <Marquee gradient={false} speed={30} className="overflow-hidden">
            <div className="flex space-x-2 md:space-x-4">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white p-2 md:p-4 rounded-lg flex-none flex flex-col justify-center mx-1 md:mx-2"
                >
                  <p className="text-gray-700 italic text-base md:text-lg mb-1 md:mb-2">{story.text}</p>
                  <p className="text-gray-900 font-bold text-base md:text-lg">{story.author}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </section>
  );
};

export default ResidentJourney;
