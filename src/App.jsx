import React             from 'react';
import { Routes, Route } from 'react-router-dom';

import { DisplayButtonsPage, CodeEditPage, PreviewPage } from './features/pages';

export default function App() {
  return (
    <Routes>
      <Route path='/'          element={<DisplayButtonsPage/>} />
      <Route path='/code_edit' element={<CodeEditPage/>} />
      <Route path='/preview'   element={<PreviewPage/>} />
    </Routes>
  );
}