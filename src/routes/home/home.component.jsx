import { Fragment } from 'react';
import Directory from '../../components/directory/directory.component'
import './home.styles.scss'

// Define your galleries array directly within the component
const Home = () => {
  return (
    <Fragment>
      <div className='image-container'>
        <img 
          src='https://i.ibb.co/dj8hv7M/home-cover-jpg.jpg' 
          alt='' 
          data-testid="home-cover-image" 
          className='home-cover-imag'
        />
        <div className='text-overlay'>
          <div className='home-quote'>“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein</div>
        </div>
      </div>
      <Directory />
    </Fragment>
  )
}

export default Home;
