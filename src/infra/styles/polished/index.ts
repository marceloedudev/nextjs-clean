import { getLuminance, lighten } from 'polished'

class PolishedAdapter {
  polishedLighten(amount: string | number, color: string) {
    return lighten(amount, color)
  }

  polishedGetLuminance(color: string) {
    return getLuminance(color)
  }

  getColorContrast = (hexColor) => {
    return this.polishedGetLuminance(hexColor) > 0.179 ? '#000' : '#fff'
  }
}

export default PolishedAdapter
