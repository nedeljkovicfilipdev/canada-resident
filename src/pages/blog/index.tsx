import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ResidentBlog } from 'src/components/resident-blog'

export default function Blog() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <ResidentBlog />
    </>
  )
}
