import React from 'react'
import styled from 'styled-components'
import { SearchPanel } from '../components/SearchPanel/SearchPanel'
import { WithTheme } from '../types/WithTheme'
import avatar from '../images/avatar.jpg'

const Wrapper = styled.header`
  border-bottom: ${({ theme }: WithTheme) => `1px solid ${theme.palette.border.light}`};
`

const Presentation = styled.div`
  padding-left: ${({ theme }: WithTheme) => theme.spacing(2)};
  padding-right: ${({ theme }: WithTheme) => theme.spacing(2)};
  padding-top: ${({ theme }: WithTheme) => theme.spacing(2)};
  margin-bottom: ${({ theme }: WithTheme) => theme.spacing(3)};
  display: flex;
  flex-direction: row;
`

const Avatar = styled.img`
  margin-right: ${({ theme }: WithTheme) => theme.spacing(2)};
  border-radius: 100%;
  width: ${({ theme }: WithTheme) => theme.spacing(6.5)};
  height: ${({ theme }: WithTheme) => theme.spacing(6.5)};
`

const Functionality = styled.div`
  padding-left: ${({ theme }: WithTheme) => theme.spacing(10.5)};
`

export const AppHeader = () => {
  return (
    <Wrapper>
      <Presentation>
        <Avatar src={avatar} />
        <div>
          <h1>Planday Front End Challenge</h1>
          <h2>Igor Szyporyn Jørgensen</h2>
        </div>
      </Presentation>
      <Functionality>
        <SearchPanel />
      </Functionality>
    </Wrapper>
  )
}
