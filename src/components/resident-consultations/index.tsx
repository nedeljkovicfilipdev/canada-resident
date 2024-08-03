import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

export const ResidentJourney = () => {
  const { t } = useTranslation();

  const firstMeetingPoints = t('journeyStart.firstMeetingPoints', { returnObjects: true }) as string[];
  const preparePoints = t('journeyStart.preparePoints', { returnObjects: true }) as string[];
  const successStories = t('journeyStart.successStories', { returnObjects: true }) as { text: string, author: string }[];

  return (
    <section id="consultations" className="p-8 bg-white">
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/visa-application-canada.jpg')"}}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white p-6 bg-opacity-70 bg-customblue rounded-lg shadow-lg ">
            <h2 className="sm:text-3xl xl:text-5xl font-bold mb-4">{t('journeyStart.consultationsTitle')}</h2>
          </div>
        </div>
      </section>

      <section className="py-8 tracking-tighter container">
        <div className="flex flex-col md:flex-row gap-8 text-[#333] ">
          <div className="md:w-1/2 bg-white-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-3xl mb-8 font-bold">{t('journeyStart.firstMeetingTitle')}</h4>
            <ul className="list-disc list-inside space-y-2 text-xl text-[#333]">
              {firstMeetingPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-white-100 p-6 rounded-lg shadow-lg">
            <h4 className=" text-3xl mb-8 font-bold">{t('journeyStart.prepareTitle')}</h4>
            <ul className="list-disc list-inside space-y-2 text-xl text-gray-900 ">
              {preparePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h3 className="text-3xl font-bold text-center mb-6">{t('journeyStart.successStoriesTitle')}</h3>
        <Marquee gradient={false} speed={30} className="overflow-hidden">
          <div className="flex space-x-4">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex-none flex flex-col justify-center mx-2"
              >
                <p className="text-gray-700 italic text-lg mb-2">{story.text}</p>
                <p className="text-gray-900 font-bold text-lg">{story.author}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </section>
  );
};

export default ResidentJourney;
