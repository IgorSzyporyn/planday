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
  position: relative;
  flex-basis: 100%;
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0 none;
  outline: 0 none;
  background-color: transparent;
  font-size: 1em;
  color: var(--color-text-light);
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
  padding-left: 3.2rem;

  @media ${device.tablet} {
    padding-left: 3.6rem;
  }
`
const InputIcon = styled(SearchIcon)`
  position: absolute;
  left: 0.4rem;
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
          onChange={(event) => setInputvalue(event.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Enter keywords to search for images..."
          value={inputValue}
        />
        <InputIcon active={active} />
      </Label>
    </Wrapper>
  )
}
