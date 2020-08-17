import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { PROJECT_ID } from '../../constants'
import { WithTheme } from '../../types/WithTheme'
import { QueryStore, QueryStoreType } from '../../stores/query'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const Label = styled.label`
  flex-basis: 100%;
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0 none;
  outline: 0 none;
  background-color: transparent;
  font-size: 1.4rem;
  color: ${({ theme }: WithTheme) => theme.palette.text.main};
  padding-top: ${({ theme }: WithTheme) => theme.spacing(1.4)};
  padding-bottom: ${({ theme }: WithTheme) => theme.spacing(1.4)};
`

export const SearchPanel = () => {
  const [query, setQuery] = useState('')
  const [inputValue, setInputvalue] = useState('')

  const inputId = `${PROJECT_ID}-search-input`

  useEffect(() => {
    const timeOutId = setTimeout(() => setQuery(inputValue), 500)
    return () => clearTimeout(timeOutId)
  }, [inputValue])

  useEffect(() => {
    QueryStore.set((state: QueryStoreType) => ({ ...state, query }))
  }, [query])

  return (
    <Wrapper>
      <Label htmlFor={inputId}>
        <Input
          onChange={(event) => setInputvalue(event.target.value)}
          placeholder="Enter keywords to search for images..."
          value={inputValue}
          id={inputId}
          name={inputId}
        />
      </Label>
    </Wrapper>
  )
}
