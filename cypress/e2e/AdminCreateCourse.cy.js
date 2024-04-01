//Test Case 3: Admin creates a new course
//through the dashboard

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
    

    cy.scrollTo('bottom')
    

    // //check Admin Verify
    // cy.get('.flex-row > :nth-child(3)').click()
    
   

    // //Check Admin Enroll
    // cy.get('.flex-row > :nth-child(2)').click()
    

    //Check admin add
    cy.get('.flex-row > :nth-child(5)').click()
    

    //Add Details
    cy.get('#dept').type('MATH')
    cy.get('#code').type('101')
    cy.get('#name').type('CALC 2')
    cy.get('#desc').type('Learn Integration.')
    cy.pause();
    cy.get('#term').select('W2')
    cy.get('#credits').clear()
    cy.get('#credits').type('3')
    cy.get('#totalSeats').type('100')
    cy.get('#teacherEmail').type('teacher@korse.com')
    

    //Click Submit
    cy.get('button').click()


    //View submitted course
    cy.get('.flex-row > :nth-child(4)').click()
    

    cy.scrollTo('bottom')
    

    



    // cy.scrollTo('bottom', { duration: 2000 })
    

    //Check profile
    // cy.get('.flex-row > :nth-child(6)').click()
    

    // //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})