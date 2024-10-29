import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedView from './DetailedView';
import Layout from './Layout';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/catDetails/:symbol" element={<DetailedView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
