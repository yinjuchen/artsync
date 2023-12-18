describe('Home Page', () => {
  it('renders home cover image and quote correctly', () => {
    cy.visit('https://artsync.netlify.app'); // Visit the root path (home page)

    // Check if the div with the background image is rendered with the correct style
    cy.get('.home-image-container').should('have.css', 'background-image', 'url("https://i.ibb.co/cKqxHZR/home-cover-image.webp")');

    // Check for the presence of the quote text
    cy.contains('“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein').should('exist');
  });
});
