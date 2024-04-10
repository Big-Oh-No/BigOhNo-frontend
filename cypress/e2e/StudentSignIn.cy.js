//Test Case 1: Student successfully Sign Ins and navigates 
//through the dashboard

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('student@korse.com')
    

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    

    //check courses
    cy.get('.fixed > .flex-row > :nth-child(2)').click()
    
    cy.scrollTo('bottom', { duration: 2000 })
    

    //Check request status
    cy.get('.flex-row > :nth-child(4)').click()
    

    //Check profile
    cy.get('.flex-row > :nth-child(5)').click()
    

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})