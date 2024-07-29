import { useTranslation } from 'react-i18next'

export const ResidentStoryline = () => {
  const { t } = useTranslation()

  return (
    <div>
      <section className="mt-[50px] w-full py-16 bg-gradient-to-r from-customblue to-custombluehover text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-12">
            <h1 className="text-center text-3xl tracking-tighter sm:text-lg xl:text-5xl font-bold">
              {t('storyline-title')}
            </h1>
            <div className="flex flex-col items-center space-y-2 p-4">
              <p className="mb-6 text-justify sm:text-lg xl:text-2xl font-light">
                {t('storyline')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResidentStoryline;
