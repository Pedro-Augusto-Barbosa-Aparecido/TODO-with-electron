import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}