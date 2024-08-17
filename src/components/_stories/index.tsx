import Marquee from "react-fast-marquee"
import { useTranslation } from "react-i18next";

export const Stories = () => {
    const { t } = useTranslation()

    const successStories = t('journeyStart.successStories', { returnObjects: true }) as { text: string, author: string }[];

    return(
        <div className="bottom-0 w-full bg-white py-2">
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
    )
}

export default Stories;