describe('Gallery Category Navigation', () => {
  beforeEach(() => {
    cy.visit('https://artsync.netlify.app/gallery')// Visit the gallery page
  })

  it('navigates to the Painting category correctly', () => {
    cy.contains('PAINTING').click()// Adjust if the text is different or if you need a more specific selector
    cy.url().should('include', '/painting') // Check that the URL is correct
  })

  it('navigates to the Sculpture category correctly', () => {
    cy.contains('SCULPTURE').click()
    cy.url().should('include', '/sculpture')
  })

  it('navigates to the Sketch category correctly', () => {
    cy.contains('SKETCH').click();
    cy.url().should('include', '/sketch')
  })
})
