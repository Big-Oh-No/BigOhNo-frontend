//Test Case 4: Teacher successfully Sign Ups 

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign Up and Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    
    
    //Select Sign-Up
    cy.get('.mt-2 > .inline').click()

    //enter first Name
    cy.get('.mt-8 > :nth-child(1) > .px-5').type('Janee',)
    

    //enter last Name
    cy.get('.mt-8 > :nth-child(2) > .px-5').type('Lee')
    

    //enter email 
    cy.get('.mt-5.flex-col > .px-5').type('janlee@korse.com')
    

    //Create password
    cy.get('.flex-row.mt-5 > :nth-child(1) > .px-5').type('123456')
    

    //Confirm Incorrect password
    cy.get('.flex-row.mt-5 > :nth-child(2) > .px-5').type('125623')
    

    //Role select
    cy.get(':nth-child(6) > .flex-row > :nth-child(2)').click()
    
    
    //Select Submit
    cy.get('.flex-row.justify-center > .flex').click()
    

    //Confirm Correct password
    cy.get('.flex-row.mt-5 > :nth-child(2) > .px-5').clear({ force: true })
    
    cy.get('.flex-row.mt-5 > :nth-child(2) > .px-5').type('123456')
    

    //Select Submit
    cy.get('.flex-row.justify-center > .flex').click()
    

    // //enter email
    // cy.get('.mt-10 > .focus\\:outline-none').type('jlee@korse.com',)
    // 

    // //enter password
    // cy.get('.w-\\[92\\.5\\%\\]').type('123456',)
    


    // //Select Sign-In
    // cy.get('.mt-12 > .flex').click()
    // //cy.get('.mt-12 > .flex').invoke("show").click();
    

    
    //exit
    //cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})