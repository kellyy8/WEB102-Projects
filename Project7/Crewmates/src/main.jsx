import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const Layout = () => {
  return (
    <div>
      <nav style={{width:"100%"}}>
        <div className="home-link" key="home-button">
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
        </div>
      </nav>
      
      <Outlet/>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          {/* <Route index={false} path="/catDetails/:symbol" element={<DetailedView/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
