import React, { CSSProperties, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from '../../../theme'
import { IconProps } from '../BaseIcon/BaseIcon'

export const LoadingIcon = (props: IconProps) => {
  const theme = useContext<Theme>(ThemeContext)

  const style: CSSProperties = {
    background: 'transparent',
    display: 'block',
    shapeRendering: 'auto',
  }

  return (
    <svg
      preserveAspectRatio="xMidYMid"
      style={style}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="17.5" y="30" width="15" height="40" fill={theme.palette.primary.main}>
        <animate
          attributeName="y"
          begin="-0.2s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="18;30;30"
        ></animate>
        <animate
          attributeName="height"
          begin="-0.2s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="64;40;40"
        ></animate>
      </rect>
      <rect x="42.5" y="30" width="15" height="40" fill={theme.palette.secondary.main}>
        <animate
          attributeName="y"
          begin="-0.1s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="20.999999999999996;30;30"
        ></animate>
        <animate
          attributeName="height"
          begin="-0.1s"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="58.00000000000001;40;40"
        ></animate>
      </rect>
      <rect x="67.5" y="30" width="15" height="40" fill={theme.palette.success.main}>
        <animate
          attributeName="y"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="20.999999999999996;30;30"
        ></animate>
        <animate
          attributeName="height"
          calcMode="spline"
          dur="1s"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="58.00000000000001;40;40"
        ></animate>
      </rect>
    </svg>
  )
}
