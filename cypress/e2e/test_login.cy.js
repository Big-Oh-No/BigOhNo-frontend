/// <reference types="cypress"/>

import verified_admin from '../fixtures/verified_admin.json'

describe('Login', () => {
    const email = verified_admin.email;
    const password = verified_admin.password;

    beforeEach(() => cy.visit("/"))

    it('test location as sign in page', () => cy.contains("Sign In"));

    it('test sign in with correct password', () => {
        cy.get("input[name=email]").type(email);
        cy.get("input[name=password]").type(password);
        cy.get("div[name=signin]").click();
        cy.url().should('include', 'dashboard', () => {
            expect(localStorage.getItem("AuthCookie")).to.exist()
        });
    });

    it('test sign in with wrong password', () => {
        cy.get("input[name=email]").type(email);
        cy.get("input[name=password]").type("wrongpassword");
        cy.get("div[name=signin]").click();
        cy.contains("Wrong email and password combination");
    });

    it('test logout', () => {
        cy.login(email, password);
        cy.get("div[name=logout-button]").click();
        cy.url().should('not.include', '/dashboard');
    });
})