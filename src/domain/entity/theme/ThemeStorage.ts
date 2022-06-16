import StorageFactory from '@/infra/factory/StorageFactory'
import ThemeFactory from './ThemeFactory'

class ThemeStorage {
  private themes = []
  private themeFactory: ThemeFactory
  private dbFieldStorage = 'theme'
  private localStorage

  constructor() {
    this.themeFactory = new ThemeFactory()
    this.themes = [
      this.themeFactory.createLightTheme().getThemeName(),
      this.themeFactory.createDarkTheme().getThemeName()
    ]
    this.localStorage = new StorageFactory().createLocalStorage()
  }

  getThemeNameStorage() {
    const themeStorage = this.localStorage.get(this.dbFieldStorage)
    if (themeStorage?.length && this.themes.includes(themeStorage)) {
      return themeStorage
    }
    return null
  }

  save(themeName: string) {
    if (!themeName) {
      return
    }
    this.localStorage.set(this.dbFieldStorage, themeName)
  }
}

export default ThemeStorage
