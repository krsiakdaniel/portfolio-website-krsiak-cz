import ImageComponent from '@/components/shared/image-component/ImageComponent'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import openToWorkSM from '@/public/images/webp/photo/linkedin/open-to-work-216x216.webp'
import openToWorkLG from '@/public/images/webp/photo/linkedin/open-to-work-296x296.webp'
import krsiakPhoto from '@/public/images/webp/photo/me/krsiak-daniel-600x600.webp'

import { ImageLoadingEnum } from '@/lib/types/enums'
import { IMAGE_ALT } from '@/localization'

import { PHOTO_DIMENSIONS } from './Photo.constants'
import { type PhotoProps } from './Photo.types'

const Photo = ({ isPhotoSmall = false, isOpenToWork = false }: PhotoProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative rounded-full bg-black">
        {/* base image */}
        <ImageComponent
          src={krsiakPhoto}
          width={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}
          height={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.HEIGHT : PHOTO_DIMENSIONS.LARGE.HEIGHT}
          alt={IMAGE_ALT.profilePhoto}
          loading={ImageLoadingEnum.LAZY}
          customCss="rounded-full border border-violet-300 bg-white p-1"
          dataTestId={DATA_TEST_IDS.misc.linkedinPhoto}
          sizes={`${isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}px`}
        />

        {/* image overlay */}
        {isOpenToWork && (
          <ImageComponent
            src={isPhotoSmall ? openToWorkSM : openToWorkLG}
            width={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}
            height={isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.HEIGHT : PHOTO_DIMENSIONS.LARGE.HEIGHT}
            alt={IMAGE_ALT.openToWork}
            loading={ImageLoadingEnum.LAZY}
            customCss="absolute left-0 top-0 h-full w-full"
            sizes={`${isPhotoSmall ? PHOTO_DIMENSIONS.SMALL.WIDTH : PHOTO_DIMENSIONS.LARGE.WIDTH}px`}
          />
        )}
      </div>
    </div>
  )
}

export default Photo
