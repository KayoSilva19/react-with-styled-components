import Logo1 from '../../assets/logoDark.png'
import { HeaderContainter, Logo, Switchthemes } from './styles'

export const Header = () => {
  return (
    <HeaderContainter>
      <Logo src={Logo1} />
      <Switchthemes>Alterar Theme</Switchthemes>
    </HeaderContainter>
  )
}
