import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const LayoutContainer = styled.tagName('div')`
  display: flex;
  overflow: hidden;

  & .layout-wrapper {
    width: 100%;
    margin-top: 60px;
  }

  & .layout-content {
    overflow: auto;
    max-height: calc(100vh - 60px);
  }
`
