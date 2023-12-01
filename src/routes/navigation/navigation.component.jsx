import { Fragment, lazy, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'

// Lazy load components outside the functional component
const LazyHome = lazy(() => import('../home/home.component'));
const LazyExhibition = lazy(() => import('../../components/exhibition/exhibition.component'));
const LazyGallery = lazy(() => import('../gallery/gallery.component'));
const LazyQuote = lazy(() => import('../quote/quote.component'));


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