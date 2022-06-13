import UserEmail from '@/domain/entity/user/UserEmail'
import UserPassword from '@/domain/entity/user/UserPassword'

interface UserSigninInput {
  email: UserEmail
  password: UserPassword
}

export default UserSigninInput
