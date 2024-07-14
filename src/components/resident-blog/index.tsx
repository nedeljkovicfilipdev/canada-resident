import { useTranslation } from 'react-i18next'

export const ResidentBlog = () => {
  const { t } = useTranslation('translation')

  return (
    <div className="container mx-auto mt-20 px-4">
      <article className="prose lg:prose-xl">
        <h1 className="mb-8 text-4xl font-bold lg:text-6xl">{t('it-development-guide')}</h1>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('introduction')}</h2>
          <p className="mb-6">{t('intro-text')}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('what-is-it-development')}</h2>
          <p className="mb-6">{t('what-is-it-development-text')}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('key-aspects')}</h2>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('sdlc')}</h3>
            <p className="mb-4">{t('sdlc-text')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('programming-languages')}</h3>
            <p className="mb-4">{t('programming-languages-text')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('agile-methodology')}</h3>
            <p className="mb-4">{t('agile-methodology-text')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('devops-practices')}</h3>
            <p className="mb-4">{t('devops-practices-text')}</p>
          </section>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('importance')}</h2>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('business-efficiency')}</h3>
            <p className="mb-4">{t('business-efficiency-text')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('customer-experience')}</h3>
            <p className="mb-4">{t('customer-experience-text')}</p>
          </section>

          <section>
            <h3 className="mb-2 text-xl font-bold lg:text-2xl">{t('security-and-risk')}</h3>
            <p className="mb-4">{t('security-and-risk-text')}</p>
          </section>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('challenges')}</h2>
          <p className="mb-6">{t('challenges-text')}</p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t('conclusion')}</h2>
          <p className="mb-6">{t('conclusion-text')}</p>
        </section>
      </article>
    </div>
  )
}
