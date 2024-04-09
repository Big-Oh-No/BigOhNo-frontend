//Test Case 2: Teacher successfully Sign Ins and navigates 
//through the dashboard

describe('Visiting the website', () => {

  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') //  visit the website
    

    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('teacher@korse.com')
    

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();

    //Select a course
    cy.get(':nth-child(1) > .bg-white').click()

    //Dashboard
    cy.get('.absolute').click()

    // cy.pause()

    //Assignments
    cy.get('.h-full > :nth-child(5)').click()


    //Create Quizes
   // cy.get('.h-screen > .z-20').click()


    //Create Quiz
    //cy.get('.bottom-10').click()

    //cy.get(':nth-child(1) > .bg-white > .h-\[60\%\] > .rounded-xl')

    // //Basic Comp Sci quiz
    // cy.get('.items-center > .px-5').type('COSC 111 101')

    // //Set deadline
    // cy.get('#deadline').type("2024-04-01T08:30")

    // //Max grade
    // cy.get('#grade').type("5")

    // //Question:

    // cy.get('.w-full.mb-4').type("2+3*4=")

    // //Options

    // cy.get('[placeholder="Option 1"]').type("10")
    // cy.get('[placeholder="Option 2"]').type("14")
    // cy.get('[placeholder="Option 3"]').type("20")
    // cy.get('[placeholder="Option 4"]').type("40")

    // //Correct Answer
    // cy.get('.max-w-md > :nth-child(2) > .w-full').select(1)

    // //add q
    // cy.get('.bg-blue-500').click()
    
    // //Submit
    // cy.get('.flex-row.items-center > .p-2').click()


    //Check created Quiz
    cy.get('.h-full > :nth-child(5)').click()
    
    //Go to dashboard
    cy.get(':nth-child(1) > .h-full.justify-center > .h-full > :nth-child(3)').click()



    

    // //Check profile
    // cy.get('.flex-row > :nth-child(3)').click()
    

    // //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})