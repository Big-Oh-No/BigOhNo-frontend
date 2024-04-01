//Test Case 2.4: Admin verifies
//Run Test.4 before running this



describe('Visiting the website', () => {

  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('admin@korse.com')
    

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    

  
    //check Admin Verify
    cy.get('.flex-row > :nth-child(3)').click()
    
 

    //Verifies Student
    cy.get(':nth-child(1) > :nth-child(5) > .w-full > .text-3xl > .flex').click()
    

    
    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()
    

    cy.visit('http://localhost:3000') // visit the website
    
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('J1@korse.com')
    

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('123456')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    


   })


})