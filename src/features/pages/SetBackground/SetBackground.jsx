import React from 'react';
import { MainLayout } from '../../../components/layouts';
import { ColorPalette } from '../../colorPalette';
import { CodeEditor, EditorFrame } from '../../codeEditor';
import { SelectAreaLayout, SelectItem, SelectItemList } from '../../propertySelect';

export const SetBackground = () => {
  return (
    <MainLayout>
      <div style={{display:'flex',flexDirection:'column'}}>
        <ColorPalette/>
        <div style={{display:'flex'}}>
          <EditorFrame>
            <CodeEditor/>
          </EditorFrame> 
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


