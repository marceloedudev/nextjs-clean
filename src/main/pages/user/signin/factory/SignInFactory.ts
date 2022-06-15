import RoutesFactory from '@/main/factory/RoutesFactory'
import UserSignInHandler from '../handler/UserSignInHandler'

class SignInFactory {
  private routesFactory: RoutesFactory
  private userSignInHandler: UserSignInHandler

  constructor() {
    this.routesFactory = new RoutesFactory()
    this.userSignInHandler = new UserSignInHandler()
  }

  createInstance() {
    return {
      routesFactory: this.routesFactory,
      userSignInHandler: this.userSignInHandler
    }
  }
}

export default SignInFactory
