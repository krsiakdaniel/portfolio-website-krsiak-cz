'use client' // uses onClick callbacks
import Menu from '@/components/layout/header/menu/Menu'

import { ARIA_LABELS } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { DeviceTypeEnum } from '@/lib/types/enums'

import { type BottomDrawerProps } from './BottomDrawer.types'

const BottomDrawer = ({ isOpen, onClose, menuRef, drawerRef }: BottomDrawerProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        data-testid={DATA_TEST_IDS.menu.bottomDrawerBackdrop}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        data-testid={DATA_TEST_IDS.menu.bottomDrawer}
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-label={ARIA_LABELS.menu}
        aria-hidden={!isOpen}
      >
        {/* Drag handle pill */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1.5 w-12 rounded-full bg-neutral-300" aria-hidden="true" />
        </div>

        <div className="px-4" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <Menu type={DeviceTypeEnum.Mobile} ref={menuRef} onClickLink={onClose} />
        </div>
      </div>
    </>
  )
}

export default BottomDrawer
