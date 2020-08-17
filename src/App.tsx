import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { AppBody } from './containers/AppBody'
import { AppHeader } from './containers/AppHeader'
import { AppPanel } from './containers/AppPanel'
import { darkTheme, lightTheme } from './styles/theme'
import { WithTheme } from './types/WithTheme'
import 'reset-css'
import 'roboto-fontface'

const AppWrapper = styled.div`
  background-color: ${({ theme }: WithTheme) => theme.background.default};
  box-sizing: border-box;
  color: ${({ theme }: WithTheme) => theme.palette.text.main};
  height: 100%;
  min-height: 100%;
  padding: 4vh 8vw;
`

type StateTypes = 'light' | 'dark'

function App() {
  const [selectedTheme, setSelectedTheme] = useState<StateTypes>('light')

  useEffect(() => {
    const schemeMedia = window.matchMedia('(prefers-color-scheme: dark)')
    const isDark = schemeMedia.matches

    if (isDark) {
      setSelectedTheme('dark')
    }
  }, [])

  const theme = selectedTheme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <AppPanel>
          <AppHeader />
          <AppBody />
        </AppPanel>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
