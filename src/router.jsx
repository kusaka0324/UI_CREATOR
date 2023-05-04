import { Route, Routes } from "react-router-dom";

import { 
  SetBackground,
  SetDisplay,
  SetStyling,
  SetCustom, 
} from "./features/pages";

export default function Router(){
  return (
    <Routes>
      <Route path={'/'}           element={ <SetBackground/> } />
      <Route path={'/display'}    element={ <SetDisplay/> } />
      <Route path={'/styling'}    element={ <SetStyling/> } />
      <Route path={'/set_custom'} element={ <SetCustom/> } />
    </Routes>
  )
}
