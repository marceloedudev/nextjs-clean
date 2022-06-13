import { Container, HelperContainer, Input, Label } from './styles'

import React from 'react'

export interface IFloatingLabelInputProps {
  icon: JSX.Element
}

export interface IFloatingLabelInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  helperText?: string
  state?: any
  setState?: any
  inputProps?: IFloatingLabelInputProps
  autoComplete?: string | 'undefined'
  ref?: any
}

export const InputBase: React.FC<IFloatingLabelInput> = React.forwardRef(
  (props: IFloatingLabelInput, ref) => {
    const {
      name,
      label,
      helperText = '',
      inputProps,
      state,
      setState,
      autoComplete,
      onChange,
      onFocus,
      ...restProps
    } = props

    const defaultRef = React.useRef()
    const resolvedRef: any = ref || defaultRef

    const [values, setValues] = React.useState({
      active: false,
      focusActive: false
    })

    const onMouseBlurHandler = React.useCallback(
      (event) => {
        setValues((oldState) => ({
          ...oldState,
          active: event.target.value.length !== 0,
          focusActive: false
        }))
      },
      [setValues]
    )

    const onMouseFocusHandler = React.useCallback(
      (event) => {
        if (onFocus) {
          onFocus(event)
        }
        setValues((oldState) => ({
          ...oldState,
          active: true,
          focusActive: true
        }))
      },
      [onFocus, setValues]
    )

    const onMouseChangeHandler = React.useCallback(
      (event) => {
        if (onChange) {
          onChange(event)
        }
        setState({ ...state, [event.target.name]: event.target.value })
      },
      [onChange, state, setState]
    )

    return (
      <div>
        <Container
          active={values.active}
          helperActive={helperText && helperText?.length}
          focusActive={values.focusActive}
        >
          <Label
            htmlFor={name}
            active={values.active}
            helperActive={helperText && helperText?.length}
            focusActive={values.focusActive}
            data-testid={`inputbase-label`}
          >
            {label}
          </Label>

          <Input
            name={name}
            active={values.active}
            helperActive={helperText && helperText?.length}
            focusActive={values.focusActive}
            onBlur={onMouseBlurHandler}
            onFocus={onMouseFocusHandler}
            onChange={onMouseChangeHandler}
            ref={resolvedRef}
            autoComplete={autoComplete || 'off'}
            data-testid={name}
            {...restProps}
          />
          {inputProps && inputProps.icon && (
            <div
              data-testid={`inputbase-icon`}
              className="inputbase-icon-container"
            >
              <div className="inputbase-icon-content">{inputProps.icon}</div>
            </div>
          )}
        </Container>

        <HelperContainer>
          {helperText && <p data-testid={`${name}-helper`}>{helperText}</p>}
        </HelperContainer>
      </div>
    )
  }
)
