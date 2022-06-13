import DarkThemeModel from '@/view/styles/themes/DarkThemeModel'
import { TypesTheme } from '@/view/styles/TypesTheme'
import AbstractThemeHandler from './AbstractThemeHandler'

class ThemeDark extends AbstractThemeHandler {
  private themeName = 'dark'

  public handle(request: string): TypesTheme {
    if (request === this.themeName) {
      return DarkThemeModel
    }
    return super.handle(request)
  }

  getThemeName() {
    return this.themeName
  }
}

export default ThemeDark
