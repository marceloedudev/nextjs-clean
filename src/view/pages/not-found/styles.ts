import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const NotFoundContainer = styled.tagName('div')`
  width: 100%;
  text-align: center;
  height: calc(100vh - 8.5rem);
  padding: 10rem 0;
`
