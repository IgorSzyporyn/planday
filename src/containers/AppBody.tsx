import React from 'react'
import { WithTheme } from '../types/WithTheme'
import styled from 'styled-components'
import { useStore } from 'laco-react'
import { QueryStore, QueryStoreType } from '../stores/query'

const Wrapper = styled.main`
  padding-left: ${({ theme }: WithTheme) => theme.spacing(10.5)};
  padding-right: ${({ theme }: WithTheme) => theme.spacing(2)};
  padding-top: ${({ theme }: WithTheme) => theme.spacing(3)};
  padding-bottom: ${({ theme }: WithTheme) => theme.spacing(3)};
`

export const AppBody = () => {
  const { query }: QueryStoreType = useStore(QueryStore)

  return <Wrapper>{query}</Wrapper>
}
