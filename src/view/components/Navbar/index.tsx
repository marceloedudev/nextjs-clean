import { Wrapper } from './styles'
import useUserData from '@/view/hooks/useUserData'
import ThemeList from '../ThemeList'
import RoutesFactory from '@/main/factory/RoutesFactory'
import LinkNavigate from '../LinkNavigate'
const routesFactory = new RoutesFactory()

const Navbar = () => {
  const { accountState } = useUserData()

  return (
    <Wrapper data-testid="navbar_container" color="#0000ff">
      <LinkNavigate to={`${routesFactory.createHomeRoute().base()}`}>
        Storefront
      </LinkNavigate>
      <span>Navbar {accountState?.user?.stars}</span>
      <br /> <br />
      <ThemeList />
    </Wrapper>
  )
}

export default Navbar
