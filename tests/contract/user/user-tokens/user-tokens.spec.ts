import ServiceFactoryHttp from '@/infra/service/factory/ServiceFactoryHttp'
import { Matchers } from '@pact-foundation/pact'
import UserAuthTokenObjectMother from '../../../unit/domain/aggregates/auth/UserAuthTokenObjectMother'
import {
  describe,
  expect,
  it,
  beforeAll,
  afterEach,
  afterAll
} from '@jest/globals'
import ContractFactory from '../../../factory/ContractFactory'
import path from 'path'
import HttpRequestFactory from '@/infra/factory/HttpRequestFactory'

const pathContract = path.resolve(
  path.resolve(path.join(__dirname, '..', '..', '..', '..'))
)
const { like } = Matchers
const contractFactory = new ContractFactory()
const provider = contractFactory.createProviderAuthService(pathContract)

describe('API User Tokens', () => {
  beforeAll(() => {
    return provider.setup()
  })

  afterEach(() => {
    return provider.verify()
  })

  afterAll(() => {
    return provider.finalize()
  })

  it('should generate the token', async () => {
    const makeHttpClient = new HttpRequestFactory(
      provider.mockService.baseUrl
    ).createHttpClient()
    const serviceFactoryHttp = new ServiceFactoryHttp(makeHttpClient)
    const authService = serviceFactoryHttp.createAuthService()
    const expectedProduct = UserAuthTokenObjectMother.valid()
    await provider.addInteraction({
      state: 'a user exists',
      uponReceiving: 'a request to get token',
      withRequest: {
        method: 'POST',
        path: '/user/tokens',
        headers: {
          Authorization: like('Bearer 8c55eb3d-3e87-4727-9569-b326ed76fdf7')
        }
      },
      willRespondWith: {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: like(expectedProduct)
      }
    })
    const login = await authService.makeUserToken({
      grant_type: 'password',
      username: 'demo',
      password: '123456@aB'
    })
    expect(login).toStrictEqual(expectedProduct)
  })
})
