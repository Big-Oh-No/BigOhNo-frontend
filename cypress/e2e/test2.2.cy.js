//Test Case 2.2: Teacher edits Profile
//through the dashboard

describe('Visiting the website', () => {

  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
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

    //select edit
    cy.get('.absolute > .flex').click({ delay: 100 })
    cy.wait(4000)

    //Change Office
    cy.get(':nth-child(3) > input').clear()
    cy.get(':nth-child(3) > input').type('Fip 313',{ delay: 100 })


    //Change bio
    cy.get('textarea').type('Office Hours: 12pm-2pm.',{ delay: 200 })

    //Save
    //cy.get('.w-30.rounded-full > .rounded-full').click({ force: true, delay: 100 });
    //cy.get('[class*=w-][class*=rounded-full]').click();
    //cy.get('.bg-light-theme .rounded-2xl .flex .w-[30%] .rounded-full').click();
    //cy.get('.bg-light-theme .rounded-2xl .flex .w-[30%] .rounded-full').click();

    //cy.get('.bg-light-theme .rounded-2xl .flex [class*=w-][class*=rounded-full]').click();


    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})