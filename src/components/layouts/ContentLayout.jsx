import React  from 'react';
import styled from 'styled-components';

export const ContentLayout = ({children}) => {
  return (
    <ContentGridItem >
      <ContentWrapper >
        {children}   
      </ContentWrapper>
    </ContentGridItem>
  )
}

const ContentGridItem= styled.main`
  grid-row   : 2;
  grid-column: 1;
  width      : 100%;
  height     : 100%;
  background : #1c1c1c;
`;

const ContentWrapper= styled.div`
  display : flex;
  position: relative;
  height  : 100%;
  width   : 100%;
  padding : 1rem;
`;