import 'reset-css'
import 'roboto-fontface'
import { createGlobalStyle } from 'styled-components'
import { WithTheme, breakpoint } from '../theme'
import { device } from '../theme/device'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
  }

  html * {
    box-sizing: border-box;
  }

  body,
  #root {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
    min-height: 100%;
  }

  h1 {
    font-size: 1.6rem;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
    font-weight: 400;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.4em;
    font-weight: 300;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.35em;
  }

  h5 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1.4rem;
    margin: 0.4em 0;
  }

  @media ${breakpoint.medium} {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    h4 {
      font-size: 1.1rem;
    }

    h5 {
      font-size: 1rem;
    }

    p {
      font-size: 1.6rem; 
    }
  }

  @media ${breakpoint.large} {
    font-size: 1rem;

    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 400;
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  }

  :root {
      --border-radius: ${({ theme }: WithTheme) => theme.borderRadius};
      --box-shadow: ${({ theme }: WithTheme) => theme.boxShadow};
      
      --background-default: ${({ theme }: WithTheme) => theme.background.default};
      --background-paper: ${({ theme }: WithTheme) => theme.background.paper};

      --overlay-default: ${({ theme }: WithTheme) => theme.overlay.default.main};
      --overlay-default-main: ${({ theme }: WithTheme) => theme.overlay.default.main};
      --overlay-default-light: ${({ theme }: WithTheme) => theme.overlay.default.light};
      --overlay-default-dark: ${({ theme }: WithTheme) => theme.overlay.default.dark};

      --overlay-paper: ${({ theme }: WithTheme) => theme.overlay.paper.main};
      --overlay-paper-main: ${({ theme }: WithTheme) => theme.overlay.paper.main};
      --overlay-paper-light: ${({ theme }: WithTheme) => theme.overlay.paper.light};
      --overlay-paper-dark: ${({ theme }: WithTheme) => theme.overlay.paper.dark};

      --color-primary: ${({ theme }: WithTheme) => theme.palette.primary.main};
      --color-primary-main: ${({ theme }: WithTheme) => theme.palette.primary.main};
      --color-primary-light: ${({ theme }: WithTheme) => theme.palette.primary.light};
      --color-primary-dark: ${({ theme }: WithTheme) => theme.palette.primary.dark};
      
      --color-secondary: ${({ theme }: WithTheme) => theme.palette.secondary.main};
      --color-secondary-main: ${({ theme }: WithTheme) => theme.palette.secondary.main};
      --color-secondary-light: ${({ theme }: WithTheme) => theme.palette.secondary.light};
      --color-secondary-dark: ${({ theme }: WithTheme) => theme.palette.secondary.dark};
      
      --color-success: ${({ theme }: WithTheme) => theme.palette.success.main};
      --color-success-main: ${({ theme }: WithTheme) => theme.palette.success.main};
      --color-success-light: ${({ theme }: WithTheme) => theme.palette.success.light};
      --color-success-dark: ${({ theme }: WithTheme) => theme.palette.success.dark};
      
      --color-failure: ${({ theme }: WithTheme) => theme.palette.failure.main};
      --color-failure-main: ${({ theme }: WithTheme) => theme.palette.failure.main};
      --color-failure-light: ${({ theme }: WithTheme) => theme.palette.failure.light};
      --color-failure-dark: ${({ theme }: WithTheme) => theme.palette.failure.dark};
      
      --color-info: ${({ theme }: WithTheme) => theme.palette.info.main};
      --color-info-main: ${({ theme }: WithTheme) => theme.palette.info.main};
      --color-info-light: ${({ theme }: WithTheme) => theme.palette.info.light};
      --color-info-dark: ${({ theme }: WithTheme) => theme.palette.info.dark};
      
      --color-border: ${({ theme }: WithTheme) => theme.palette.border.main};
      --color-border-main: ${({ theme }: WithTheme) => theme.palette.border.main};
      --color-border-light: ${({ theme }: WithTheme) => theme.palette.border.light};
      --color-border-dark: ${({ theme }: WithTheme) => theme.palette.border.dark};
      
      --color-text: ${({ theme }: WithTheme) => theme.palette.text.main};
      --color-text-main: ${({ theme }: WithTheme) => theme.palette.text.main};
      --color-text-light: ${({ theme }: WithTheme) => theme.palette.text.light};
      --color-text-dark: ${({ theme }: WithTheme) => theme.palette.text.dark};
      --color-text-bright: ${({ theme }: WithTheme) => theme.palette.text.bright};
      --color-text-inverse-main: ${({ theme }: WithTheme) => theme.palette.text.inverse.main};
      --color-text-inverse-light: ${({ theme }: WithTheme) => theme.palette.text.inverse.light};
      --color-text-inverse-dark: ${({ theme }: WithTheme) => theme.palette.text.inverse.dark};

      --gutter: ${({ theme }: WithTheme) => theme.spacing(0.5)};
      --spacing: ${({ theme }: WithTheme) => theme.spacing(1)};
      --spacing-large: ${({ theme }: WithTheme) => theme.spacing(1.5)};

    }

    @media ${device.mobileM} {
      :root {
        --gutter: ${({ theme }: WithTheme) => theme.spacing(0.75)};
        --spacing: ${({ theme }: WithTheme) => theme.spacing(1.25)};
        --spacing-large: ${({ theme }: WithTheme) => theme.spacing(1.3)};
      }
    }

    @media ${device.tablet} {
      :root {
        --gutter: ${({ theme }: WithTheme) => theme.spacing(1)};
        --spacing: ${({ theme }: WithTheme) => theme.spacing(1.5)};
        --spacing-large: ${({ theme }: WithTheme) => theme.spacing(1.75)};
      }
    }
`
