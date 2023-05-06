import { Route, Routes } from "react-router-dom";

import { MainPage, WebviewControllerPage } from './features/pages';

export default function Router(){
  return (
    <Routes>
      <Route path={'/'}           element={ <MainPage /> } />
      <Route path={'/webview-controller'}    element={ <WebviewControllerPage/> } />
    </Routes>
  )
}
