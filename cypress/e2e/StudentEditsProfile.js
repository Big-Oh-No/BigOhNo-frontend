//Test Case 2.1: Student edits Degree and Department


describe('Visiting the website', () => {

  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
   //cy.wait(1000)
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('student@korse.com')
    //cy.wait(1000)

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    //cy.wait(2000)

    //Select Sign-In
    // cy.get('.mt-12 > .flex').should('be.visible').trigger('mouseover');
    // cy.wait(6000);
    cy.get('.mt-12 > .flex').click()
   
    //cy.get('.mt-12 > .flex').invoke("show").click({ delay: 100 });
    //cy.wait(4000)

    // //check courses
    // cy.get('.fixed > .flex-row > :nth-child(2)').click({ delay: 100 })
    // cy.wait(2000)
    // cy.scrollTo('bottom', { duration: 2000 })
    // cy.wait(2000)

    // //Check request status
    // cy.get('.flex-row > :nth-child(4)').click({ delay: 100 })
    // cy.wait(2000)

    //Check profile
    cy.get('.flex-row > :nth-child(5)').click()
    //cy.wait(4000)
     
    //select edit
    cy.get('.absolute > .flex').click()
    //cy.wait(4000)


    //edit department
           //cy.get('#department').click()
           // cy.get('#department').focus()
           // cy.get('#department').type('{downarrow}')
           // cy.contains('Law').click({force: true});
    cy.get('#department').select('law');
    //cy.wait(1000)

    //edit degree

    cy.get('#degree').select('BA')
    //cy.wait(2000)
    

    //cy.get('[class*="w-30"][class*="rounded-full"] > .rounded-full').click();

    //change the profile picture
    cy.pause()
    //cy.wait(3000)

    // const fileName = 'Profile'; // Replace with the name of the file you want to upload
    // const filePath = '/Users/apoorvadevarakonda/Documents/BigOhNo-frontend/images/images.jpeg'; 

    //

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})
