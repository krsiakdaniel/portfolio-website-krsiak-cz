import ImageComponent from '@/components/shared/ImageComponent'
import ImageComponentCaption from '@/components/shared/ImageComponentCaption'

import { TEXT } from '@/localization/english'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'
import { ImageLoading } from '@/lib/utils/typeDefinitions/enums'
import { PhotoProps } from '@/lib/utils/typeDefinitions/props/pages/resume/resume'

import openToWorkSM from '@/public/images/webp/photo/linkedin/open-to-work-216x216.webp'
import openToWorkLG from '@/public/images/webp/photo/linkedin/open-to-work-296x296.webp'
import krsiakSM from '@/public/images/webp/photo/me/krsiak-daniel-216x216.webp'
import krsiakLG from '@/public/images/webp/photo/me/krsiak-daniel-296x296.webp'
import { PHOTO_DIMENSIONS } from './constants'

const Photo = ({ isPhotoSmall, isOpenToWork, showCaption = true }: PhotoProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-full bg-black">
        {/* base image */}
        <ImageComponent
          src={isPhotoSmall ? krsiakSM : krsiakLG}
          width={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}
          height={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.HEIGHT : PHOTO_DIMENSIONS.LARGE.HEIGHT}
          alt={TEXT.nameDanielKrsiak}
          loading={ImageLoading.LAZY}
          customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-md"
          dataTestId={DATA_TEST_IDS.misc.linkedinPhoto}
          sizes={`${isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}px`}
        />

        {/* image overlay */}
        {isOpenToWork && (
          <ImageComponent
            src={isPhotoSmall ? openToWorkSM : openToWorkLG}
            width={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}
            height={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.HEIGHT : PHOTO_DIMENSIONS.LARGE.HEIGHT}
            alt={TEXT.openToWork}
            loading={ImageLoading.LAZY}
            customCss="absolute left-0 top-0 h-full w-full"
            sizes={`${isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}px`}
          />
        )}
      </div>

      {showCaption && (
        <ImageComponentCaption text={TEXT.nameDanielKrsiak} alignSelf="self-center" />
      )}
    </div>
  )
}

export default Photo
