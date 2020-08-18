import React from 'react'
import AppleIcons from './AppleIcons'
import AppleStartupImages from './AppleStartupImages'

type AppleProps = {
  imagePath?: string
}

const Apple = ({ imagePath }: AppleProps) => {
  return (
    <>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Team Dixx" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <AppleIcons imagePath={imagePath} />
      <AppleStartupImages imagePath={imagePath} />
    </>
  )
}

export default Apple
