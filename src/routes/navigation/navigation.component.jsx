import { Fragment, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'

const Navigation = () => {

  return (
    <Fragment>
        <div className="navigation">
          <div className="nav-links-container">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/exhibition'>
              Art Exhibition
            </Link>
            <Link className="nav-link" to='/gallery'>
              Art Gallery
            </Link>
            <Link className="nav-link" to='/quote'>
              Art Quote 
            </Link>
          </div>
         <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
         </Suspense>
        </div>
    </Fragment>
  )
}

export default Navigation