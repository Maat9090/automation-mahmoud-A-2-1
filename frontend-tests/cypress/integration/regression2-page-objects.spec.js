
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
    

    // This is a test case
    it('Perform login and logout', function(){

       indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
       dashBoardFuncs.checkTitleOfDashboardPage(cy)
       dashBoardFuncs.performLogout(cy,'Login')
    })


    // This is test case nr2
    it (' Show the booked rooms', function(){

        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        roomFuncs.GoToRoomPage(cy,'Rooms')
        roomFuncs.checkTitleOfRoomsPage(cy)
        dashBoardFuncs.performLogout(cy,'Login')
    })

   // This is test case nr3
    it(' Show the clients ', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        clientFuncs.GoToClientPage(cy,'Clients')
        clientFuncs.checkTitleOfClientsPage(cy)
        dashBoardFuncs.performLogout(cy,'Login')
       
    })
        
    // This is test case nr4
    it(' Create a new client ', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        clientFuncs.GoToClientPage(cy,'Clients')
        CreateNewClientsFuncs.GoToNewClientPage(cy,'New Client')
        CreateNewClientsFuncs.makeNewClient(cy,targets.name,targets.email,targets.telephoneNr,'Clients')
        dashBoardFuncs.performLogout(cy,'Login')
    })

    
    // This is test case nr5
    it(' Edit first client ', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        clientFuncs.GoToClientPage(cy,'Clients')
        CreateNewClientsFuncs.GoToNewClientPage(cy,'New Client')
        CreateNewClientsFuncs.makeNewClient(cy,targets.name,targets.email,targets.telephoneNr,'Clients')
        CreateNewClientsFuncs.editThetelephoneNrFirstClient(cy,targets.telephoneNr) 
        dashBoardFuncs.performLogout(cy,'Login')                   
        
    })



})
