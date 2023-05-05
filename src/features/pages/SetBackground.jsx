import React from 'react';
import { MainLayout, ContentLayout }   from '@/components/layouts';
import { ScreenLayout } from '@/features/screen';
import { ColorPalette } from '@/features/colorPalette';
import { EditorLayout } from '@/features/codeEditor';
import { SelectAreaLayout, SelectItem, SelectItemList } from '@/features/propertySelect';
import { DraggableItem, DroppableArea } from '../dnds';
import { EnableDndProvider } from '@/providers';

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
            
            </EditorLayout> 
            <SelectAreaLayout areaTitle={'CSS Properties'} className={'background'} >
              <SelectItemList>
                <EnableDndProvider>
                  <DraggableItem name="background">
                    <SelectItem property={'width'}/>
                  </DraggableItem>
                  <DroppableArea/>
                </EnableDndProvider>
                
              </SelectItemList>
            </SelectAreaLayout>
          </div>        
        </div>        
      </ContentLayout>
    </MainLayout>
  )
}


