import React from 'react'
import { Header, Sidebar } from '../ui';
import styled from 'styled-components';

export const MainLayout = ({ children }) => {
  return (
    <MainLayoutStyle>
      <Header title={'UI'} accentTitle={'CREATER'} />
      <main>
        <Sidebar />
        <div>
          {children}
        </div>
      </main>
    </MainLayoutStyle>
  )
}

const MainLayoutStyle= styled.div`
  height: 100%;
  width : 100%;
  > main {
    display: flex;
  };
`;
