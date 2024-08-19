import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ResidentMain } from 'src/components/resident-main'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>Diverse Visa - Expert Immigration Services for Canada and Beyond</title>
      </Helmet>
      <ResidentMain />
    </>
  )
}
