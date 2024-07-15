import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { ResidentLogin } from "src/components/resident-admin/resident-login";

export default function Login() {
    const { t } = useTranslation('translation')
    return(
        <>
        <Helmet>
          <title>{t('title')}</title>
        </Helmet>
        <ResidentLogin />
      </>
    )
}