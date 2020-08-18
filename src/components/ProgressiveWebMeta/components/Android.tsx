import React, { useContext } from 'react'
import AndroidIcons from './AndroidIcons'
import { ThemeContext } from 'styled-components'
import { Theme } from '../../../theme'

type AndroidProps = {
  imagePath?: string
}

const Android = ({ imagePath }: AndroidProps) => {
  const theme = useContext<Theme>(ThemeContext)

  return (
    <>
      {/* Manifest loading and manifest.theme_color varible set */}
      <meta name="theme-color" content={theme.palette.primary.dark} />
      <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />

      <meta name="mobile-web-app-capable" content="yes" />
      <AndroidIcons imagePath={imagePath} />
    </>
  )
}

export default Android
