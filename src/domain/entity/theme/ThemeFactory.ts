import ThemeDark from './ThemeDark'
import ThemeLight from './ThemeLight'

class ThemeFactory {
  createLightTheme() {
    return new ThemeLight()
  }

  createDarkTheme() {
    return new ThemeDark()
  }
}

export default ThemeFactory
