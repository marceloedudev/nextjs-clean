import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const HomeContainer = styled.tagName('div')`
  width: 100%;
  text-align: center;
  height: calc(100vh - 8.5rem);
  padding: 10rem 0;

  & .title {
    display: flex;
    background-color: #494D4B;
    align-items: center;
    flex: 1;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: #fff;
    & h1 {
        margin: 3rem 1.5rem;
      }
  }

  & .content {
    display: flex;
    flex: 1;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    & div {
      border-radius: 1.5rem;
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: flex-end;
      margin: 0 20px;
      & a {
        cursor: pointer;
        color: #494D4A;
        margin-top: 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
      }
    }
  }
`
