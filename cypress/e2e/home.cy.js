describe('Home Page', () => {
  it('renders home cover image correctly', () => {
    cy.visit('https://artsync.netlify.app'); // Visit the root path (home page)

    // Wait for the home cover image and assert its visibility
    // it("should display a image in element img with class image", () => {
    //   cy.get('img[class="home-cover-image"]').find("img").should('be.visible');
    // });

    cy.get('img', { includeShadowDom: true })
      .filter('[src]')
      .filter(':visible')
      .should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));


    // Check for the presence of the quote text
    cy.contains('“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein').should('exist');

    // Add more assertions or commands to further validate the home page content
  });
});
