import React  from 'react'
import styled from 'styled-components';

export const PreviewLayout = ({children}) => {
  return (
    <PreviewGridItem>
      <PreviewContainer >
        {children}
      </PreviewContainer>
    </PreviewGridItem>
  );
};

const PreviewGridItem= styled.div`
  grid-row   : 2;
  grid-column: 2;
  background : #fefefe;
`;

const PreviewContainer= styled.div`
  height     : 100%;
  width      : 100%;
  display    : flex;
  align-items: center;
  justify-content:center;
`;