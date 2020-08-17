import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { WithTheme } from '../types/WithTheme'

const Wrapper = styled.section`
  border-radius: ${({ theme }: WithTheme) => theme.borderRadius};
  background-color: ${({ theme }: WithTheme) => theme.background.paper};
  box-shadow: ${({ theme }: WithTheme) => theme.boxShadow};
`

type AppPanelProps = {
  children: ReactNode
}

export const AppPanel = ({ children }: AppPanelProps) => {
  return <Wrapper>{children}</Wrapper>
}
