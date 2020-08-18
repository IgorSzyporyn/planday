// Built using https://github.com/gokulkrishh/awesome-meta-and-manifest as reference

import React from 'react'
import Android from './components/Android'
import Apple from './components/Apple'

type ProgressiveWebMetaProps = {
  imagePath?: string
}

const viewportContent =
  'width=device-width,initial-scale=1,maximum-scale=5,user-scalable=1,viewport-fit=cover'

const ProgressiveWebMeta = ({ imagePath }: ProgressiveWebMetaProps) => {
  return (
    <>
      {/* Must have */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content={viewportContent} />
      <meta charSet="UTF-8" />

      {/* Main link tags */}
      <link href={`${imagePath}/icon-16x16.png`} rel="icon" type="image/png" sizes="16x16" />
      <link href={`${imagePath}/icon-32x32.png`} rel="icon" type="image/png" sizes="32x32" />
      <link href={`${imagePath}/icon-48x48.png`} rel="icon" type="image/png" sizes="48x48" />

      {/* IOS */}
      <Apple imagePath={imagePath} />

      {/* Android */}
      <Android imagePath={imagePath} />

      {/* Windows */}

      {/* UC Mobile Browser  */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* Fitscreen  */}
      <meta name="viewport" content="uc-fitscreen=yes" />

      {/* Layout mode */}
      <meta name="layoutmode" content="fitscreen" />

      {/* Orientation  */}
      <meta name="screen-orientation" content="portrait" />
    </>
  )
}

export default ProgressiveWebMeta
