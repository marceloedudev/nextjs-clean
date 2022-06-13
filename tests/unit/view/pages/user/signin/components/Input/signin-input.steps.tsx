import { expect, beforeAll } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { EmailIcon } from '@/resources/icons'
import Input from '@/view/pages/user/signin/components/Input'
import { SignInProvider } from '@/view/pages/user/signin/contexts/useSignIn'
import { defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import FakerFactory from '../../../../../../../../lib/factory/FakerFactory'

const pathMakeFeature = path.resolve(
  path.join(__dirname, 'signin-input.feature')
)

const feature = loadFeature(pathMakeFeature)

const makeComponent = ({
  name,
  type,
  label,
  icon,
  helperText,
  autoComplete
}) => {
  return render(
    <SignInProvider>
      <Input
        name={name}
        type={type}
        label={label}
        icon={icon}
        helperText={helperText}
        autoComplete={autoComplete}
      />
    </SignInProvider>
  )
}

defineFeature(feature, (test) => {
  let fakerLorem

  beforeAll(() => {
    const fakerFactory = new FakerFactory()
    fakerLorem = fakerFactory.createLorem()
  })

  test('render input with type email', ({ given, when, then }) => {
    let componentIconFieldName
    let input

    given('mount email input', () => {
      componentIconFieldName = fakerLorem.word()
      const fieldLabel = fakerLorem.paragraph()
      makeComponent({
        name: componentIconFieldName,
        type: 'email',
        label: 'Type in your email',
        icon: <EmailIcon />,
        helperText: fieldLabel,
        autoComplete: 'off'
      })
    })

    when('get id input', () => {
      input = screen.getByTestId(componentIconFieldName) as HTMLInputElement
    })

    then('showing input type email', () => {
      expect(input.type).toEqual('email')
    })
  })
})
