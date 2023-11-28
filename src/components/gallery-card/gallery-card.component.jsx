import './gallery-card.styles.scss'
const GalleryCard = ({gallery}) => {
  const {name, contributor, imageUrl} = gallery
  
 const handleContributorClick = () => {
  window.open(contributor, '_blank')
 }

  return(
    <div className="gallery-card-container">
      <div className='image-container'>
        <img src={imageUrl} alt=""/>
      </div>
      <div className="footer">
        <span>{name}</span>
          <span> Contributor:
           <a href={contributor} target='_blank' rel='noopener noreferrer'onClick={handleContributorClick}>
             {contributor}
           </a>
        </span>
      </div>
    </div>
  )
}

export default GalleryCard