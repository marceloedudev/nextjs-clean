import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import UserSigninInputRequest from '@/domain/aggregates/auth/UserSigninInputRequest'
import UserEmail from '@/domain/entity/user/UserEmail'
import UserPassword from '@/domain/entity/user/UserPassword'
import ErrorBoundary from '@/domain/errors/ErrorBoundary'
import PageRouter from '@/infra/nextjs/PageRouter'
import AdaptersFactory from '@/main/factory/AdaptersFactory'
import RoutesFactory from '@/main/factory/RoutesFactory'
import UsecaseFactory from '@/main/factory/UsecaseFactory'
import { ToastError, ToastSuccess } from '@/view/components/Toast'
import UserSignInValidator from './UserSignInValidator'

class UserSignInHandler {
  private pageRouter: PageRouter
  private usecaseFactory: UsecaseFactory
  private fieldValidators: UserSignInValidator
  private routesFactory: RoutesFactory
  private adaptersFactory: AdaptersFactory

  constructor() {
    this.pageRouter = new PageRouter()
    this.usecaseFactory = new UsecaseFactory()
    this.fieldValidators = new UserSignInValidator()
    this.routesFactory = new RoutesFactory()
    this.adaptersFactory = new AdaptersFactory()
  }

  async submit(
    event,
    { data, loading, setAccessToken, setRefreshToken, setErrors, setLoading }
  ) {
    event.preventDefault()
    try {
      this.fieldValidators.build(data).validate()
      setErrors(this.fieldValidators.errorsFormatted())
      if (this.fieldValidators.hasNotifications() || loading) {
        return
      }
      setLoading(true)
      const userLogin: UserAuthToken = await this.usecaseFactory
        .createUserUsecase()
        .createSignInUsecase()
        .execute(
          new UserSigninInputRequest({
            email: new UserEmail(data.email),
            password: new UserPassword(data.password)
          })
        )
      ToastSuccess({ message: 'Logged successful' })
      setAccessToken(userLogin.getAccessToken())
      setRefreshToken(userLogin.getRefreshToken())
      this.adaptersFactory
        .createUserAccessToken()
        .set(userLogin.getAccessToken())
      this.pageRouter.push(`${this.routesFactory.createUserRoute().profile()}`)
    } catch (err) {
      ToastError({ message: new ErrorBoundary(err).getMessage() })
      setLoading(false)
    }
  }
}

export default UserSignInHandler
