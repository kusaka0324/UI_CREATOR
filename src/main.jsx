import React    from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot }    from 'recoil'

import './index.css'
import Router from './router'
import { EnableDndProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <EnableDndProvider>
          <Router />
        </EnableDndProvider>        
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
