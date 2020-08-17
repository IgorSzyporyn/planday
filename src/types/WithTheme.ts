import { Theme } from '../styles/theme'

export type WithTheme<T = {}> = {
  theme: Theme
} & T
