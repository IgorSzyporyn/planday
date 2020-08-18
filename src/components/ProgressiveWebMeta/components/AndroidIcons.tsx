import React from 'react'

type AndroidIconsProps = {
  imagePath?: string
}

const AndroidIcons = ({ imagePath }: AndroidIconsProps) => {
  return (
    <>
      <link href={`${imagePath}/icon-72x72.png`} rel="icon" sizes="72x72" />
      <link href={`${imagePath}/icon-96x96.png`} rel="icon" sizes="96x96" />
      <link href={`${imagePath}/icon-128x128.png`} rel="icon" sizes="128x128" />
      <link href={`${imagePath}/icon-144x144.png`} rel="icon" sizes="144x144" />
      <link href={`${imagePath}/icon-152x152.png`} rel="icon" sizes="152x152" />
      <link href={`${imagePath}/icon-192x192.png`} rel="icon" sizes="192x192" />
      <link href={`${imagePath}/icon-384x384.png`} rel="icon" sizes="384x384" />
      <link href={`${imagePath}/icon-512x512.png`} rel="icon" sizes="512x512" />
    </>
  )
}

export default AndroidIcons
