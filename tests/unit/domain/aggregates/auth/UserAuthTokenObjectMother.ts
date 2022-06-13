import UserAuthToken from '@/domain/aggregates/auth/UserAuthToken'
import UserAuthTokenDataBuilder from './UserAuthTokenDataBuilder'

class UserAuthTokenObjectMother {
  static valid(): UserAuthToken {
    return UserAuthTokenDataBuilder.create()
      .withValidAccessToken()
      .withValidExpiresIn()
      .withValidRefreshToken()
      .withValidTokenType()
      .withValidUserId()
      .build()
  }
}

export default UserAuthTokenObjectMother
