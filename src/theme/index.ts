import { device, size } from './device'

export type WithTheme<T = {}> = {
  theme: Theme
} & T

export type ThemePaletteVariantType = keyof ThemePalette

export type ThemePaletteVariants = {
  main: string
  light: string
  dark: string
}

export type ThemePalette = {
  primary: ThemePaletteVariants
  secondary: ThemePaletteVariants
  success: ThemePaletteVariants
  failure: ThemePaletteVariants
  info: ThemePaletteVariants
  text: ThemePaletteVariants & { inverse: ThemePaletteVariants; bright: string }
  border: ThemePaletteVariants
}

export type Theme = {
  palette: ThemePalette
  background: {
    default: string
    paper: string
  }
  boxShadow: string
  borderRadius: string
  overlay: {
    default: ThemePaletteVariants
    paper: ThemePaletteVariants
  }
  spacing: (mod?: number) => string
}

const baseTheme = {
  borderRadius: '4px',
  spacing: (mod: number = 1) => `${mod * 0.8}rem`,
}

export const lightTheme: Theme = {
  ...baseTheme,
  palette: {
    primary: {
      main: '#e91e63',
      light: '#ff6090',
      dark: '#b0003a',
    },
    secondary: {
      main: '#1e88e5',
      light: '#6ab7ff',
      dark: '#005cb2',
    },
    success: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
    },
    failure: {
      main: '#d50000',
      light: '#ff5131',
      dark: '#9b0000',
    },
    info: {
      main: '#ffeb3b',
      light: '#ffff72',
      dark: '#c8b900',
    },
    text: {
      bright: 'rgb(0,0,0,1)',
      main: 'rgb(0,0,0,0.87)',
      light: 'rgb(0,0,0,0.72)',
      dark: 'rgb(0,0,0,0.87)',
      inverse: {
        main: 'rgb(255, 255, 255, 0.87)',
        light: 'rgb(255, 255, 255, 0.72)',
        dark: 'rgb(255, 255, 255, 0.87)',
      },
    },
    border: {
      main: 'rgb(0, 0, 0, 0.3)',
      light: 'rgb(0, 0, 0, 0.14)',
      dark: 'rgb(0, 0, 0, 0.45)',
    },
  },
  background: {
    default: '#ffffff',
    paper: '#fafafa',
  },
  overlay: {
    default: {
      main: 'rgba(255,255,255,0.65)',
      light: 'rgba(255,255,255,0.15)',
      dark: 'rgba(255,255,255,0.87)',
    },
    paper: {
      main: 'rgba(250,250,250,0.7)',
      light: 'rgba(250,250,250,0.15)',
      dark: 'rgba(250,250,250,0.87)',
    },
  },
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
}

export const darkTheme: Theme = {
  ...baseTheme,
  palette: {
    primary: {
      main: '#ff4081',
      light: '#ff79b0',
      dark: '#c60055',
    },
    secondary: {
      main: '#448aff',
      light: '#83b9ff',
      dark: '#005ecb',
    },
    success: {
      main: '#69f0ae',
      light: '#9fffe0',
      dark: '#2bbd7e',
    },
    failure: {
      main: '#ff5252',
      light: '#ff867f',
      dark: '#c50e29',
    },
    info: {
      main: '#ffff00',
      light: '#ffff5a',
      dark: '#c7cc00',
    },
    text: {
      bright: 'rgb(255,255,255,1)',
      main: 'rgb(255,255,255,0.87)',
      light: 'rgb(255,255,255,0.72)',
      dark: 'rgb(255,255,255,0.87)',
      inverse: {
        main: 'rgb(0,0,0,0.87)',
        light: 'rgb(0,0,0,0.72)',
        dark: 'rgb(0,0,0,0.87)',
      },
    },
    border: {
      main: 'rgb(255, 255, 255, 0.3)',
      light: 'rgb(255, 255, 255, 0.15)',
      dark: 'rgb(255, 255, 255, 0.45)',
    },
  },
  overlay: {
    default: {
      main: 'rgba(48,48,48,0.7)',
      light: 'rgba(48,48,48,0.15)',
      dark: 'rgba(48,48,48,0.87)',
    },
    paper: {
      main: 'rgba(66,66,66,0.65)',
      light: 'rgba(66,66,66,0.15)',
      dark: 'rgba(66,66,66,0.87)',
    },
  },
  background: {
    default: '#303030',
    paper: '#424242',
  },
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
}

export const breakpoint = {
  medium: device.mobileM,
  large: device.tablet,
}

export function getCurrentBreakpoint() {
  let breakpoint = 'small'
  let key = 'mobileS'

  if (window) {
    const innerWidth = window.innerWidth
    const medium = size.mobileM
    const large = size.tablet

    if (innerWidth >= large) {
      breakpoint = 'large'
      key = 'tablet'
    } else if (innerWidth >= medium) {
      key = 'mobileM'
      breakpoint = 'medium'
    }
  }

  return { breakpoint, key }
}
