/// <reference types="cypress" />


//Elements
const titileOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'


//Actions /functions
function checkTitleOfDashboardPage(cy){
   cy.title().should('eq',titileOfDashboardPage)
}

function performLogout(cy, contentToComfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToComfirm)
}


//Exports
module.exports ={
checkTitleOfDashboardPage,
performLogout
}