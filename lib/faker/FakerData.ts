export default class FakerData {
  private lib

  constructor(faker) {
    this.lib = faker.br
  }

  cpf() {
    return this.lib.cpf()
  }

  cnpj() {
    return this.lib.cnpj()
  }
}
