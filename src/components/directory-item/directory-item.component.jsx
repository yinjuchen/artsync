import './directory-item.styles.scss'
import { useNavigate } from 'react-router-dom'

const DirectoryItem = ({gallery}) => {
  const {imageUrl, title, route} = gallery
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)
  return (
    <div className="directory-item-container"onClick={onNavigateHandler}>
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Explore</p>
      </div>
  </div>
  )
}

export default DirectoryItem