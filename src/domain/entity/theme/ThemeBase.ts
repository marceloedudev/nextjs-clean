import LightThemeModel from '@/view/styles/themes/LightThemeModel'
import IThemeHandler from './IThemeHandler'
import ThemeFactory from './ThemeFactory'
import ThemeName from './ThemeName'

class ThemeBase {
  private themeName: string
  private themeFactory: ThemeFactory

  constructor() {
    this.themeName = null
    this.themeFactory = new ThemeFactory()
  }

  private getThemeHandler(input, handler: IThemeHandler) {
    const result = handler.handle(input)
    return result ?? LightThemeModel
  }

  setThemeName(themeName) {
    this.themeName = new ThemeName(themeName).getValidate()
  }

  getTheme() {
    const light = this.themeFactory.createLightTheme()
    const dark = this.themeFactory.createDarkTheme()
    light.addTheme(dark)
    return this.getThemeHandler(this.themeName, light)
  }

  getThemeName() {
    return this.themeName
  }
}

export default ThemeBase
