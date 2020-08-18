import { motion, MotionProps } from 'framer-motion'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { ApiQueryData } from '../../api'
import { breakpoint } from '../../theme'
import { device } from '../../theme/device'
import { OpenLinkIcon } from '../icons/OpenLinkIcon/OpenLinkIcon'

const Wrapper = styled(motion.article)`
  background-color: var(--background-paper);
  background-size: cover;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
`

const OpenLink = styled.a`
  position: absolute;
  right: calc(var(--gutter) * 2);
  top: calc(var(--gutter) * 2);
`

const Panel = styled.section`
  align-items: center;
  background-color: var(--overlay-paper-light);
  bottom: 0;
  display: flex;
  left: 0;
  padding: 5%;
  position: absolute;
  right: 0;

  @media ${breakpoint.medium} {
    background-color: var(--overlay-paper);
    padding: 3%;
  }
`

const Avatar = styled.div`
  background-size: cover;
  border-radius: 100%;
  display: none;
  margin-right: var(--spacing-large);
  min-height: 2.4rem;
  min-width: 2.4rem;

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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Title = styled.h4`
  color: var(--color-text);
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakpoint.medium} {
    color: var(--color-text-bright);
    display: block;
  }
`

const AuthorLink = styled.a`
  color: var(--color-text-light);
  text-decoration: none;
`

export const Card = ({
  author,
  authorAvatar,
  authorUri,
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
