import { HeaderContainter, Logo, Switchthemes } from './styles'
import { Moon } from '@phosphor-icons/react'

export const Header = ({ currentTheme, ThemeChange }) => {
  const themeImg =
    currentTheme.title === 'light'
      ? './images/logoLight.png'
      : './images/logoDark.png'

  return (
    <HeaderContainter>
      <Logo src={themeImg} />
      <Switchthemes imgTheme={currentTheme.title} onClick={ThemeChange}>
        {currentTheme.title === 'light' ? (
          <Moon size={24} />
        ) : (
          <Moon size={24} weight="fill" color="#FFF" />
        )}
      </Switchthemes>
    </HeaderContainter>
  )
}
