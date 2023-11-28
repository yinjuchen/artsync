import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const galleries = [
    {
      id: 1,
      title: 'Sketch',
      imageUrl: 'https://i.ibb.co/fp0F1Jm/gallery-cover3.jpg',
      route: 'gallery/sketch',
    },
    {
      id: 2,
      title: 'Sculpture',
      imageUrl: 'https://i.ibb.co/4WVqP8H/gallery-cover2.jpg',
      route: 'gallery/sculpture',
    },
    {
      id: 3,
      title: 'Painting',
      imageUrl: 'https://i.ibb.co/k5HMyWf/gallery-cover1.jpg',
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
  );
};

export default Directory;
