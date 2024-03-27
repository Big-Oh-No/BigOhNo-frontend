//Test Case 2.4: Admin verifies
//Run Test.4 before running this



describe('Visiting the website', () => {

  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    cy.wait(1000)
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('admin@korse.com',{ delay: 100 })
    cy.wait(1000)

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password',{ delay: 100 })
    cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').click({ delay: 100 })
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    cy.wait(1000)

  
    //check Admin Verify
    cy.get('.flex-row > :nth-child(3)').click()
    cy.wait(4000)
 

    //Verifies Student
    cy.get(':nth-child(1) > :nth-child(5) > .w-full > .text-3xl > .flex').click()
    cy.wait(3000)

    
    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()
    cy.wait(1000)

    cy.visit('http://localhost:3000') // visit the website
    cy.wait(1000)
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('lj@korse.com',{ delay: 100 })
    cy.wait(1000)

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password',{ delay: 100 })
    cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').click({ delay: 100 })
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    cy.wait(4000)


   })


})