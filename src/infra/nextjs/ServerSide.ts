export default class ServerSideAdapter {
  static redirectPage({ res }, path) {
    if (!res) {
      return
    }
    res.writeHead(301, { Location: path })
    res.end()
  }
}
