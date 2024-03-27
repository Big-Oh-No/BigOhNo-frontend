//Test Case 4: Student successfully Sign Ups 

describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign Up and Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    cy.wait(1000)
    
    //Select Sign-Up
    cy.get('.mt-2 > .inline').click({ delay: 100 })

    //enter first Name
    cy.get('.mt-8 > :nth-child(1) > .px-5').type('Jessie',{ delay: 100 })
    cy.wait(1000)

    //enter last Name
    cy.get('.mt-8 > :nth-child(2) > .px-5').type('Je',{ delay: 100 ,force: true})
    cy.wait(1000)

    //enter email 
    cy.get('.mt-5.flex-col > .px-5').type('jj@korse.com',{ delay: 100 ,force: true})
    cy.wait(1000)

    //Create password
    cy.get('.flex-row.mt-5 > :nth-child(1) > .px-5').type('123456',{ delay: 100,force: true })
    cy.wait(2000)

    //Confirm password
    cy.get('.flex-row.mt-5 > :nth-child(2) > .px-5').type('123456',{ delay: 100 ,force: true})
    cy.wait(2000)

    //Role select
    cy.get(':nth-child(6) > .flex-row > :nth-child(2)').click({ delay: 300 })
    cy.wait(4000)
    
    //Select Submit
    cy.get('.flex-row.justify-center > .flex').click({ delay: 100 })
    // cy.wait(4000)

    // //enter email
    // cy.get('.mt-10 > .focus\\:outline-none').type('jlee@korse.com',{ delay: 100 })
    // cy.wait(1000)

    // //enter password
    // cy.get('.w-\\[92\\.5\\%\\]').type('123456',{ delay: 100 })
    // cy.wait(2000)


    // //Select Sign-In
    // cy.get('.mt-12 > .flex').click({ delay: 100 })
    // //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    // cy.wait(4000)

    
    // //exit
    //cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})