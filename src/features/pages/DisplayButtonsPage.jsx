import React  from 'react';
import styled from 'styled-components';

import { Header, Sidebar, Topber }   from '@/components';
import { Screen }                    from '../screen';
import { ButtonsSelectForm } from '@/features/controller/ButtonsSelectForm';

export const DisplayButtonsPage = () => {
  return (
    <MainLayout>  
      <Topber/>      
      <PreviewLayout>
        <Sidebar/>
        <ScreenStyleDiv>
          <Header title={'DisplayButtons'} subTitle={'操作ボタンを配置しよう'} />
          <ScreenPosition>
            <Screen />
          </ScreenPosition>
        </ScreenStyleDiv>
      </PreviewLayout>    
      <ContentLayout >
        <ButtonsSelectForm />
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

const PreviewLayout= styled.main`
  display    : flex;
  grid-row   : 2;
  grid-column: 1;
  width      : 100%;
  height     : 100%;
  background : #f3f3f3;
  padding    : 1rem;
`;

const ContentLayout= styled.div`
  height         : 100%;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;
  grid-row       : 2;
  grid-column    : 2;
  background     : #f3f3f3;
`;

const ScreenStyleDiv= styled.div`
  margin-left    : 0.75rem;
  position       : relative;
  display        : flex;
  flex-direction : column;
  height         : calc(100% - 8rem);
  width          : 100%;
`
const ScreenPosition= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width : 100%;
`;