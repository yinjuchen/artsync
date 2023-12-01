import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const galleries = [
    {
      id: 1,
      title: 'Sketch',
      imageUrl: 'https://i.ibb.co/7Rr59Dd/sketch-4.jpg',
      route: 'gallery/sketch',
    },
    {
      id: 2,
      title: 'Sculpture',
      imageUrl: 'https://i.ibb.co/C7dg5cM/sculpture-cover.jpg',
      route: 'gallery/sculpture',
    },
    {
      id: 3,
      title: 'Painting',
      imageUrl: 'https://i.ibb.co/CnXVz3n/painting-cover.jpg',
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
