import FakerAddress from '../faker/FakerAddress'
import faker from 'faker-br'
import FakerData from '../faker/FakerData'
import FakerCommerce from '../faker/FakerCommerce'
import FakerInternet from '../faker/FakerInternet'
import FakerName from '../faker/FakerName'
import FakerPhone from '../faker/FakerPhone'
import FakerRandom from '../faker/FakerRandom'
import FakerLorem from '../faker/FakerLorem'

class FakerFactory {
  createAddress() {
    return new FakerAddress(faker)
  }

  createCommerce() {
    return new FakerCommerce(faker)
  }

  createData() {
    return new FakerData(faker)
  }

  createInternet() {
    return new FakerInternet(faker)
  }

  createLorem() {
    return new FakerLorem(faker)
  }

  createName() {
    return new FakerName(faker)
  }

  createPhone() {
    return new FakerPhone(faker)
  }

  createRandom() {
    return new FakerRandom(faker)
  }
}

export default FakerFactory
