import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const Wrapper = styled.tagName('header')`
  color: ${(props) => props.color ?? '#33f001'};
  height: 6.5rem;
  padding: 2rem 4rem;
  background-color: #fff;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;

  & a {
    cursor: pointer;
    color: #555;
    margin-left: 2rem;
    font-weight: bold;
  }

  & span {
    margin-left: auto;
    text-transform: capitalize;
  }
`
