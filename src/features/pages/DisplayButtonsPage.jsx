import React  from 'react';
import styled from 'styled-components';

import { Header, Sidebar, Topber }                    from '@/components';
import { Screen }                    from '../screen';
import { ButtonsSelectForm } from '@/features/controller/ButtonsSelectForm';

export const DisplayButtonsPage = () => {
  return (
    <MainLayout>  
      <Topber/>    
      <PreviewLayout >
        <Screen />
      </PreviewLayout>
      <ContentLayout>
        <Sidebar/>
        <SelectAreaLayout>
          <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />
          <ButtonsSelectForm />
        </SelectAreaLayout>
      </ContentLayout>
    </MainLayout>
  )
}

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
  background : #ECECEC;
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

const SelectAreaLayout= styled.div`
  margin-left   : 0.75rem;
  display       : flex;
  flex-direction: column;
  height        : 100%;
  width         : calc(100% - 8rem);
`;