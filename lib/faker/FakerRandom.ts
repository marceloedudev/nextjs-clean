export default class FakerRandom {
  private lib

  constructor(faker) {
    this.lib = faker.random
  }

  number() {
    return this.lib.number()
  }

  float() {
    return this.lib.float()
  }

  arrayElement() {
    return this.lib.arrayElement()
  }

  objectElement() {
    return this.lib.objectElement()
  }

  uuid() {
    return this.lib.uuid()
  }

  boolean() {
    return this.lib.boolean()
  }

  word() {
    return this.lib.word()
  }

  words() {
    return this.lib.words()
  }

  image() {
    return this.lib.image()
  }

  locale() {
    return this.lib.locale()
  }

  alphaNumeric(value?: number) {
    return this.lib.alphaNumeric(value)
  }

  hexaDecimal() {
    return this.lib.hexaDecimal()
  }
}
