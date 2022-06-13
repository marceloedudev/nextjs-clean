import HomeRouter from '../routes/home'
import UserRouter from '../routes/user'

class RoutesFactory {
  createHomeRoute() {
    return new HomeRouter()
  }

  createUserRoute() {
    return new UserRouter()
  }
}

export default RoutesFactory
