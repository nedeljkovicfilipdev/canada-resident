import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export const ResidentRequest = () => {
  const { t } = useTranslation()

  return (
    <section id="contact-us">
      <div className="relative w-full bg-cover bg-center py-32 md:py-48">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container relative px-4 md:px-6">
          <div className="mx-auto w-full max-w-full space-y-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h1 className="mb-6 font-eventbuk text-3xl tracking-tighter text-white sm:text-5xl xl:text-6xl">
                  {t('title-desc')}
                </h1>
              </div>
              <div className="rounded-lg border border-gray-300 bg-white bg-opacity-80 p-8">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                      {t('lastname')}
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                      {t('mobile')}
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      {t('email')}
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      {t('description-form')}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button
                    className="w-full gap-3 py-2 text-lg font-semibold"
                    size={'lg'}
                    type="submit"
                    variant={'secondary'}
                  >
                    {t('submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
