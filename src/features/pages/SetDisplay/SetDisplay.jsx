import React from 'react'
import { MainLayout }       from '@/components/layouts'
import { ScreenLayout }     from '@/features/screen';
import { SelectAreaLayout } from '@/features/propertySelect';

export const SetDisplay = () => {
  return (
    <MainLayout>
      {/*あとで修正*/}
      <div style={{display:'flex', flexDirection:'column', alignItems: 'center', width:'100%'}}>
        <ScreenLayout className={'display'}>

        </ScreenLayout>    
        <display style={{display:'flex'}}>
          <SelectAreaLayout areaTitle={'Left'} className={'display-leftButton'}>
            
          </SelectAreaLayout>   
          <SelectAreaLayout areaTitle={'Right'} className={'display-rightButton'}>
            
          </SelectAreaLayout>   
          <SelectAreaLayout areaTitle={'options'} className={'display-optionButton'}>
            
          </SelectAreaLayout>                
        </display>
      </div>
    </MainLayout>
  )
}

