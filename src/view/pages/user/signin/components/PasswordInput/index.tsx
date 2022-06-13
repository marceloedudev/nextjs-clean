import { PasswordInputBase } from '@/view/components/Input'
import React from 'react'
import { useSignIn } from '../../contexts/useSignIn'

export interface IInput {
  name: string
  label: string
  inputProps?: any
  helperText?: string
}

const PasswordInput: React.FC<IInput> = ({ name, label, helperText }) => {
  const { state, actions } = useSignIn()
  return (
    <PasswordInputBase
      name={name}
      label={label}
      helperText={helperText}
      state={state.data}
      setState={actions.setData}
    />
  )
}

export default PasswordInput
