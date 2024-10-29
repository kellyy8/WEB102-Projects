import { Outlet, Link } from "react-router-dom"

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

export default Layout