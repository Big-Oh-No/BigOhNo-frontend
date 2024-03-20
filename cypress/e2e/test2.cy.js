//Test Case 2: Teacher successfully Sign Ins and navigates 
//through the dashboard

describe('Visiting the website', () => {
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') //  visit the website
    cy.wait(1000)

    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('teacher@korse.com',{ delay: 100 })
    cy.wait(1000)

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password',{ delay: 100 })
    cy.wait(2000)

    //Select Sign-In
    cy.get('.mt-12 > .flex').click({ delay: 100 })
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    cy.wait(4000)

    //Check profile
    cy.get('.flex-row > :nth-child(3)').click()
    cy.wait(4000)

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})