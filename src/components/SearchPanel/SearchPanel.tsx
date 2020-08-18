import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PROJECT_ID } from '../../constants'
import { QueryStore, QueryStoreType } from '../../stores/query'
import { breakpoint } from '../../theme'
import { device } from '../../theme/device'
import { SearchIcon } from '../icons/SearchIcon/SearchIcon'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
`

const Label = styled.label`
  flex-basis: 100%;
  position: relative;
`

const Input = styled.input`
  background-color: transparent;
  border: 0 none;
  box-sizing: border-box;
  color: var(--color-text-light);
  font-size: 1em;
  outline: 0 none;
  padding-bottom: var(--spacing-large);
  padding-left: 3.2rem;
  padding-top: var(--spacing-large);
  width: 100%;

  @media ${device.tablet} {
    padding-left: 3.6rem;
  }
`
const InputIcon = styled(SearchIcon)`
  left: 0.4rem;
  position: absolute;
  top: 1.2rem;

  @media ${breakpoint.medium} {
    top: 1rem;
  }

  @media ${breakpoint.large} {
    top: 1.2rem;
  }
`

export const SearchPanel = () => {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [inputValue, setInputvalue] = useState('')

  const inputId = `${PROJECT_ID}-search-input`

  useEffect(() => {
    const timeOutId = setTimeout(() => setQuery(inputValue), 1500)
    return () => clearTimeout(timeOutId)
  }, [inputValue])

  useEffect(() => {
    QueryStore.set((state: QueryStoreType) => ({ ...state, query }))
  }, [query])

  return (
    <Wrapper>
      <Label htmlFor={inputId}>
        <Input
          autoComplete="off"
          id={inputId}
          name={inputId}
          onBlur={() => setActive(false)}
          onChange={(event) => setInputvalue(event.target.value)}
          onFocus={() => setActive(true)}
          placeholder="Enter keywords to search for images..."
          value={inputValue}
        />
        <InputIcon active={active} />
      </Label>
    </Wrapper>
  )
}
