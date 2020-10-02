/// <reference types="cypress" />


//Elements
const titileRoomsPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewoRoomsButton = ':nth-child(1) > .btn'



//Actions /functions
function checkTitleOfRoomsPage(cy){
   cy.title().should('eq',titileRoomsPage)
}

function GoToRoomPage(cy, contentToComfirm){
    cy.get(viewoRoomsButton).click()
    cy.contains(contentToComfirm)
}

function performLogout(cy, contentToComfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToComfirm)
}



//Exports
module.exports ={
checkTitleOfRoomsPage,
GoToRoomPage,
performLogout
}