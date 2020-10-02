/// <reference types="cypress" />


//Elements
const titileOfIndexPage = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'


//Actions /functions
function checkTitleOfIndexPage(cy){
   cy.title().should('eq',titileOfIndexPage)
}

function performValidLogin(cy, username,password,contentToComfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password) 
    cy.get(loginButton).click()
    cy.contains(contentToComfirm)
}


//Exports
module.exports ={
checkTitleOfIndexPage,
performValidLogin

}