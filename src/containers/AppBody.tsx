import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card/Card'
import { GridOffIcon } from '../components/icons/GridIcon/GridOffIcon'
import { GridOnIcon } from '../components/icons/GridOnIcon/GridOnIcon'
import { LoadingIcon } from '../components/icons/LoadingIcon/LoadingIcon'
import { PROJECT_ID } from '../constants'
import { useApi } from '../hooks/useApi'

const Wrapper = styled.main`
  padding-bottom: calc(var(--gutter) * 3);
  padding-left: calc(var(--gutter) * 5);
  padding-right: calc(var(--gutter) * 5);
  padding-top: calc(var(--gutter) * 3);
  position: relative;
`

const UtilityBar = styled(motion.section)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: calc(var(--gutter) * 5);
`

const IconWrapper = styled.div`
  display: flex;
`

const DataGrid = styled(motion.section)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    flex-basis: ${({ viewMode }: { viewMode: ViewModeTypes }) =>
      viewMode === 'list' ? '100%' : 'calc(50% - var(--spacing))'};
    margin-bottom: calc(var(--spacing) * 2);

    :nth-child(odd) {
      margin-right: ${({ viewMode }: { viewMode: ViewModeTypes }) =>
        viewMode === 'list' ? 0 : 'var(--spacing)'};
    }

    :nth-child(even) {
      margin-left: ${({ viewMode }: { viewMode: ViewModeTypes }) =>
        viewMode === 'list' ? 0 : 'var(--spacing)'};
    }
  }
`

const LoadingWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: calc(50% - calc((var(--spacing) * 15) / 2));
  position: absolute;
  top: calc(var(--spacing) * 3);

  & > svg {
    width: calc(var(--spacing) * 15);
  }
`

type ViewModeTypes = 'grid' | 'list'

export const AppBody = () => {
  const [viewMode, setViewMode] = useState<ViewModeTypes>('grid')
  const { loading, result } = useApi()

  const handleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'grid' : 'list')
  }

  let images = result && result.data ? result.data : []

  if (loading) {
    images = []
  }

  const loadingMotion = {
    hidden: { opacity: 0, y: -75, scale: 0 },
    show: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.3 } },
  }

  const dataGridMotion = {
    show: { opacity: 1 },
  }

  const defaultTitleMotion = {
    initial: { opacity: 0, y: -150 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -150 },
  }

  const titleMotion = {
    hidden: { opacity: 0, y: 350 },
    show: { opacity: 1, y: 0 },
  }

  const hasTitle = result && result.title

  return (
    <div>
      <Wrapper>
        <UtilityBar>
          <AnimatePresence>
            {!hasTitle && !loading && (
              <motion.h3
                key={`${PROJECT_ID}-default-title`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={defaultTitleMotion}
              >
                {'Search by tags on Flickr'}
              </motion.h3>
            )}
          </AnimatePresence>
          <motion.h3
            key={`${PROJECT_ID}-title`}
            initial="initial"
            animate={hasTitle && !loading ? 'show' : 'hidden'}
            variants={titleMotion}
          >
            {(result && result.title) || ''}
          </motion.h3>
          <IconWrapper>
            <GridOnIcon
              hover
              variant="secondary"
              active={viewMode === 'grid'}
              onClick={handleViewMode}
            />
            <GridOffIcon
              hover
              active={viewMode === 'list'}
              variant="secondary"
              onClick={handleViewMode}
            />
          </IconWrapper>
        </UtilityBar>
        <LoadingWrapper
          initial="hidden"
          animate={loading ? 'show' : 'hidden'}
          exit="exit"
          variants={loadingMotion}
        >
          <LoadingIcon />
          <p style={{ textAlign: 'center', marginTop: 'calc(var(--spacing) * -1.7)' }}>
            Loading...
          </p>
        </LoadingWrapper>
        <DataGrid initial={false} animate="show" viewMode={viewMode} variants={dataGridMotion}>
          <AnimateSharedLayout>
            <AnimatePresence>
              {images.map((item) => {
                let key = ''

                if (item.id) {
                  key = item.id.replace(/[^a-zA-Z0-9]/g, '')
                }

                return <Card {...item} layout key={key} id={key} />
              })}
            </AnimatePresence>
          </AnimateSharedLayout>
        </DataGrid>
      </Wrapper>
    </div>
  )
}
