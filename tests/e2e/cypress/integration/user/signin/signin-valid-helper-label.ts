import RoutesFactory from '@/main/factory/RoutesFactory'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const routesFactory = new RoutesFactory()

Given('visit sigin page', () => {
  cy.visit(`${routesFactory.createUserRoute().signin()}`)
})

When('click submit button', () => {
  cy.getByTestId('submit').click()
})

Then('show errors with helper label', () => {
  cy.getByTestId('email-helper').should('exist')
})
