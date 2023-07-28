import React  from 'react';
import styled from 'styled-components';

import { CodeEditor }                from '../codeEditor'
import { Screen }                    from '../screen'
import { MainLayout } from '../../components/layouts/MainLayout';
import { ContentLayout } from '../../components/layouts/ContentLayout';

export const CodeEditPage = () => {
  return (
    <MainLayout>      
      <PreviewLayout>
        <Screen />
      </PreviewLayout>
      <ContentLayout>
        <CodeEditor/>
      </ContentLayout>
    </MainLayout>
  );
};

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
