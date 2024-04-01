//Test Case 2.5: Submits an enrollment request and admin accepts



describe('Visiting the website', () => {
  beforeEach(() => {
    cy.viewport(1965, 1087); // Set viewport dimensions
  });
  
  it('Sign In', () => {
    cy.visit('http://localhost:3000') // visit the website
    
    //enter email to sign in
    cy.get('.mt-10 > .focus\\:outline-none').type('J1@korse.com')
    

    //enter password
    cy.get('.w-\\[92\\.5\\%\\]').type('123456')
    

    //Select Sign-In
    cy.get('.mt-12 > .flex').click()
    //cy.get('.mt-12 > .flex').invoke("show").click();
    

    //check courses
    cy.get('.fixed > .flex-row > :nth-child(2)').click()
    
    cy.scrollTo('bottom')
    


    //Submit an enrollment request
    // cy.get(':nth-child(4) > .bg-white > .w-full > .items-end > .flex').click()
    

    //Check request status
    cy.get('.flex-row > :nth-child(4)').click()
    

    //exit
    cy.get('.fixed > .flex-row > :nth-child(1)').click()

    //Admin logins
    
     
      //enter email to sign in
      cy.get('.mt-10 > .focus\\:outline-none').type('admin@korse.com')
      
  
      //enter password
      cy.get('.w-\\[92\\.5\\%\\]').type('password')
      
  
      //Select Sign-In
      cy.get('.mt-12 > .flex').click()
      //cy.get('.mt-12 > .flex').invoke("show").click();
      

      //Check Admin Enroll
      cy.get('.bottom-8 > .flex-row > :nth-child(2)').click()
      

      //Commemt
      cy.get(':nth-child(2) > .pt-2 > .w-full').type('Accepted')
      //Accept
      
      cy.get(':nth-child(2) > :nth-child(7) > .w-full > :nth-child(1)').click()
      

      //Exit
      cy.get('.fixed > .flex-row > :nth-child(1)').click()


      //Re-Login as student
      cy.get('.mt-10 > .focus\\:outline-none').type('J1@korse.com')
      
  
      //enter password
      cy.get('.w-\\[92\\.5\\%\\]').type('123456')
      
  
      //Select Sign-In
      cy.get('.mt-12 > .flex').click()
      //cy.get('.mt-12 > .flex').invoke("show").click();
     
  


  




  })


})