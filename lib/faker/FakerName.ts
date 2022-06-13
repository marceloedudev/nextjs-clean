export default class FakerName {
  private lib

  constructor(faker) {
    this.lib = faker.name
  }

  firstName() {
    return this.lib.firstName()
  }

  lastName() {
    return this.lib.lastName()
  }

  findName() {
    return this.lib.findName()
  }

  jobTitle() {
    return this.lib.jobTitle()
  }

  prefix() {
    return this.lib.prefix()
  }

  suffix() {
    return this.lib.suffix()
  }

  title() {
    return this.lib.title()
  }

  jobDescriptor() {
    return this.lib.jobDescriptor()
  }

  jobArea() {
    return this.lib.jobArea()
  }

  jobType() {
    return this.lib.jobType()
  }
}
