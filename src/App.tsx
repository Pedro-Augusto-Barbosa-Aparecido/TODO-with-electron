import { GlobalStyle } from './styles/GlobalStyle';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { Header } from './components/Header';
import { HashRouter } from 'react-router-dom';
import { Routes } from './pages/routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <HashRouter>
        <Routes />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}