import { isMenuItemActive } from '@/lib/utils/helpers/menu/isMenuItemActive'

describe('isMenuItemActive', () => {
  describe('Home page handling', () => {
    it('should return true when both current path and href are "/"', () => {
      expect(isMenuItemActive('/', '/')).toBe(true)
    })

    it('should return false when current path is not "/" but href is "/"', () => {
      expect(isMenuItemActive('/who-i-am', '/')).toBe(false)
      expect(isMenuItemActive('/work-experience', '/')).toBe(false)
    })
  })

  describe('Other pages handling', () => {
    it('should return true for exact path matches', () => {
      expect(isMenuItemActive('/who-i-am', '/who-i-am')).toBe(true)
      expect(isMenuItemActive('/resume', '/resume')).toBe(true)
      expect(isMenuItemActive('/testimonials', '/testimonials')).toBe(true)
    })

    it('should return true when current path starts with menu item href (child pages)', () => {
      expect(isMenuItemActive('/work-experience/smartsupp-web', '/work-experience')).toBe(true)
      expect(isMenuItemActive('/work-experience/kooperativa', '/work-experience')).toBe(true)
      expect(isMenuItemActive('/personal-projects/krsiak', '/personal-projects')).toBe(true)
    })

    it('should return false when current path does not match menu item href', () => {
      expect(isMenuItemActive('/who-i-am', '/resume')).toBe(false)
      expect(isMenuItemActive('/testimonials', '/work-experience')).toBe(false)
      expect(isMenuItemActive('/personal-projects', '/work-experience')).toBe(false)
    })

    it('should handle similar paths correctly', () => {
      // Should not match /personal when current path is /personal-projects
      expect(isMenuItemActive('/personal-projects', '/personal')).toBe(false)
      // Should match /personal-projects when current path starts with it
      expect(isMenuItemActive('/personal-projects/test', '/personal-projects')).toBe(true)
    })
  })

  describe('Edge cases', () => {
    it('should handle empty strings', () => {
      expect(isMenuItemActive('', '')).toBe(false)
      expect(isMenuItemActive('/', '')).toBe(false)
      expect(isMenuItemActive('', '/')).toBe(false)
    })

    it('should handle trailing slashes', () => {
      expect(isMenuItemActive('/who-i-am/', '/who-i-am')).toBe(true)
      expect(isMenuItemActive('/who-i-am', '/who-i-am/')).toBe(false) // This might need adjustment based on requirements
    })
  })
})
