import { useTranslation } from 'react-i18next'

export const ResidentAbout = () => {
  const { t } = useTranslation()

  return (
    <section id="about">
      <div className="relative w-full py-16 text-white text-justify">
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row mx-auto w-full max-w-full p-10 rounded-lg bg-white bg-opacity-95 shadow-md">
            
            {/* Left Column: Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="/images/about-canada.jpg"
                alt="Visa Application Canada"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-1/2 md:pl-10 tracking-tighter" >
              {/* Header */}
              <div className="flex items-center justify-center mb-8">
                <p className="mb-6 text-center font-bold text-black text-3xl md:text-2xl xl:text-5xl">
                  {t('about-us')}
                </p>
              </div>

              {/* Content Sections */}
              <div className="p-2 font-light">
                <p className="text-lg text-[#333]">{t('diverse-story')}</p>
              </div>
              <div className="p-2 font-light">
                <p className="text-lg text-[#333]">{t('diverse-mission')}</p>
              </div>
              <div className="p-2 font-light">
                <p className="text-lg text-[#333]">{t('diverse-vision')}</p>
              </div>
              <div className="p-2 font-light">
                <p className="text-lg text-[#333]">{t('diverse-values')}</p>
              </div>
              <div className="p-2 space-y-8 font-light">
                <h2 className="sm:text-2xl xl:text-3xl text-[#333] text-center font-bold">{t('our-team')}</h2>
                <p className="text-lg text-[#333] font-arial">{t('diverse-team-about')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ResidentAbout;