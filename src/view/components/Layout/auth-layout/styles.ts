import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const LayoutContainer = styled.tagName('div')`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;

  & .layout-content {
    width: 100%;
    max-width: 700px;
    display: flex;
    z-index: 20;
    justify-content: center;
  }

`
