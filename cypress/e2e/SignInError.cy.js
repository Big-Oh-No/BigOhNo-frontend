//Test Case 2: Teacher Unbale to Sign In , error in password

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') //  visit the website
    

    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('teacher@korse.com')
    

    //enter  Incorrect password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    
    
    //enter correct 
    cy.get('.w-\\[92\\.5\\%\\]').clear()
    
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    
    

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})