/// <reference types="cypress" />




//Elements
const titileOfnewClientPage = 'Testers Hotel'
const createClinetButton = 'h2 > .btn'
const nameTextfield = ':nth-child(1) > input'
const emailTextfield = ':nth-child(2) > input'
const telephoneTextfield = ':nth-child(3) > input'
const telephoneTextfieldInEdit = ':nth-child(5) > input'
const saveButton = '.blue'
const editMenuButton = ':nth-child(1) > .action > img'
const editButton = '.menu > :nth-child(1)'


//Actions /functions
function checkOfnewClientPage(cy){
   cy.title().should('eq',titileOfnewClientPage)
}

function GoToNewClientPage(cy, contentToComfirm){
    cy.get(createClinetButton).click()
    cy.contains(contentToComfirm)
}


function makeNewClient(cy, name,email,telephoneNr,contentToComfirm){

    cy.get(nameTextfield).type(name)
    cy.get(emailTextfield).type(email) 
    cy.get(telephoneTextfield).type(telephoneNr) 
    cy.get(saveButton).click()
    cy.contains(contentToComfirm)
}



function editThetelephoneNrFirstClient(cy,telephoneNr){
   
    cy.get(editMenuButton).click()
    cy.get(editButton).click()
    cy.get(telephoneTextfieldInEdit).clear() 
    cy.get(telephoneTextfieldInEdit).type(telephoneNr) 
    cy.get(saveButton).click()
  
}
 

//Exports
module.exports ={
    checkOfnewClientPage,
    GoToNewClientPage,
    makeNewClient,
    editThetelephoneNrFirstClient

}