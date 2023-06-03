import React                         from 'react';
import styled                        from 'styled-components';
import { EditByCssAtom }             from '@/recoil/atoms';

import { MainLayout, ContentLayout } from '@/components/Layouts'
import { CodeEditor }                from '../codeEditor'
import { Screen }                    from '../screen'
import { useRecoilValue }            from 'recoil';

export const CodeEditPage = () => {
  const buttonsStyle= useRecoilValue(EditByCssAtom);

  return (
    <MainLayout>      
      <PreviewLayout >
        <Screen buttonsStyle={buttonsStyle}></Screen>
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
