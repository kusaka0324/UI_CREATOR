import React from 'react';
import { MainLayout }   from '@/components/layouts';
import { ScreenLayout } from '@/features/screen';
import { ColorPalette } from '@/features/colorPalette';
import { EditorLayout } from '@/features/codeEditor';
import { SelectAreaLayout, SelectItem, SelectItemList } from '@/features/propertySelect';

export const SetStyling = () => {
  return (
    <MainLayout>
      {/*あとで修正 */}
      <div style={{display:'flex', flexDirection: 'column'}} >
        <div style={{display:'flex', alignItems: 'center'}}>
          <ScreenLayout className={'background'}>
            
          </ScreenLayout>
          <ColorPalette/>
        </div>
        <div style={{display:'flex'}}>
          <EditorLayout>
            
          </EditorLayout> 
          <SelectAreaLayout areaTitle={'CSS Properties'} >
            <SelectItemList>
              <SelectItem property={'width'}/>
            </SelectItemList>
          </SelectAreaLayout>
        </div>        
      </div>
    </MainLayout>
  )
}
