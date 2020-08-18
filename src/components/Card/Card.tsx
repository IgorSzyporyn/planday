import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { ApiQueryData } from '../../api'
import { motion, MotionProps } from 'framer-motion'
import { device } from '../../theme/device'
import { OpenLinkIcon } from '../icons/OpenLinkIcon/OpenLinkIcon'
import { breakpoint } from '../../theme'

const Wrapper = styled(motion.article)`
  position: relative;
  padding-top: 56.25%;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-size: cover;
  background-color: var(--background-paper);
  box-shadow: var(--box-shadow);
  width: 100%;
`

const OpenLink = styled.a`
  position: absolute;
  top: calc(var(--gutter) * 2);
  right: calc(var(--gutter) * 2);
`

const Panel = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--overlay-paper-light);
  padding: 5%;

  @media ${breakpoint.medium} {
    padding: 3%;
    background-color: var(--overlay-paper);
  }
`

const Avatar = styled.div`
  border-radius: 100%;
  min-height: 2.4rem;
  min-width: 2.4rem;
  background-size: cover;
  margin-right: var(--spacing-large);
  display: none;

  @media ${device.mobileM} {
    display: block;
    min-height: 3rem;
    min-width: 3rem;
  }

  @media ${device.tablet} {
    min-height: 4rem;
    min-width: 4rem;
  }
`
const Info = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Title = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text);
  display: none;

  @media ${breakpoint.medium} {
    color: var(--color-text-bright);
    display: block;
  }
`

const AuthorLink = styled.a`
  text-decoration: none;
  color: var(--color-text-light);
`

export const Card = ({
  author,
  authorUri,
  authorAvatar,
  link,
  published,
  title,
  ...rest
}: ApiQueryData & MotionProps) => {
  const style: CSSProperties = {}

  if (link) {
    style.backgroundImage = `url(${link.href})`
  }

  return (
    <motion.div
      initial={{ y: '70vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      exit={{ y: '70vh', opacity: 0 }}
    >
      <Wrapper style={style} {...rest}>
        <OpenLink {...link} target="_blank">
          <OpenLinkIcon />
        </OpenLink>
        <Panel>
          <Avatar style={{ backgroundImage: `url(${authorAvatar})` }} />
          <Info>
            <Title>{title}</Title>
            <h5>
              <AuthorLink href={authorUri} target="_blank">
                {author}
              </AuthorLink>
            </h5>
          </Info>
        </Panel>
      </Wrapper>
    </motion.div>
  )
}
