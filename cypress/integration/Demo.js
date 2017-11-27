describe('My First Test', function() {
  beforeEach(function(){
    Cypress.Cookies.debug();
    })

  it('Sign In!', function() {
        cy.clearCookies();
  cy.visit(Cypress.env('url'));
    cy.visit('https://www.netflix.com/login');
    // Login
    cy.get('.login-input-email .ui-text-input').type('<yourusername>');
    cy.get('.login-input-password .ui-text-input').type('<yourpassword>');
    cy.get('.login-button').click();

    // Handle profiles gate
    //cy.get('#appMountPoint > div > div > div.profiles-gate-container > div > div > ul > li:nth-child(1) > div > a > div > div').should('be.visible');
    cy.get('#appMountPoint > div > div > div.profiles-gate-container > div > div > ul > li:nth-child(1) > div > a > div > div').click();

  // Validate that there are atleast 3 lolomo rows
     cy.get('.sliderMask').siblings()
        // calls the 'length' property yielding that value
        .its('length')
        .should('be.gt', 3)


      // scroll the button into view, as if the user had scrolled
      cy.get('.sliderMask').first().scrollIntoView()
        .should('be.visible');


      // Verify that the titles are visible
      cy.get('.title-card .video-artwork:not(.tall):not(.short)').should('be.visible');
      cy.get('.title-card .video-artwork:not(.tall):not(.short)').first().trigger('mouseover');

      // Click on expand arrow and verify jawbone is loaded
      cy.get('.bob-jaw-hitzone').should('be.visible');
      cy.get('.bob-jaw-hitzone').click();
      cy.get('.jawBone .Overview').should('be.visible');

      // cy.visit(Cypress.env('url') + '/logout');
      //  cy.get('.btn-logout').click();
      // cy.visit(Cypress.env('url'));

  })

  // afterEach(function(){
  // //   //cy.visit('https://www-int.test.netflix.com');

 //         //cy.visit('https://www-int.test.netflix.com/clearcookies');
 //          cy.visit(Cypress.env('url') + '/logout');
 //       //cy.get('.btn-logout').click();
 //       cy.wait(1000);   
 //       cy.visit(Cypress.env('url'));
 //    })

   it('Playback!', function() {
    cy.visit('https://www.netflix.com/login');
    // Login
    cy.get('.login-input-email .ui-text-input').type('<youruser>');
    cy.get('.login-input-password .ui-text-input').type('<yourpassword>');
    cy.get('.login-button').click();
    cy.visit(Cypress.env('url') + '/watch/80077368'); 

    cy.get('video').should('be.visible');

   })

})
