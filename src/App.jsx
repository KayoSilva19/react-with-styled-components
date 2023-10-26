import { useState } from 'react'
import { ProductBuy } from './Page/ProductBuy'
import { GlobalStyle } from './Styles/global'
import { ThemeProvider } from 'styled-components'
import { light, dark } from './Styles/themes'

import { Header } from './Components/Header'

function App() {
  const [currentTheme, setCurrentTheme] = useState(dark)
  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <ProductBuy />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
