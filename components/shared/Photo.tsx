import { FC } from 'react'

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

// small
const IMAGE_WIDTH_SM = 216
const IMAGE_HEIGHT_SM = 216

// large
const IMAGE_WIDTH_LG = 296
const IMAGE_HEIGHT_LG = 296

const Photo: FC<PhotoProps> = ({ isPhotoSmall, isOpenToWork, showCaption = true }): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-full bg-black">
        {/* base image */}
        <ImageComponent
          src={isPhotoSmall ? krsiakSM : krsiakLG}
          width={isPhotoSmall ? IMAGE_WIDTH_SM : IMAGE_WIDTH_LG}
          height={isPhotoSmall ? IMAGE_HEIGHT_SM : IMAGE_HEIGHT_LG}
          alt={TEXT.nameDanielKrsiak}
          loading={ImageLoading.LAZY}
          customCss="rounded-full border border-violet-300 bg-violet-50 p-1 shadow-md"
          dataTestId={DATA_TEST_IDS.misc.linkedinPhoto}
          sizes={`${isPhotoSmall ? IMAGE_WIDTH_SM : IMAGE_WIDTH_LG}px`}
        />

        {/* image overlay */}
        {isOpenToWork && (
          <ImageComponent
            src={isPhotoSmall ? openToWorkSM : openToWorkLG}
            width={isPhotoSmall ? IMAGE_WIDTH_SM : IMAGE_WIDTH_LG}
            height={isPhotoSmall ? IMAGE_HEIGHT_SM : IMAGE_HEIGHT_LG}
            alt={TEXT.openToWork}
            loading={ImageLoading.LAZY}
            customCss="absolute left-0 top-0 h-full w-full"
            sizes={`${isPhotoSmall ? IMAGE_WIDTH_SM : IMAGE_WIDTH_LG}px`}
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
