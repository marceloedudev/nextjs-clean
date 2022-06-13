export default class FakerLorem {
  private lib

  constructor(faker) {
    this.lib = faker.lorem
  }

  word() {
    return this.lib.word()
  }

  words() {
    return this.lib.words()
  }

  sentence() {
    return this.lib.sentence()
  }

  slug() {
    return this.lib.slug()
  }

  sentences() {
    return this.lib.sentences()
  }

  paragraph() {
    return this.lib.paragraph()
  }

  paragraphs() {
    return this.lib.paragraphs()
  }

  text() {
    return this.lib.text()
  }

  lines() {
    return this.lib.lines()
  }
}
