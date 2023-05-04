import React from 'react'
import styled from 'styled-components'

export const ContentLayout = ({children}) => {
  return (
    <ContentWrapper >
      {children}
    </ContentWrapper>
  )
}

const ContentWrapper= styled.div`
  height: 100%;
  width : 100%;
  margin: 30px;
`;