class TokenFactory {
  getTokenHeaderName() {
    return 'authorization'
  }

  getTypeToken() {
    return 'Bearer'
  }
}

export default TokenFactory
