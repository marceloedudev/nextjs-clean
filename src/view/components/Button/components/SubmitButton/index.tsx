import React, { useCallback } from 'react'

import { Container } from './styles'
import { LoadingIcon } from '@/resources/icons'

export type ISubmitButtonBase = {
  onClick?: (event) => void
  disabled?: boolean
  loading?: boolean
  color?: string
  label?: string
  textColor?: string
}

export const SubmitButtonBase: React.FC<ISubmitButtonBase> = ({
  onClick,
  disabled,
  loading,
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
      disabled={disabled || loading}
      data-testid="submit"
      type={'submit'}
      color={color}
      textColor={textColor || '#FFF'}
    >
      <span className="content">
        {loading ? (
          <div className="icon">
            <LoadingIcon />
          </div>
        ) : null}
        {label}
      </span>
    </Container>
  )
}
