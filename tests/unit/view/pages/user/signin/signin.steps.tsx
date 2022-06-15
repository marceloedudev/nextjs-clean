import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'
import { defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import AppProvider from '@/view/hooks/AppProvider'
import SignInFactory from '@/main/pages/user/signin/factory/SignInFactory'
import SignIn from '@/view/pages/user/signin'

const pathMakeFeature = path.resolve(path.join(__dirname, 'signin.feature'))

const feature = loadFeature(pathMakeFeature)

const signInFactory = new SignInFactory()

const makeComponent = () => {
  return render(
    <AppProvider>
      <SignIn {...signInFactory.createInstance()} />
    </AppProvider>
  )
}

defineFeature(feature, (test) => {
  test('check display errors', ({ given, when, then }) => {
    given('mount page components', () => {
      makeComponent()
    })
    when('change mouse down', () => {
      const input = screen.getByTestId('signin_submit') as HTMLInputElement
      fireEvent.submit(input)
    })
    then('showing input type text', () => {
      expect(screen.getByText(/Email must be less than/i)).toBeTruthy()
    })
  })

  test('check render page', ({ when, then }) => {
    when('mount page components', () => {
      makeComponent()
    })
    then('shows the page', () => {
      expect(screen.getByText(/Login/i)).toBeTruthy()
    })
  })
})
