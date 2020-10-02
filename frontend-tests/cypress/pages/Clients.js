/// <reference types="cypress" />


//Elements
const titileClientsPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewoClientsButton = '.blocks > :nth-child(2) > .btn'



//Actions /functions

function checkTitleOfClientsPage(cy){
    cy.title().should('eq',titileClientsPage)
 }


function GoToClientPage(cy, contentToComfirm){
    cy.get(viewoClientsButton).click()
    cy.contains(contentToComfirm)
}

function performLogout(cy, contentToComfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToComfirm)
}



//Exports
module.exports ={
GoToClientPage,
checkTitleOfClientsPage,
performLogout
}