import React from 'react'

type AppleIconsProps = {
  imagePath?: string
}

const AppleIcons = ({ imagePath }: AppleIconsProps) => {
  return (
    <>
      <link href={`${imagePath}/icon-180x180.png`} rel="apple-touch-icon" />
      <link href={`${imagePath}/icon-72x72.png`} rel="apple-touch-icon" sizes="72x72" />
      <link href={`${imagePath}/icon-76x76.png`} rel="apple-touch-icon" sizes="76x76" />
      <link href={`${imagePath}/icon-114x114.png`} rel="apple-touch-icon" sizes="114x114" />
      <link href={`${imagePath}/icon-120x120.png`} rel="apple-touch-icon" sizes="120x120" />
      <link href={`${imagePath}/icon-152x152.png`} rel="apple-touch-icon" sizes="152x152" />
    </>
  )
}

export default AppleIcons
