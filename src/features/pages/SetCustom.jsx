import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

import { MainLayout }   from '@/components/layouts'
import { ScreenLayout } from '@/features/screen';
import { Button }       from '@/components/ui';


export const SetCustom= () => {
  return (
    <MainLayout>
      <div>
        <ScreenLayout className={'SetCustom'}>

        </ScreenLayout>
        <Button icon={<SettingsIcon />}>
          <span>Set Custom</span>
        </Button>
      </div>
    </MainLayout>
  )
}
