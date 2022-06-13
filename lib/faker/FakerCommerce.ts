export default class FakerCommerce {
  private lib

  constructor(faker) {
    this.lib = faker.commerce
  }

  color() {
    return this.lib.color()
  }

  department() {
    return this.lib.department()
  }

  productName() {
    return this.lib.productName()
  }

  price() {
    return this.lib.price()
  }

  productAdjective() {
    return this.lib.productAdjective()
  }

  productMaterial() {
    return this.lib.productMaterial()
  }

  product() {
    return this.lib.product()
  }
}
