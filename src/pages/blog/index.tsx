import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ResidentBlog } from 'src/components/resident-blog'

export default function Blog() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>Diverse Visa - Expert Immigration Services for Canada and Beyond</title>
      </Helmet>
      <ResidentBlog />
    </>
  )
}
