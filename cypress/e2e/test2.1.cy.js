//Edit student Profile
//Test Case 1: Student successfully Sign Ins and navigates 
//through the dashboard

describe('Visiting the website', () => {

  


  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    cy.wait(1000)
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('student@korse.com',{ delay: 100 })
    cy.wait(1000)

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password',{ delay: 100 })
    cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').should('be.visible').trigger('mouseover');
    cy.wait(6000);
    cy.get('.mt-12 > .flex').click({ delay: 100 })
   
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    cy.wait(4000)

    // //check courses
    // cy.get('.fixed > .flex-row > :nth-child(2)').click({ delay: 100 })
    // cy.wait(2000)
    // cy.scrollTo('bottom', { duration: 2000 })
    // cy.wait(2000)

    // //Check request status
    // cy.get('.flex-row > :nth-child(4)').click({ delay: 100 })
    // cy.wait(2000)

    //Check profile
    cy.get('.flex-row > :nth-child(5)').click({ delay: 100 })
    cy.wait(4000)

    cy.get('.absolute > .flex').click()

    //exit
    //cy.get('.fixed > .flex-row > :nth-child(1)').click({ delay: 100 })


   })


})
