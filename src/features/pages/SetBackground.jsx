import React from 'react';
import { MainLayout, ContentLayout }   from '@/components/layouts';
import { ScreenLayout } from '@/features/screen';
import { ColorPalette } from '@/features/colorPalette';
import { CodeEditor, EditorLayout } from '@/features/codeEditor';
import { SelectAreaLayout, SelectItem, SelectItemList } from '@/features/propertySelect';

export const SetBackground = () => {
  return (
    <MainLayout>
      <ContentLayout>
        {/*あとで修正 */}
        <div style={{display:'flex', flexDirection: 'column'}} >
          <div style={{display:'flex', alignItems: 'center'}}>
            <ScreenLayout className={'setBackground'}>
              
            </ScreenLayout>
            <ColorPalette/>
          </div>
          <div style={{display:'flex'}}>
            <EditorLayout>
              <CodeEditor/>
            </EditorLayout> 
            <SelectAreaLayout areaTitle={'CSS Properties'} className={'background'} >
              <SelectItemList>
                <SelectItem property={'width'}/>
              </SelectItemList>
            </SelectAreaLayout>
          </div>        
        </div>        
      </ContentLayout>
    </MainLayout>
  )
}


