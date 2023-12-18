describe('Navigation Links', () => {
  beforeEach(() => {
    cy.visit('https://artsync.netlify.app')
  })

  it('navigates to the Home page', () => {
    cy.get('.nav-link').contains('Home').click()
    cy.url().should('include', '/')
  })

  it('navigates to the Art Exhibition page', () => {
    cy.get('.nav-link').contains('Art Exhibition').click()
    cy.url().should('include', '/exhibition')
  })

  it('navigates to the Art Gallery page', () => {
    cy.get('.nav-link').contains('Art Gallery').click()
    cy.url().should('include', '/gallery')
  })

  it('navigates to the Art Quote page', () => {
    cy.get('.nav-link').contains('Art Quote').click()
    cy.url().should('include', '/quote')
  })
})
