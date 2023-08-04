import React  from 'react';
import styled from 'styled-components';

import { CodeEditor }      from '../codeEditor'
import { Screen }          from '../screen'
import { Sidebar, Topber } from '@/components';

export const CodeEditPage = () => {
  return (
    <MainLayout>   
      <Topber/>   
      <PreviewLayout>
        <Screen />
      </PreviewLayout>
      <ContentLayout>
        <Sidebar/>
        <CodeEditor/>
      </ContentLayout>
    </MainLayout>
  );
};

const MainLayout= styled.div`
  display    : grid;
  margin     : 0;
  max-height : 100vh;
  max-width  : 100vw;
  grid-template-rows   : 80px 1fr;
  grid-template-columns: 1fr 1fr;
`;

const ContentLayout= styled.main`
  display    : flex;
  grid-row   : 2;
  grid-column: 1;
  width      : 100%;
  height     : 100%;
  background : #f3f3f3;
  padding    : 1rem;
`;

const PreviewLayout= styled.div`
  height         : 100%;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;
  grid-row       : 2;
  grid-column    : 2;
  background     : #fefefe;
`;
