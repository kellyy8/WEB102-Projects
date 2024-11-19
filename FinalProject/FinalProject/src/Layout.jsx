import { Outlet, Link } from "react-router-dom"
import './Layout.css'

const Layout = () => {
  return (
    <div>
        <nav id="navbar">
            <Link id="homeLink" className="navLinks" to="/">
                Home
            </Link>
            <Link id="GalleryLink" className="navLinks" to="/gallery">
                Gallery
            </Link>
            <Link id="CreatePostLink" className="navLinks" to="/create">
                Create Post
            </Link>
        </nav>
      
      <Outlet/>
    </div>
  )
}

export default Layout