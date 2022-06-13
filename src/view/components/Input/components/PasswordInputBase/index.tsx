import { HideIcon, ShowIcon } from '@/resources/icons'
import React, { InputHTMLAttributes, useRef, useState } from 'react'

import { InputBase } from '@/view/components/Input'
import { PasswordInputIcon } from './styles'

export interface IPasswordInputBase
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  helperText?: string
  state?: any
  setState?: any
  onKeyDown?: any
}

export const PasswordInputBase: React.FC<IPasswordInputBase> = React.forwardRef(
  (props: IPasswordInputBase, ref) => {
    const { name, label, helperText, state, setState, onKeyDown } = props

    const defaultRef = useRef()
    const resolvedRef: any = ref || defaultRef

    const [visible, setVisible] = useState<boolean>(false)

    return (
      <InputBase
        name={name}
        type={visible ? 'text' : 'password'}
        label={label}
        inputProps={{
          icon: (
            <PasswordInputIcon
              onMouseDown={() => setVisible(true)}
              onMouseUp={() => setVisible(false)}
              onMouseLeave={() => setVisible(false)}
              data-testid={`${name}-icon-password`}
            >
              {visible ? (
                <HideIcon data-testid="input-password-hide-icon" />
              ) : (
                <ShowIcon data-testid="input-password-show-icon" />
              )}
            </PasswordInputIcon>
          )
        }}
        helperText={helperText}
        state={state}
        setState={setState}
        ref={resolvedRef}
        data-testid={name}
        onKeyDown={onKeyDown}
      />
    )
  }
)
