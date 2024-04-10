//Test Case 2.1: Student edits Degree and Department


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
    // cy.get('.mt-12 > .flex').should('be.visible').trigger('mouseover');
    cy.get('.mt-12 > .flex').click()
   
    //cy.get('.mt-12 > .flex').invoke("show").click();
    

    // //check courses
    // cy.get('.fixed > .flex-row > :nth-child(2)').click()
    
    // cy.scrollTo('bottom', { duration: 2000 })
    

    // //Check request status
    // cy.get('.flex-row > :nth-child(4)').click()
    

    //Check profile
    cy.get('.flex-row > :nth-child(5)').click()
    
     
    //select edit
    cy.get('.absolute > .flex').click()
    


    //edit department
           //cy.get('#department').click()
           // cy.get('#department').focus()
           // cy.get('#department').type('{downarrow}')
           // cy.contains('Law').click({force: true});
    cy.get('#department').select('law');
    

    //edit degree

    cy.get('#degree').select('BA')
    
    

    //cy.get('[class*="w-30"][class*="rounded-full"] > .rounded-full').click();

    //change the profile picture
    cy.pause()
    

    // const fileName = 'Profile'; // Replace with the name of the file you want to upload
    // const filePath = '/Users/apoorvadevarakonda/Documents/BigOhNo-frontend/images/images.jpeg'; 

    //

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()


   })


})
