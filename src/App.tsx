import { GlobalStyle } from './styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { Header } from './components/Header';
import { Login } from './pages/Login';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  )
}