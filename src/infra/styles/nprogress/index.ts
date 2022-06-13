import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styledComponentsAdapter = new StyledComponentsAdapter()

const nprogressStyles = styledComponentsAdapter.css()`
#nprogress .bar {
  background: #FFBB00 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}

#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
`
export default nprogressStyles
