import ThemeLight from './ThemeLight'

class ThemeName {
  private name: string

  constructor(name: string) {
    const themeLight = new ThemeLight()
    this.name = name ?? themeLight.getThemeName()
  }

  getValidate() {
    return this.name
  }
}

export default ThemeName
