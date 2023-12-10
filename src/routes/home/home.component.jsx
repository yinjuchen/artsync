import { Fragment } from 'react';
import Directory from '../../components/directory/directory.component'
import './home.styles.scss'

const Home = () => {
  return (
    <Fragment>
     <div className='image-container' style={{ 
        backgroundImage: 'url("https://i.ibb.co/cKqxHZR/home-cover-image.webp")',
        minHeight: '350px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        <div className='text-overlay'>
          <div className='home-quote'>“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein</div>
        </div>
      </div>
      <Directory />
    </Fragment>
  )
}

export default Home;
