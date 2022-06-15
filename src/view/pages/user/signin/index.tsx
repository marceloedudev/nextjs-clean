import { SignInProvider, useSignIn } from './contexts/useSignIn'
import useFormSignIn, { UseFormSignInProps } from './hooks/useFormSignIn'
import { EmailIcon } from '@/resources/icons'
import Input from './components/Input'
import LinkNavigateBase from './components/LinkNavigateBase'
import PasswordInput from './components/PasswordInput'
import { SignInContainer } from './styles'
import SubmitButton from './components/SubmitButton'
import { useThemeStyled } from '@/view/hooks/useThemeStyled'
import React from 'react'
import RoutesFactory from '@/main/factory/RoutesFactory'
import UserSignInHandler from '@/main/pages/user/signin/handler/UserSignInHandler'

type SignInProps = {
  routesFactory: RoutesFactory
  userSignInHandler: UserSignInHandler
}

const MakeSignIn: React.FC<SignInProps> = ({
  routesFactory,
  userSignInHandler
}) => {
  const { state } = useSignIn()

  const { onSubmit } = useFormSignIn({
    userSignInHandler
  } as UseFormSignInProps)

  const { state: stateTheme } = useThemeStyled()

  return (
    <SignInContainer>
      <div className="signin-content">
        <form data-testid="signin_submit" onSubmit={onSubmit}>
          <h6>Login</h6>
          <Input
            name="email"
            type="email"
            label="Email"
            icon={<EmailIcon />}
            helperText={state.errors?.email?.map(
              (item) => `- ${item.message}. `
            )}
            autoComplete="on"
          />
          <PasswordInput
            name="password"
            label="Password"
            helperText={state.errors?.password?.map(
              (item) => `- ${item.message}. `
            )}
          />
          <div className="signin-container-desc">
            Don't have an account? {stateTheme.theme?.primary}
            <LinkNavigateBase
              to={`${routesFactory.createUserRoute().signup()}`}
            >
              Register here
            </LinkNavigateBase>
          </div>
          <div className="signin-container-button">
            <SubmitButton label="Log In" />
          </div>
        </form>
      </div>
    </SignInContainer>
  )
}

const SignIn: React.FC<SignInProps> = (props) => (
  <SignInProvider>
    <MakeSignIn {...props} />
  </SignInProvider>
)

export default SignIn
