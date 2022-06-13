import React from 'react'
import { SubmitButtonBase } from '@/view/components/Button'
import { useSignIn } from '../../contexts/useSignIn'

export interface ISubmitButton {
  label: string
}

const SubmitButton: React.FC<ISubmitButton> = ({ label }) => {
  const { state } = useSignIn()
  return <SubmitButtonBase loading={state.loading} label={label} />
}

export default SubmitButton
