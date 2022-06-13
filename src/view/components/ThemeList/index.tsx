import React from 'react'
import { ButtonBase } from '@/view/components/Button'
import { useThemeStyled } from '@/view/hooks/useThemeStyled'
import ThemeFactory from '@/domain/entity/theme/ThemeFactory'

const themeFactory = new ThemeFactory()

const ThemeList = () => {
  const { actions: actionsTheme } = useThemeStyled()

  const onChangeTheme = (themeName) => {
    actionsTheme.setThemeName(themeName)
  }

  return (
    <>
      <ButtonBase
        label="Light Theme"
        onClick={() =>
          onChangeTheme(themeFactory.createLightTheme().getThemeName())
        }
      />

      <ButtonBase
        label="Dark Theme"
        onClick={() =>
          onChangeTheme(themeFactory.createDarkTheme().getThemeName())
        }
      />
    </>
  )
}

export default ThemeList
