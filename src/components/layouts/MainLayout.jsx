import React from 'react'
import { Header, Sidebar } from '../ui';

export const MainLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header title={'UI'} accentTitle={'CREATER'} />
      <main>
        <Sidebar/>
        {children}
      </main>
    </div>
  )
}
