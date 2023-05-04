import React from 'react';

import { MainLayout }   from '@/components/layouts'
import { ScreenLayout } from '@/features/screen';
import { Button }       from '@/components/ui';

export const SetCustom= () => {
  return (
    <MainLayout>
      <div>
        <ScreenLayout className={'set-custom'}>

        </ScreenLayout>
        <Button>
          <span>Set Custom</span>
        </Button>
      </div>
    </MainLayout>
  )
}
