import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const galleries = [
    {
      id: 1,
      title: 'Sketch',
      imageUrl: 'https://i.ibb.co/Wgb58ZX/sketch-cover.webp',
      route: 'gallery/sketch',
    },
    {
      id: 2,
      title: 'Sculpture',
      imageUrl: 'https://i.ibb.co/s1YVyng/sculpture-cover.webp',
      route: 'gallery/sculpture',
    },
    {
      id: 3,
      title: 'Painting',
      imageUrl: 'https://i.ibb.co/zR8hcSt/painting-cover.webp',
      route: 'gallery/painting',
    },
  ]

const Directory = () => {
  return (
    <div className="directory-container">
      {galleries.map((gallery, id) => (
          <DirectoryItem key={gallery.id }gallery={gallery} />
      ))}
    </div>
  )
}

export default Directory;
