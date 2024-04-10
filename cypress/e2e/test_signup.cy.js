/// <reference types="cypress"/>

import verified_admin from '../fixtures/verified_admin.json'

describe('Login', () => {
    const email = verified_admin.email;
    const password = verified_admin.password;

    beforeEach(() => cy.visit("/"))

    it('test location as sign in page', () => cy.contains("Sign In"));

    it('test sign up for student', () => {
        cy.get("div[testname=signup-button]").click();
        cy.url().should('include', 'signup');
        cy.get("input[testname=firstname]").type("Testing");
        cy.get("input[testname=lastname]").type("Student");
        cy.get("input[testname=email]").type("teststudent@kores.com");
        cy.get("input[testname=password]").type("password");
        cy.get("input[testname=confirmpassword]").type("password");
        cy.get("div[testname=student]").click();
        cy.get("div[testname=submit-button]").click();
        cy.url().should('include', 'hold');
        cy.contains('Verification Pending ...');
    });

    it('test sign up for student with already made account', () => {
        cy.get("div[testname=signup-button]").click();
        cy.url().should('include', 'signup');
        cy.get("input[testname=firstname]").type("Testing");
        cy.get("input[testname=lastname]").type("Student");
        cy.get("input[testname=email]").type(email);
        cy.get("input[testname=password]").type(password);
        cy.get("input[testname=confirmpassword]").type(password);
        cy.get("div[testname=student]").click();
        cy.get("div[testname=submit-button]").click();
        cy.get("div[testname=warn]").contains("Account with this email already exists")
    });
})