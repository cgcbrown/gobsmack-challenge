import React from 'react'
import GlobalStyle from '../theme/globalStyles'

interface Props {
  children: React.ReactNode;
}

export default ({children}:Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
