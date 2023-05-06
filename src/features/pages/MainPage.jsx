import React from 'react';
import { MainLayout, ContentLayout } from '@/components/layouts';
import { ScreenLayout }  from '@/features/screen';
import { EditorLayout }  from '@/features/codeEditor';
import { PreviewLayout } from '@/components/layouts/PreviewLayout';
import { Topber }        from '@/components/ui';

export const MainPage = () => {
  return (
    <MainLayout >
      <Topber title={'UI'} accentTitle={'CREATER'} />
      <PreviewLayout >
        <ScreenLayout ></ScreenLayout>        
      </PreviewLayout>
      <ContentLayout >
        <EditorLayout></EditorLayout>   
      </ContentLayout>        
    </MainLayout>
  )
}

