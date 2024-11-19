import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import Gallery from './Gallery.jsx'
import CreatePost from './CreatePost.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<Home/>} />
          <Route index={false} path="/gallery" element={<Gallery/>} />
          <Route index={false} path="/create" element={<CreatePost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)