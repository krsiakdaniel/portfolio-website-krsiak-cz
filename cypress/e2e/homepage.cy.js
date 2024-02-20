describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check if title contains text', () => {
    cy.get('h1')
    .contains('Krsiak Daniel');
  })
})
