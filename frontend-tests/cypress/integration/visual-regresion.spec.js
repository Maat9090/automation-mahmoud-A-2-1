
/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets1'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/Clients'
import * as CreateNewClientsFuncs from '../pages/newClientPage'

// This is a test suite
describe ('Regression with page object test suite',function(){

    beforeEach( () =>{

        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        })
    


    // This is test case nr5
    it(' Edit first client ', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        clientFuncs.GoToClientPage(cy,'Clients')
        CreateNewClientsFuncs.GoToNewClientPage(cy,'New Client')
        CreateNewClientsFuncs.makeNewClient(cy,targets.name,targets.email,targets.telephoneNr,'Clients')
        cy.percySnapshot('New client')

        CreateNewClientsFuncs.editThetelephoneNrFirstClient(cy,targets.telephoneNr) 
        cy.percySnapshot('Edit client')

        dashBoardFuncs.performLogout(cy,'Login')                   

        
    })



})
