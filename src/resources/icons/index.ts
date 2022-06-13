import { BiHide, BiShow } from 'react-icons/bi'
import { MdEmail, MdLock } from 'react-icons/md'

import { CgSpinner } from 'react-icons/cg'
import StyledComponentsAdapter from '@/infra/styles/styled-components'

const styled = new StyledComponentsAdapter()

export const EmailIcon = styled.tagName(MdEmail)`
  font-size: 20px;
`

export const PasswordIcon = styled.tagName(MdLock)`
  font-size: 20px;
`

export const ShowIcon = styled.tagName(BiShow)`
  font-size: 20px;
`

export const HideIcon = styled.tagName(BiHide)`
  font-size: 20px;
`

export const LoadingIcon = styled.tagName(CgSpinner)`
  font-size: 20px;
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
