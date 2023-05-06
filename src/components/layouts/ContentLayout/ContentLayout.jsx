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

const ContentTitle= styled.div`
  position   : absolute;
  top        : 1rem;
  left       : 1.75rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size  : 2rem;
  color      : #2424dc;
  z-index    : 100;

  > div {
    margin-top : 0.5rem;
    font-size  : 1rem;
    font-weight: 500;
    color      : #a9a9a9;
  }
`;

const ContentStyle= styled.div``;