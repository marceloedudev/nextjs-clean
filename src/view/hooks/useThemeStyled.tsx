/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import ThemeBase from '@/domain/entity/theme/ThemeBase'
import { TypesTheme } from '../styles/TypesTheme'
import ThemeStorage from '@/domain/entity/theme/ThemeStorage'

const ThemeStyledContext = React.createContext({} as IThemeStyledContext)

type ThemeStyledProviderProps = {
  children: React.ReactNode
}

const themeBase = new ThemeBase()
const themeStorage = new ThemeStorage()

export const ThemeStyledProvider = ({ children }: ThemeStyledProviderProps) => {
  const [themeName, setThemeName] = React.useState(themeBase.getThemeName())
  const [theme, setTheme] = React.useState(themeBase.getTheme())

  React.useEffect(() => {
    const themeDB = themeStorage.getThemeNameStorage()
    if (themeStorage && !themeName) {
      setThemeName(themeDB)
      themeStorage.save(themeName)
      return
    }
    themeBase.setThemeName(themeName)
    themeStorage.save(themeName)
    setTheme(themeBase.getTheme())
  }, [themeName])

  const value = React.useMemo<IThemeStyledContext>(
    () => ({
      state: {
        themeName,
        theme
      },
      actions: {
        setThemeName,
        setTheme
      }
    }),
    [theme]
  )
  return (
    <ThemeStyledContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeStyledContext.Provider>
  )
}

export const useThemeStyled = () => {
  return React.useContext(ThemeStyledContext)
}

export interface IThemeStyledState {
  themeName: string
  theme: TypesTheme
}

export interface IThemeStyledActions {
  setThemeName: React.Dispatch<React.SetStateAction<string>>
  setTheme: React.Dispatch<React.SetStateAction<TypesTheme>>
}

export interface IThemeStyledContext {
  state: IThemeStyledState
  actions: IThemeStyledActions
}
