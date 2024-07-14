import { useTranslation } from 'react-i18next'

export const ResidentStoryline = () => {
  const { t } = useTranslation()

  return (
    <div>
      <section className="mt-[50px] w-full bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-20">
            <h1 className="mb-6 text-center text-3xl tracking-tighter text-black sm:text-5xl xl:text-6xl">
              {t('storyline-title')}
            </h1>
            <div className="flex flex-col items-center space-y-2 p-4">
              <p className="mb-6 text-center text-justify text-xl tracking-tighter text-black sm:text-2xl xl:text-3xl">
                {t('storyline')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
