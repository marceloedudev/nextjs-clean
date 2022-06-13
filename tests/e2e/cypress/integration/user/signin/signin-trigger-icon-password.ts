import RoutesFactory from '@/main/factory/RoutesFactory'
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'

const routesFactory = new RoutesFactory()
const fakerFactory = new FakerFactory()
const fakerInternet = fakerFactory.createInternet()

When('trigger mousedown icon password', () => {
  cy.visit(`${routesFactory.createUserRoute().signin()}`)
  cy.getByTestId('email').focus().type(fakerInternet.email())
  cy.getByTestId('password').focus().type('123456@Asd')
  cy.getByTestId('submit').click()
  cy.getByTestId('password-icon-password').trigger('mousedown')
})

Then('change the password field icon', () => {
  cy.getByTestId('input-password-hide-icon').should('exist')
})
