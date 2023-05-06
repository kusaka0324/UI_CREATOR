import React from 'react'
import styled from 'styled-components';

export const MainLayout = ({ children }) => {
  return (
    <GridLayout>
      {children}
    </GridLayout>
  );
};

const GridLayout= styled.div`
  display    : grid;
  margin     : 0;
  min-height : 100vh;
  min-width  : 100vw;
  grid-template-rows   : 5.75rem 1fr;
  grid-template-columns: 1fr 1fr;
`;

