import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import CreateTeammate from './CreateTeammate.jsx'
import Gallery from './Gallery.jsx'
import ProfilePage from './ProfilePage.jsx'

const Layout = () => {
  return (
    <div>
      <nav style={{width:"100%"}}>
        <Link className="link" key="home-button" to="/">
          Home
        </Link>
        <Link className="link" key="gallery-button" to="/gallery">
          Gallery
        </Link>
        <Link className="link" key="create-button" to="/create">
          Create New Teammate
        </Link>
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
          <Route index={false} path="/teammateDetails/:symbol" element={<ProfilePage/>}/>
          <Route index={false} path="/create" element={<CreateTeammate />} />
          <Route index={false} path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
