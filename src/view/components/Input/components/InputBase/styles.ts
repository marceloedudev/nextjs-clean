import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

const getColorByProps = (props) => {
  const { active, helperActive, focusActive } = props
  if (helperActive) {
    return '#f44336'
  } else if (active && focusActive) {
    return '#7460e6'
  }
  return null
}

interface IInputBaseStyle {
  active: number
  helperActive: number
  focusActive: number
}

export const Container = styled.tagName('div')<IInputBaseStyle>`
  position: relative;
  width: 100%;
  height: 3.3em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3px;

  ${(props) => {
    const color = getColorByProps(props)

    return color
      ? `
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: ${color};
     `
      : ''
  }}

  & .inputbase-icon-container {
    display: flex;
    position: absolute;
    right: 0;
    user-select: none;

    & .inputbase-icon-content {
      height: initial;
      text-align: right;
      right: 0;
      bottom: 0;
      position: relative;

      & svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`

export const Label = styled.tagName('label')<IInputBaseStyle>`
  border: 0;
  position: absolute;
  color: ${(props) => getColorByProps(props)};
  bottom: 0;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 16px;
  pointer-events: none;
  width: 66.6%;
  transform: ${({ active }) =>
    active ? 'translate3d(0, -70%, 0) scale(0.70)' : 'none'};
  cursor: text;
`

export const Input = styled.tagName('input')<IInputBaseStyle>`
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  & ::placeholder {
    color: ${(props) => getColorByProps(props)};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }

  & ::focus {
    outline: none;
    border: none;
  }
`

export const HelperContainer = styled.tagName('div')`
  margin: 0;
  margin-top: 3px;
  color: #f44336;
  text-align: left;
  line-height: 1.65;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.033em;
`
