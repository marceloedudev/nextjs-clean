export default class FakerInternet {
  private lib

  constructor(faker) {
    this.lib = faker.internet
  }

  avatar() {
    return this.lib.avatar()
  }

  email() {
    return this.lib.email()
  }

  exampleEmail() {
    return this.lib.exampleEmail()
  }

  userName() {
    return this.lib.userName()
  }

  protocol() {
    return this.lib.protocol()
  }

  url() {
    return this.lib.url()
  }

  domainName() {
    return this.lib.domainName()
  }

  domainSuffix() {
    return this.lib.domainSuffix()
  }

  domainWord() {
    return this.lib.domainWord()
  }

  ip() {
    return this.lib.ip()
  }

  ipv6() {
    return this.lib.ipv6()
  }

  userAgent() {
    return this.lib.userAgent()
  }

  color() {
    return this.lib.color()
  }

  mac() {
    return this.lib.mac()
  }

  password() {
    return this.lib.password()
  }
}
