//Test Case 2: Teacher Unbale to Sign In , error in password

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') //  visit the website
    //cy.wait(1000)

    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('teacher@korse.com')
    //cy.wait(1000)

    //enter  Incorrect password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    //cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    //cy.wait(4000)
    
    //enter correct 
    cy.get('.w-\\[92\\.5\\%\\]').clear()
    //cy.wait(2000)
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    //cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    //cy.wait(4000)
    

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})