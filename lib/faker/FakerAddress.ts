export default class FakerAddress {
  private lib

  constructor(faker) {
    this.lib = faker.address
  }

  zipCode() {
    return this.lib.zipCode()
  }

  zipCodeByState() {
    return this.lib.zipCodeByState()
  }

  zipCodeValid() {
    return this.lib.zipCodeValid()
  }

  zipCodeValidByState() {
    return this.lib.zipCodeValidByState()
  }

  city() {
    return this.lib.city()
  }

  cityPrefix() {
    return this.lib.cityPrefix()
  }

  citySuffix() {
    return this.lib.citySuffix()
  }

  streetName() {
    return this.lib.streetName()
  }

  streetAddress() {
    return this.lib.streetAddress()
  }

  streetSuffix() {
    return this.lib.streetSuffix()
  }

  streetPrefix() {
    return this.lib.streetPrefix()
  }

  secondaryAddress() {
    return this.lib.secondaryAddress()
  }

  county() {
    return this.lib.county()
  }

  country() {
    return this.lib.country()
  }

  countryCode() {
    return this.lib.countryCode()
  }

  state() {
    return this.lib.state()
  }

  stateAbbr() {
    return this.lib.stateAbbr()
  }

  latitude() {
    return this.lib.latitude()
  }

  longitude() {
    return this.lib.longitude()
  }
}
