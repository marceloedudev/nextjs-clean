import { CypressMockSuccessProps } from './types'

class CypressUtils {
  mockSuccess({ url, method, response }: CypressMockSuccessProps) {
    cy.server()
    cy.route({
      method,
      url,
      status: 200,
      response,
      delay: 500
    }).as('request')
  }
}

export default CypressUtils
