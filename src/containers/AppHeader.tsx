import { motion, useViewportScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SearchPanel } from '../components/SearchPanel/SearchPanel'
import avatar from '../images/avatar.jpg'
import { breakpoint, getCurrentBreakpoint } from '../theme'

const Wrapper = styled.header`
  background-color: var(--overlay-paper);
  padding-left: calc(var(--gutter) * 5);
  padding-right: calc(var(--gutter) * 5);
  padding-top: calc(var(--gutter) * 5);
  margin-bottom: calc(var(--gutter) * 3);
  position: sticky;
  top: 0;
  z-index: 1000;
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
  margin: 0;
`

const Presentation = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: var(--spacing);
`

const Avatar = styled(motion.a)`
  border-radius: 100%;
  margin-right: var(--spacing-large);
  overflow: hidden;

  & > img {
    height: 4rem;
    width: auto;

    @media ${breakpoint.medium} {
      height: 4.6rem;
    }

    @media ${breakpoint.large} {
      height: 5.8rem;
    }
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
  const [avatarTop, setAvatarTop] = useState(false)
  const [infoLeft, setInfoLeft] = useState(false)
  const [moveInfoLeft, setMoveInfoLeft] = useState(0)
  const { scrollY } = useViewportScroll()

  const handleWindowSize = () => {
    const { breakpoint } = getCurrentBreakpoint()
    let moveLeft = -52

    if (breakpoint === 'medium') {
      moveLeft = -57
    } else if (breakpoint === 'large') {
      moveLeft = -72
    }

    setMoveInfoLeft(moveLeft)
  }

  useEffect(() => {
    setMounted(true)

    window.addEventListener('resize', handleWindowSize)

    return () => window.removeEventListener('resize', handleWindowSize)
  }, [])

  useEffect(() => {
    scrollY.onChange((y) => {
      if (y >= 70) {
        const deltaAvatar = y - 70

        setAvatarTop(true)

        if (deltaAvatar >= 25) {
          setInfoLeft(true)
        } else {
          setInfoLeft(false)
        }
      } else {
        setAvatarTop(false)
        setInfoLeft(false)
      }
    })
  }, [scrollY])

  const titleMotion = {
    hidden: { opacity: 0, y: -180 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, mass: 1.1, damping: 10 },
    },
  }

  const subTitleMotion = {
    hidden: { opacity: 0, y: -100 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, delay: 0.2, mass: 1.1, damping: 10 },
    },
  }

  const infoMotion = {
    normal: { x: 0 },
    moveleft: { x: moveInfoLeft },
  }

  const avatarMotion = {
    hidden: { opacity: 0, y: -100 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, delay: 0.4, mass: 1.1, damping: 10 },
    },
  }

  const avatarImageMotion = {
    movetop: { y: -100 },
    moveback: { y: 0 },
  }

  const borderMotion = {
    hidden: { flexBasis: '0%' },
    show: { flexBasis: '100%', transition: { type: 'spring', stiffness: 400, delay: 0.4 } },
  }

  const searchMotion = {
    hidden: { x: -2250, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { delay: 1.2 } },
  }

  return (
    <Wrapper>
      <Presentation>
        <Avatar
          initial={false}
          animate={mounted ? 'show' : 'hidden'}
          href="https://github.com/IgorSzyporyn/planday"
          rel="noopener noreferrer"
          target="_blank"
          title="Link to the repository with code"
          variants={avatarMotion}
        >
          <motion.img
            initial={false}
            animate={avatarTop ? 'movetop' : 'moveback'}
            alt="ISJ Avatar"
            src={avatar}
            variants={avatarImageMotion}
          />
        </Avatar>
        <motion.div
          initial={false}
          animate={infoLeft ? 'moveleft' : 'normal'}
          variants={infoMotion}
        >
          <motion.h1 initial="hidden" animate={mounted ? 'show' : 'hidden'} variants={titleMotion}>
            Planday Code Challenge
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate={mounted ? 'show' : 'hidden'}
            variants={subTitleMotion}
          >
            by Igor Szyporyn Jørgensen
          </motion.h2>
        </motion.div>
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
