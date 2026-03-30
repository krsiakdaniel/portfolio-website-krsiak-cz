import Image from 'next/image'

import { LayoutViewEnum } from '@/lib/types/enums'

import { LayoutToggleProps } from './LayoutToggle.types'

const activeClassCss = 'rounded-md border border-violet-300 bg-violet-50 p-1.5 text-violet-700'
const inactiveClassCss =
  'rounded-md border border-neutral-200 bg-white p-1.5 text-neutral-400 hover:border-violet-300 hover:text-violet-700'

const LayoutToggle = ({ activeView, onListClick, onGridClick }: LayoutToggleProps) => {
  return (
    <div className="flex items-center justify-end gap-1">
      {/* List view button */}
      <button
        type="button"
        aria-label="List view"
        data-testid="layout-toggle-list"
        onClick={onListClick}
        className={`select-none ${activeView === LayoutViewEnum.List ? activeClassCss : inactiveClassCss}`}
      >
        <Image
          src="/icons/svg/layout-toggle/layout-list.svg"
          alt="List view"
          width={16}
          height={16}
        />
      </button>

      {/* Grid view button */}
      <button
        type="button"
        aria-label="Grid view"
        data-testid="layout-toggle-grid"
        onClick={onGridClick}
        className={`select-none ${activeView === LayoutViewEnum.Grid ? activeClassCss : inactiveClassCss}`}
      >
        <Image
          src="/icons/svg/layout-toggle/layout-grid.svg"
          alt="Grid view"
          width={16}
          height={16}
        />
      </button>
    </div>
  )
}

export default LayoutToggle
