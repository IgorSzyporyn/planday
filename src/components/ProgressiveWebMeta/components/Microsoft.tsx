import React from 'react'
import { lightTheme } from '../../../theme'

type MicrosoftProps = {
  imagePath?: string
}

const Microsoft = ({ imagePath }: MicrosoftProps) => {
  return (
    <>
      {/* Browserconfig Information */}
      <meta name="msapplication-navbutton-color" content={lightTheme.palette.primary.dark} />
      <meta name="msapplication-TileColor" content={lightTheme.palette.primary.dark} />
      <meta name="msapplication-TileImage" content={`${imagePath}/icon-144x144.png`} />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Pinned tab information */}
      <meta name="application-name" content="Team Dixx" />
      <meta name="msapplication-tooltip" content="The Team Dixx WebApp" />
      <meta name="msapplication-starturl" content="/" />
      <link
        href={`${imagePath}/icon.svg`}
        rel="mask-icon"
        color={lightTheme.palette.primary.dark}
      />

      {/* Tap highlighting */}
      <meta name="msapplication-tap-highlight" content="no" />
    </>
  )
}

export default Microsoft
