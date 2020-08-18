import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SearchPanel } from '../components/SearchPanel/SearchPanel'
import avatar from '../images/avatar.jpg'
import { breakpoint } from '../theme'

const Wrapper = styled.header`
  background-image: linear-gradient(
    180deg,
    var(--background-paper) 0%,
    var(--overlay-paper-dark) 77%,
    rgba(0, 0, 0, 0) 100%
  );
  padding-left: calc(var(--gutter) * 5);
  padding-right: calc(var(--gutter) * 5);
  padding-top: calc(var(--gutter) * 5);
  position: sticky;
  top: 0;
  z-index: 99999;
`

const BorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Border = styled(motion.hr)`
  background-color: var(--color-border-light);
  border-bottom: 1px solid var(--color-border);
  border: 0 none;
  height: 0.1rem;
  margin: 0 0 calc(var(--spacing-large) * 5) 0;
`

const Presentation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(var(--gutter) * 3);
`

const Avatar = styled(motion.img)`
  border-radius: 100%;
  height: 4rem;
  margin-right: var(--spacing-large);
  width: auto;

  @media ${breakpoint.medium} {
    height: 4.6rem;
  }

  @media ${breakpoint.large} {
    height: 5.8rem;
  }
`

const SearchMotion = styled.div`
  margin-left: calc(var(--gutter) * -5);
  margin-right: calc(var(--gutter) * -5);
  overflow: hidden;
  padding-left: calc(var(--gutter) * 5);
  padding-right: calc(var(--gutter) * 5);
`

export const AppHeader = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const titleMotion = {
    hidden: { opacity: 0, y: -80 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 400, mass: 1.1, damping: 10 },
    },
  }

  const subTitleMotion = {
    hidden: { opacity: 0, y: -100 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 400, delay: 0.2, mass: 1.1, damping: 10 },
    },
  }

  const avatarMotion = {
    hidden: { opacity: 0, y: -100 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 400, delay: 0.4, mass: 1.1, damping: 10 },
    },
  }

  const borderMotion = {
    hidden: { flexBasis: '0%' },
    show: { flexBasis: '100%', transition: { type: 'spring', stiffness: 400, delay: 0.4 } },
  }

  const searchMotion = {
    hidden: { x: -2250, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 0.8 } },
  }

  return (
    <Wrapper>
      <Presentation>
        <a href="https://npmjs.org/package/igor-szyporyn" rel="noopener noreferrer" target="_blank">
          <Avatar
            src={avatar}
            initial="hidden"
            animate={mounted ? 'show' : 'hidden'}
            variants={avatarMotion}
          />
        </a>
        <div>
          <motion.h1 initial="hidden" animate={mounted ? 'show' : 'hidden'} variants={titleMotion}>
            Planday Code Challenge
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate={mounted ? 'show' : 'hidden'}
            variants={subTitleMotion}
          >
            Igor Szyporyn Jørgensen
          </motion.h2>
        </div>
      </Presentation>
      <SearchMotion>
        <motion.div initial="hidden" animate={mounted ? 'show' : 'hidden'} variants={searchMotion}>
          <SearchPanel />
        </motion.div>
      </SearchMotion>
      <BorderWrapper>
        <Border
          initial="hidden"
          animate={mounted ? 'show' : 'hidden'}
          variants={borderMotion}
          transition={{ duration: 0.35, ease: 'easeIn' }}
        />
      </BorderWrapper>
    </Wrapper>
  )
}
