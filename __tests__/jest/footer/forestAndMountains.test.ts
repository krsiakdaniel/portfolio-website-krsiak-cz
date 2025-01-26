import { updateIcons } from '@/components/layout/footer/divider/ManWalkingInForest'

// Test suite for Forest and Mountains
describe('Forest and Mountains', () => {
  it('should set Christmas icons on December 24th', () => {
    const setForestIcon = jest.fn() // Mock function for setting forest icon
    const setMountainIcon = jest.fn() // Mock function for setting mountain icon
    const date = new Date('2023-12-24') // Test date for Christmas

    updateIcons(date, setForestIcon, setMountainIcon)

    expect(setForestIcon).toHaveBeenCalledWith('🎄🎄') // Expect Christmas trees for forest
    expect(setMountainIcon).toHaveBeenCalledWith('🏔️🎄') // Expect Christmas trees for mountain
  })

  it('should set winter icons in January', () => {
    const setForestIcon = jest.fn() // Mock function for setting forest icon
    const setMountainIcon = jest.fn() // Mock function for setting mountain icon
    const date = new Date('2023-01-15') // Test date for winter

    updateIcons(date, setForestIcon, setMountainIcon)

    expect(setForestIcon).toHaveBeenCalledWith('🌲🌲') // Expect evergreen trees for forest
    expect(setMountainIcon).toHaveBeenCalledWith('🏔️🌲') // Expect snowy mountain for winter
  })

  it('should set regular icons in July', () => {
    const setForestIcon = jest.fn() // Mock function for setting forest icon
    const setMountainIcon = jest.fn() // Mock function for setting mountain icon
    const date = new Date('2023-07-15') // Test date for summer

    updateIcons(date, setForestIcon, setMountainIcon)

    expect(setForestIcon).toHaveBeenCalledWith('🌲🌲') // Expect evergreen trees for forest
    expect(setMountainIcon).toHaveBeenCalledWith('⛰️🌲') // Expect regular mountain for summer
  })
})
