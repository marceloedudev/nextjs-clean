import { TypesTheme } from '@/view/styles/TypesTheme'

interface IThemeHandler {
  addTheme(handler: IThemeHandler): IThemeHandler
  handle(request: string): TypesTheme
}

export default IThemeHandler
