import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from "../theme/theme";
import GlobalStyle from '../theme/globalStyles'

interface Props {
  children: React.ReactNode;
}

export default ({children}:Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
