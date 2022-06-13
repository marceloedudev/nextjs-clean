import StyledComponentsAdapter from '@/infra/styles/styled-components'
import { getColorContrast } from '@/infra/styles/polished'

const styled = new StyledComponentsAdapter()

interface IButtonContainer {
  color: string
  textColor?: string
}

export const Container = styled.tagName('button')<IButtonContainer>`
  border: none;
  margin: 8px;
  padding: 14px 24px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid ${({ color }) => color};
  background-color: ${({ color }) => color};
  color: ${({ textColor, color }) => textColor ?? getColorContrast(color)};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  user-select: none;
  font-weight: bold;
  display: flex;
  width: 120px;
  min-height: 45px;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    border: none;
  }

  .content {
    display: flex;
    position: relative;
    justify-content: space-between;
    z-index: 2;

    .icon {
      width: 20px;
      height: 20px;
      display: flex;
      margin-right: 10px;
    }
  }
`