export default class FakerPhone {
  private lib

  constructor(faker) {
    this.lib = faker.phone
  }

  phoneNumber() {
    return this.lib.phoneNumber()
  }

  phoneNumberFormat() {
    return this.lib.phoneNumberFormat()
  }

  phoneFormats() {
    return this.lib.phoneFormats()
  }
}
