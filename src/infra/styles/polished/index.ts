import { getLuminance, lighten } from 'polished'

export const polishedLighten = (amount: string | number, color: string) => {
  return lighten(amount, color)
}

export const polishedGetLuminance = (color: string) => {
  return getLuminance(color)
}

export const getColorContrast = (hexColor) => {
  return polishedGetLuminance(hexColor) > 0.179 ? '#000' : '#fff'
}
