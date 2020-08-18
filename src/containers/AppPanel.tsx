import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: var(--background-paper);
  border-radius: var(--border-radius);
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
