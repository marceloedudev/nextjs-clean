import LightThemeModel from '@/view/styles/themes/LightThemeModel'
import { TypesTheme } from '@/view/styles/TypesTheme'
import AbstractThemeHandler from './AbstractThemeHandler'

class ThemeLight extends AbstractThemeHandler {
  private themeName = 'light'

  public handle(request: string): TypesTheme {
    if (request === this.themeName) {
      return LightThemeModel
    }
    return super.handle(request)
  }

  getThemeName() {
    return this.themeName
  }
}

export default ThemeLight
