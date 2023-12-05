import './category-preview.styles.scss'
import GalleryCard from '../gallery-card/gallery-card.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({title, galleries}) => {
  return(
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}
</Link>
      </h2>
      <div className='preview'>
        {
          galleries
          .filter((_,idx) => idx < 1)
          .map((gallery) => (
            <GalleryCard key={gallery.id} gallery={gallery}/> 
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview

