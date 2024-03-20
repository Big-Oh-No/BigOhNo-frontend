/// <reference types="cypress"/>

// describe('Visit Localhost Website', () => {
//   before(() => {
//      // Start the development server before running tests
//      cy.exec('npm run start'); // Replace this command with the one you use to start your development server
//   });

//   it('Open Website', () => {
//      // Intercept network requests
//      cy.intercept('GET', '**', (req) => {
//         // Modify the response body
//         if (req.url.startsWith('http://localhost:3000')) {
//            req.reply((res) => {
//               res.body = res.body.replace(/<a\s+(?:[^>]*?\s+)?target=(['"])_blank\1/gi, '<a target="_self"');
//               return res;
//            });
//         }
//      });

//      // Visit the website
//      cy.visit('http://localhost:3000');
//   });
// });
