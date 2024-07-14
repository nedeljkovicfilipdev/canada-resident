import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ResidentMain } from 'src/components/resident-main'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <ResidentMain />
    </>
  )
}
