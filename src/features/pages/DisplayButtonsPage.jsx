import React  from 'react';
import styled from 'styled-components';

import { ContentLayout, MainLayout } from '@/components/layouts'
import { Header }                    from '@/components/ui';
import { Screen }                    from '../screen';
import { ButtonsSelectForm } from '@/features/controller/ButtonsSelectForm';

export const DisplayButtonsPage = () => {
  return (
    <MainLayout>      
      <PreviewLayout >
        <Screen />
      </PreviewLayout>
      <ContentLayout>
        <SelectAreaLayout>
          <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />
          <ButtonsSelectForm />
        </SelectAreaLayout>
      </ContentLayout>
    </MainLayout>
  )
}


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