/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage
const url = Cypress.config("baseUrl")

Given("acesso o site ultima", () => {
    //  loginPage.acessarSite();
    cy.visit(url)
   
})

When("acesso a pagina de login", () => {
    // loginPage.abraPaginaLogin();
    cy.visit('https://edu.ultima.school/lgn/')
})

Then("devo visualizar botao de conecte", () => {
    // loginPage.visualizarBotaoCadastro();
    cy.get('#wp-submit')
    .invoke('attr', 'value')
    .should('eq', 'Conecte-se')
})