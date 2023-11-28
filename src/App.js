import Home from './routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Exhibition from './components/exhibition/exhibition.component';
import Navigation from './routes/navigation/navigation.component';
import Gallery from './routes/gallery/gallery.component';
import Quote from './routes/quote/quote.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='exhibition' element={<Exhibition />} />
        <Route path='gallery/*' element={<Gallery />} />
        <Route path='quote' element={<Quote />} />
      </Route>
    </Routes>
  )
}

export default App
