import { Hemisphere, Moon } from 'lunarphase-js'

import { updateLunarPhase } from '@/components/layout/footer/divider/TheMoon'

// Mock the lunarphase-js library to control its behavior during tests
jest.mock('lunarphase-js', () => ({
  Hemisphere: {
    NORTHERN: 'northern',
  },
  Moon: {
    lunarPhaseEmoji: jest.fn(),
  },
}))

// Test suite for Moon Phases
describe('Moon Phases', () => {
  it('should set the correct lunar phase emoji', () => {
    const setLunarPhaseEmoji = jest.fn() // Mock function to set lunar phase emoji
    const mockEmoji = '🌕' // Mock emoji to be returned by lunarPhaseEmoji
    ;(Moon.lunarPhaseEmoji as jest.Mock).mockReturnValue(mockEmoji) // Mock the return value of lunarPhaseEmoji

    updateLunarPhase(setLunarPhaseEmoji) // Call the function to be tested

    // Verify that lunarPhaseEmoji was called with the correct parameters
    expect(Moon.lunarPhaseEmoji).toHaveBeenCalledWith(expect.any(Date), { hemisphere: Hemisphere.NORTHERN })
    // Verify that setLunarPhaseEmoji was called with the correct emoji
    expect(setLunarPhaseEmoji).toHaveBeenCalledWith(mockEmoji)
  })

  it('should call lunarPhaseEmoji with the correct parameters', () => {
    const setLunarPhaseEmoji = jest.fn() // Mock function to set lunar phase emoji
    const mockEmoji = '🌕' // Mock emoji to be returned by lunarPhaseEmoji
    ;(Moon.lunarPhaseEmoji as jest.Mock).mockReturnValue(mockEmoji) // Mock the return value of lunarPhaseEmoji

    updateLunarPhase(setLunarPhaseEmoji) // Call the function to be tested

    // Verify that lunarPhaseEmoji was called with the correct parameters
    expect(Moon.lunarPhaseEmoji).toHaveBeenCalledWith(expect.any(Date), { hemisphere: Hemisphere.NORTHERN })
  })
})
