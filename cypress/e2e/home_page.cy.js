
describe('The Home Page', () => {
  
  
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
    cy.get('.mt-10 > .focus\\:outline-none').type('student@korse.com')
    
    cy.get('.w-\\[92\\.5\\%\\]').type('password')
    
    cy.get('.mt-12 > .flex').click()
    
    cy.get('.fixed > .flex-row > :nth-child(2)').click()
  
   })


})