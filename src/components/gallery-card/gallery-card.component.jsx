import './gallery-card.styles.scss'
import { useState } from 'react'

const GalleryCard = ({ gallery }) => {
  const { name, contributor, imageUrl } = gallery
  
  // State variables for image loading/error handling
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isImageError, setIsImageError] = useState(false)

  // Event handler for successful image load
  const handleImageLoad = () => {
    setIsImageLoaded(true)
  };

  // Event handler for image load error
  const handleImageError = () => {
    setIsImageError(true)
  };

  return (
    <div className="gallery-card-container">
      <div className='image-container'>
        <img
          src={imageUrl}
          alt={`${name}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
      </div>
      {!isImageLoaded && !isImageError && ( 
      // If the image is not yet loaded (isImageLoaded is false), then render the 'Loading...' message."
      // checks if the image has not yet loaded and there is no error associated with the image.
        <h3>Loading...</h3>
      )}
      {isImageLoaded && !isImageError && ( 
      // Render footer when image is loaded successfully
      // checks if the image has successfully loaded without any errors.
        <div className="footer">
          <span>{name}</span>
          <span>
            Contributor:
            <a href={contributor} target='_blank' rel='noopener noreferrer'>
              {contributor}
            </a>
          </span>
        </div>
      )}
      {isImageError && ( 
        // Display an error message if the image fails to load
        <div>Failed to load image</div>
      )}
    </div>
  )
}

export default GalleryCard
