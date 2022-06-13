import IThemeHandler from './IThemeHandler'

abstract class AbstractThemeHandler implements IThemeHandler {
  private nextHandler: IThemeHandler

  public addTheme(handler: IThemeHandler): IThemeHandler {
    this.nextHandler = handler
    return handler
  }

  public handle(request: string) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }
    return null
  }
}

export default AbstractThemeHandler
