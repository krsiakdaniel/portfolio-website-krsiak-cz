import ErrorPageContent from '@/components/layout/errors/ErrorPageContent'
import PageContainer from '@/components/layout/PageContainer'

import { ID } from '@/lib/utils/constants/ids/elementIds'
import { PAGES_URL } from '@/lib/utils/constants/urls/pageUrls'
import { TEXT } from '@/localization/english'

import img404 from '@/public/images/webp/errors/404.webp'

const NotFoundPage = (): JSX.Element => {
  return (
    <PageContainer id={ID.error.err404}>
      <ErrorPageContent
        imgSrc={img404}
        imgAlt={TEXT.error404}
        heading={TEXT.error404}
        description={TEXT.error404Description}
        note={TEXT.error404Note}
        buttonText={TEXT.backToHome}
        buttonLink={PAGES_URL.home}
      />
    </PageContainer>
  )
}

export default NotFoundPage
