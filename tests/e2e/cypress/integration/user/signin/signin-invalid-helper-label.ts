import RoutesFactory from '@/main/factory/RoutesFactory'
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'

const routesFactory = new RoutesFactory()
const fakerFactory = new FakerFactory()
const fakerInternet = fakerFactory.createInternet()

When('click submit button with everything filled', () => {
  cy.visit(`${routesFactory.createUserRoute().signin()}`)
  cy.getByTestId('email').focus().type(fakerInternet.email())
  cy.getByTestId('password').focus().type('123456@Asd')
  cy.getByTestId('submit').click()
})

Then("it shouldn't show errors", () => {
  cy.getByTestId('email-helper').should('not.exist')
})
