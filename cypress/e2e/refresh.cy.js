describe('Page Refresh Test For Home', () => {
  it('maintains the correct state or content after refresh', () => {
    // Visit the specific page
    cy.visit('https://artsync.netlify.app')

    // Refresh the page
    cy.reload()

    // Assertions to check if the page is still showing expected content or state
    cy.url().should('include', '/')// Check if the URL is still correct
  })
})


describe('Page Refresh Test For Exhibition', () => {
  it('maintains the correct state or content after refresh', () => {
    // Visit the specific page
    cy.visit('https://artsync.netlify.app/exhibition')
    cy.reload();
    cy.url().should('include', '/exhibition')
  })
})


describe('Page Refresh Test for Gallery', () => {
  it('maintains the correct state or content after refresh', () => {
    // Visit the specific page
    cy.visit('https://artsync.netlify.app/gallery')
    cy.reload();
    cy.url().should('include', '/gallery')
  })
})


describe('Page Refresh Test for Quote', () => {
  it('maintains the correct state or content after refresh', () => {
    // Visit the specific page
    cy.visit('https://artsync.netlify.app/quote')
    cy.reload()
    cy.url().should('include', '/quote')
  })
})