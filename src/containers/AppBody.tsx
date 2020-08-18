import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card/Card'
import { GridOffIcon } from '../components/icons/GridIcon/GridOffIcon'
import { GridOnIcon } from '../components/icons/GridOnIcon/GridOnIcon'
import { LoadingIcon } from '../components/icons/LoadingIcon/LoadingIcon'
import { PROJECT_ID } from '../constants'
import { useApi } from '../hooks/useApi'
import { breakpoint } from '../theme'

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
  position: fixed;
  top: calc(var(--spacing) * 30);

  & > svg {
    width: calc(var(--spacing) * 15);
  }
`

const NoResultsWrapper = styled(motion.div)`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  left: calc(50% - calc((var(--spacing) * 15) / 2));
  position: fixed;
  top: calc(var(--spacing) * 40);
  width: calc(var(--spacing) * 15);

  @media ${breakpoint.medium} {
    font-size: 1.6rem;
  }
`

type ViewModeTypes = 'grid' | 'list'

export const AppBody = () => {
  const [viewMode, setViewMode] = useState<ViewModeTypes>('grid')
  const { loading, result, touched } = useApi()

  const handleViewModeGrid = () => {
    setViewMode('grid')
  }

  const handleViewModeList = () => {
    setViewMode('list')
  }

  let images = result && result.data ? result.data : []

  if (loading) {
    images = []
  }

  const loadingMotion = {
    hidden: { opacity: 0, y: -75, scale: 0 },
    show: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.3 } },
  }

  const noResultsMotion = {
    hidden: { opacity: 0, y: 75 },
    show: { opacity: 1, y: 0 },
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
              active={viewMode === 'grid'}
              hover
              onClick={handleViewModeGrid}
              variant="secondary"
            />
            <GridOffIcon
              active={viewMode === 'list'}
              hover
              onClick={handleViewModeList}
              variant="secondary"
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
        <NoResultsWrapper
          initial="hidden"
          animate={touched && !loading && images.length === 0 ? 'show' : 'hidden'}
          exit="exit"
          variants={noResultsMotion}
        >
          Nothing To Show
        </NoResultsWrapper>
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
