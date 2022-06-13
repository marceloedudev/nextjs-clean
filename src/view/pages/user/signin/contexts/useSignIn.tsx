import React from 'react'

const SignInContext = React.createContext({} as ISignInContext)

type SignInProviderProps = {
  children: React.ReactNode
}

export const SignInProvider = ({ children }: SignInProviderProps) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  const [data, setData] = React.useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({
    email: null,
    password: null
  })

  const value = React.useMemo<ISignInContext>(
    () => ({
      state: {
        loading,
        data,
        errors
      },
      actions: {
        setLoading,
        setData,
        setErrors
      }
    }),
    [loading, data, errors]
  )

  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  )
}

export const useSignIn = () => {
  return React.useContext(SignInContext)
}

export interface ISignInState {
  loading: boolean
  data: any
  errors: any
}

export interface ISignInActions {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setData: React.Dispatch<React.SetStateAction<any>>
  setErrors: React.Dispatch<React.SetStateAction<any>>
}

export interface ISignInContext {
  state: ISignInState
  actions: ISignInActions
}
