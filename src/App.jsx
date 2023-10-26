import { useState } from 'react'
import { ProductBuy } from './Page/ProductBuy'
import { GlobalStyle } from './Styles/global'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './Styles/themes'

import { Header } from './Components/Header'

function App() {
  const [currentTheme, setCurrentTheme] = useState(dark)

  function handleThemeChange() {
    const themeAlternate = currentTheme === dark ? light : dark
    setCurrentTheme(themeAlternate)
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <Header currentTheme={currentTheme} ThemeChange={handleThemeChange} />
      <ProductBuy />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
