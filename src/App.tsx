import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { AppBody } from './containers/AppBody'
import { AppHeader } from './containers/AppHeader'
import { AppPanel } from './containers/AppPanel'
import { GlobalStyle } from './styles/GlobalStyle'
import { breakpoint, darkTheme, lightTheme } from './theme'

const AppWrapper = styled.div`
  background-color: var(--background-default);
  color: var(--color-text-main);
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  min-height: 100vh;
  padding: 0;

  @media ${breakpoint.large} {
    padding: 4vh 4vw 0;
  }

  & > * {
    min-height: 100vh;

    @media ${breakpoint.large} {
      min-height: 96vh;
    }
  }
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
      <GlobalStyle />
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
