export type BottomDrawerProps = {
  isOpen: boolean
  onClose: () => void
  menuRef: React.Ref<HTMLUListElement>
  drawerRef: React.Ref<HTMLDivElement>
}
