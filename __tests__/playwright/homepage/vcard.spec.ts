import { expect, test } from '@playwright/test'

test.describe('ContactVcard Component', () => {
  test('should render divider text and QR code image', async ({ page }) => {
    // Navigate to the page containing the ContactVcard component
    await page.goto('http://localhost:3000')

    // Locate the ContactVcard container
    const contactVcard = page.locator('#contact-vcard')

    // Verify the container exists
    await expect(contactVcard).toBeVisible()

    // Verify the DividerWithText content
    const dividerText = contactVcard.locator('text=Scan to add my contact')
    await expect(dividerText).toBeVisible()

    // Verify the QR code image is present
    const qrCodeImage = contactVcard.locator('img[alt="contact QR code"]')
    await expect(qrCodeImage).toBeVisible()

    // Verify the QR code image dimensions (optional)
    const qrCodeBoundingBox = await qrCodeImage.boundingBox()
    expect(qrCodeBoundingBox?.width).toBeCloseTo(200, 1)
    expect(qrCodeBoundingBox?.height).toBeCloseTo(200, 1)
  })
})
