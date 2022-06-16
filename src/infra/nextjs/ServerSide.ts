export default class ServerSideAdapter {
  static redirectPage({ res }, path) {
    if (!res) {
      return
    }
    res.writeHead(301, { Location: path })
    res.end()
  }

  isBrowser() {
    return typeof window === 'undefined'
  }

  isServer() {
    return !this.isBrowser()
  }
}
