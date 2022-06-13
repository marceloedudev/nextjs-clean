import React, { useCallback } from 'react'

import { Container } from './styles'

export type IButtonBase = {
  onClick?: (event) => void
  disabled?: boolean
  type?: 'button' | 'reset' | undefined
  color?: string
  label?: string
  textColor?: string
}

export const ButtonBase: React.FC<IButtonBase> = ({
  onClick,
  disabled,
  type,
  color,
  label,
  textColor
}) => {
  const onMouseClickHandler = useCallback(
    (event) => {
      if (onClick) {
        onClick(event)
      }
    },
    [onClick]
  )

  return (
    <Container
      onClick={onMouseClickHandler}
      disabled={disabled}
      data-testid="button"
      type={type || 'button'}
      color={color ?? '#6c5ce7'}
      textColor={textColor ?? '#FFF'}
    >
      <span className="content">{label}</span>
    </Container>
  )
}
