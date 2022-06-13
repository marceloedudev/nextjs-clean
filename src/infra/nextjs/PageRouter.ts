import Router from 'next/router'

class PageRouter {
  push(path: string) {
    Router.push(`${path}`)
  }
}

export default PageRouter
