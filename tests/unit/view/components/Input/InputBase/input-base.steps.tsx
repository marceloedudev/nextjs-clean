import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { InputBase } from '@/view/components/Input'
import { expect, beforeAll, jest } from '@jest/globals'
import { defineFeature, loadFeature } from 'jest-cucumber'
import path from 'path'
import FakerFactory from '../../../../../../lib/factory/FakerFactory'

const pathMakeFeature = path.resolve(path.join(__dirname, 'input-base.feature'))

const feature = loadFeature(pathMakeFeature)

const makeComponent = (params) => {
  const { fieldName, fieldLabel, onFocus, onChange } = params
  const Demo = () => {
    const [data, setData] = React.useState({
      testeName: ''
    })

    return (
      <>
        <div>{data.testeName}</div>
        <InputBase
          name={fieldName}
          label={fieldLabel}
          state={data}
          setState={setData}
          onFocus={onFocus}
          onChange={onChange}
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

  test('updating value property correctly', ({ when, then }) => {
    let instanceComponent

    const onChange = jest.fn()
    const onBlur = jest.fn()
    const onFocus = jest.fn()

    when('mount input component', () => {
      const fieldLabel = 'Input Test'
      const fieldName = 'pass-demo2'
      instanceComponent = makeComponent({
        fieldName,
        fieldLabel,
        onFocus,
        onChange
      })
    })

    then('compare the value property', () => {
      const { container } = instanceComponent
      const inputEl = container.querySelector('input')
      fireEvent.input(inputEl, {
        inputType: 'deleteContentBackward'
      })
      expect(inputEl.value).toBe('')
    })

    then("check if it didn't call onBlur event", () => {
      expect(onBlur).not.toHaveBeenCalled()
    })
  })

  test('snapshot component', ({ when, then }) => {
    let instanceComponent

    when('to mount the component', () => {
      instanceComponent = makeComponent({
        fieldName: 'testeName',
        fieldLabel: `label input test`
      })
    })

    then('render perfectly', () => {
      expect(instanceComponent.container).toMatchSnapshot()
    })
  })

  test('updating name properties correctly', ({ when, then }) => {
    let instanceComponent

    when('to mount the component', () => {
      instanceComponent = makeComponent({
        fieldName: 'testName',
        fieldLabel: `label input test`
      })
    })

    then('compare the name property', () => {
      const inputEl = instanceComponent.container.querySelector('input')
      expect(inputEl.getAttribute('name')).toBe('testName')
    })
  })

  test('verify change state and setState', ({ given, when, then }) => {
    let instanceComponent
    const onChange = jest.fn()

    given('component assembled with state change on screen', () => {
      const onChangeHandler = () => {
        onChange()
      }
      const fieldLabel = fakerLorem.paragraph()
      instanceComponent = makeComponent({
        fieldName: 'testeName',
        fieldLabel: `${fieldLabel}`,
        onChange: onChangeHandler
      })
    })

    when('typing something in the field', () => {
      const inputEl = instanceComponent.container.querySelector('input')
      fireEvent.change(inputEl, { target: { value: 'test text' } })
    })

    then('check the number of times called', () => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })

    then('the text on the screen should change', () => {
      expect(screen.getByText(/test text/i)).toBeTruthy()
    })
  })
})
