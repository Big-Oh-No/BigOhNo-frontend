//Test Case 4: Student successfully Sign Ups 

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign Up and Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    
    
    //Select Sign-Up
    cy.get('.mt-2 > .inline').click()

    //enter first Name
    cy.get('.mt-8 > :nth-child(1) > .px-5').type('Jake',)
    

    //enter last Name
    cy.get('.mt-8 > :nth-child(2) > .px-5').type('Scott')
    

    //enter email 
    cy.get('.mt-5.flex-col > .px-5').type('J1@korse.com')
    

    //Create password
    cy.get('.flex-row.mt-5 > :nth-child(1) > .px-5').type('123456')
    

    //Confirm password
    cy.get('.flex-row.mt-5 > :nth-child(2) > .px-5').type('123456')
    

    //Role select
    cy.get(':nth-child(6) > .flex-row > :nth-child(2)').click()
    
    
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
    

    
    // //exit
    //cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})