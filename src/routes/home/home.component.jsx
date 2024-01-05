import { Fragment } from 'react';
import Directory from '../../components/directory/directory.component'
import './home.styles.scss'

const Home = () => {
  return (
    <Fragment>
     <div className='home-image-container'>
        <div className='text-overlay'>
          <div className='home-quote'>“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein</div>
        </div>
      </div>
      <Directory />
    </Fragment>
  )
}

export default Home;
