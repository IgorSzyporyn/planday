import React, { SVGProps, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { ThemePaletteVariantType, Theme, ThemePaletteVariants } from '../../../theme'
import { device } from '../../../theme/device'

type WithPalette = {
  palette:
    | ThemePaletteVariants
    | (ThemePaletteVariants & {
        inverse: ThemePaletteVariants
        bright: string
      })
}

type StyledWrapperProps = WithPalette & Pick<IconProps, 'hover'>

const StyledWrapper = styled.span`
  display: flex;
  align-items: center;
  fill: ${({ palette }: StyledWrapperProps) => palette.main};

  :hover {
    fill: ${({ palette, hover }: StyledWrapperProps) => (hover ? palette.dark : palette.main)};
  }

  & svg {
    height: 1.8rem;
  }

  @media ${device.tablet} {
    & svg {
      height: 2.4rem;
    }
  }
`

export const Icon = ({ active, children, ...rest }: IconProps) => {
  return (
    <svg
      style={{
        fill: 'inherit',
        transition: 'fill 120ms ease-in-out',
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </svg>
  )
}

export type IconProps = {
  active?: boolean
  variant?: ThemePaletteVariantType
  hover?: boolean
} & SVGProps<SVGSVGElement>

export const BaseIcon = ({ hover, variant, ...rest }: IconProps) => {
  const theme = useContext<Theme>(ThemeContext)
  const palette = theme.palette[variant || 'text']

  return (
    <StyledWrapper hover palette={palette}>
      <Icon {...rest} />
    </StyledWrapper>
  )
}
