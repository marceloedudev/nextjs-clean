import RoutesFactory from '@/main/factory/RoutesFactory'
import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'
import UserAuthTokenObjectMother from '../../../../../unit/domain/aggregates/auth/UserAuthTokenObjectMother'
import CypressUtils from '../../../utils'

const routesFactory = new RoutesFactory()
const fakerFactory = new FakerFactory()
const fakerInternet = fakerFactory.createInternet()
const cypressUtils = new CypressUtils()

When('click submit button to login', () => {
  cy.visit(`${routesFactory.createUserRoute().signin()}`)
  cypressUtils.mockSuccess({
    url: `/auth/v1/user/tokens`,
    method: 'POST',
    response: UserAuthTokenObjectMother.valid()
  })
  cy.getByTestId('email').focus().type(fakerInternet.email())
  cy.getByTestId('password').focus().type('123456@Asd')
  cy.getByTestId('submit').click()
})

Then('checks if the page is from the logged in profile', () => {
  cy.location('pathname').should(
    'eq',
    `${routesFactory.createUserRoute().profile()}`
  )
})
