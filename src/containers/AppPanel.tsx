import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  background-color: var(--background-paper);
  box-shadow: var(--box-shadow);
  max-width: 1140px;
  width: 100%;
`

type AppPanelProps = {
  children: ReactNode
}

export const AppPanel = ({ children }: AppPanelProps) => {
  return <Wrapper>{children}</Wrapper>
}
