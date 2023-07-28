import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { DisplayButtonsPage, CodeEditPage, PreviewPage } from './features/pages';

export default function App() {
  useEffect(() => {
    const onUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onUnload);
    window.history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", () => {
      history.go(1);
    });
  });
  return (
    <Routes>
      <Route path='/'          element={<DisplayButtonsPage/>} />
      <Route path='/code_edit' element={<CodeEditPage/>} />
      <Route path='/preview'   element={<PreviewPage/>} />
    </Routes>
  );
}