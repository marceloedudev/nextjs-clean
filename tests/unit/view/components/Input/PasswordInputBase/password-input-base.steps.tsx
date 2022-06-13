import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { PasswordInputBase } from '@/view/components/Input'
import { expect, beforeAll } from '@jest/globals'
import { defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'

const pathMakeFeature = path.resolve(
  path.join(__dirname, 'password-input-base.feature')
)

const feature = loadFeature(pathMakeFeature)

const makeComponent = ({ fieldName, fieldLabel }) => {
  const Demo = () => {
    const [data, setData] = React.useState({
      password: ''
    })

    return (
      <>
        <PasswordInputBase
          name={fieldName}
          label={fieldLabel}
          state={data}
          setState={setData}
        />
      </>
    )
  }

  return render(<Demo />)
}

defineFeature(feature, (test) => {
  let fakerLorem

  beforeAll(() => {
    const fakerFactory = new FakerFactory()
    fakerLorem = fakerFactory.createLorem()
  })

  test('change the button icon', ({ given, when, then }) => {
    let fieldName

    given('mount password input', () => {
      fieldName = fakerLorem.word()
      const fieldLabel = fakerLorem.paragraph()
      makeComponent({ fieldName, fieldLabel })
    })

    when('click password icon', () => {
      const iconPassword = screen.getByTestId(
        `${fieldName}-icon-password`
      ) as HTMLInputElement
      fireEvent.mouseDown(iconPassword)
    })

    then('showing input type text', () => {
      const input = screen.getByTestId(fieldName) as HTMLInputElement
      expect(input.type).toEqual('text')
    })
  })

  test('verify input type', ({ given, when, then }) => {
    let fieldName

    given('mount password input', () => {
      fieldName = fakerLorem.word()
      const fieldLabel = fakerLorem.paragraph()
      makeComponent({ fieldName, fieldLabel })
    })

    when('change mouse down', () => {
      const iconPassword = screen.getByTestId(
        `${fieldName}-icon-password`
      ) as HTMLInputElement
      fireEvent.mouseDown(iconPassword)
    })

    then('showing input type text', () => {
      const input = screen.getByTestId(fieldName) as HTMLInputElement
      expect(input.type).toEqual('text')
    })
  })
})
