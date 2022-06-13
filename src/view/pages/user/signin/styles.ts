import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const SignInContainer = styled.tagName('div')`
  max-width: 400px;
  height: auto;
  display: flex;
  margin: auto;
  align-items: stretch;
  z-index: 1;

  & .signin-content {
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    padding: 20px 40px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 18px 0 -10px hsla(0, 0%, 100%, 0.46),
      0 35px 0 -20px hsla(0, 0%, 100%, 0.3),
      10px 30px 45px hsla(0, 0%, 73%, 0.88);

    h6 {
      font-family: 'Roboto', sans-serif;
      font-size: 31px;
      color: #42434a;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
    }
  }

  & .signin-container-desc {
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 20px;

    a {
      display: flex;
      padding: 0 5px;
    }
  }

  & .signin-container-button {
    justify-content: center;
    position: relative;
    display: flex;
    margin-top: 20px;
  }
`
