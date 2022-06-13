import LocalStorage from '@/infra/storage/local-storage'
import ThemeFactory from './ThemeFactory'

class ThemeStorage {
  private themes = []
  private themeFactory: ThemeFactory
  private dbFieldStorage = 'theme'

  constructor() {
    this.themeFactory = new ThemeFactory()
    this.themes = [
      this.themeFactory.createLightTheme().getThemeName(),
      this.themeFactory.createDarkTheme().getThemeName()
    ]
  }

  getThemeNameStorage() {
    const themeStorage = LocalStorage.get(this.dbFieldStorage)
    if (themeStorage?.length && this.themes.includes(themeStorage)) {
      return themeStorage
    }
    return null
  }

  save(themeName: string) {
    if (!themeName) {
      return
    }
    LocalStorage.set(this.dbFieldStorage, themeName)
  }
}

export default ThemeStorage
