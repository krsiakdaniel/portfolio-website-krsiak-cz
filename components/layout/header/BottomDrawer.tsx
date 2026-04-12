'use client' // uses vaul Drawer (client-only) and onClick callbacks
import { Drawer } from 'vaul'

import Menu from '@/components/layout/header/menu/Menu'

import { ARIA_LABELS } from '@/localization'

import { DATA_TEST_IDS } from '@/__tests__/playwright/lib/utils/constants/ids/dataTestIds'

import { DeviceTypeEnum } from '@/lib/types/enums'

import { type BottomDrawerProps } from './BottomDrawer.types'

const BottomDrawer = ({ isOpen, onClose, menuRef }: BottomDrawerProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Drawer.Portal>
        {/* Backdrop */}
        <Drawer.Overlay
          data-testid={DATA_TEST_IDS.menu.bottomDrawerBackdrop}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-hidden="true"
        />

        {/* Drawer */}
        <Drawer.Content
          data-testid={DATA_TEST_IDS.menu.bottomDrawer}
          className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl bg-white shadow-2xl outline-none lg:hidden"
          aria-hidden={!isOpen}
          aria-describedby={undefined}
        >
          <Drawer.Title className="sr-only">{ARIA_LABELS.menu}</Drawer.Title>

          {/* Drag handle pill */}
          <div className="flex cursor-grab justify-center pt-3 pb-2 active:cursor-grabbing">
            <div className="h-1.5 w-12 rounded-full bg-neutral-300" aria-hidden="true" />
          </div>

          <div className="px-4" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
            <Menu type={DeviceTypeEnum.Mobile} ref={menuRef} onClickLink={onClose} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default BottomDrawer
