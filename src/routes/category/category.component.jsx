import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import GalleryCard from "../../components/gallery-card/gallery-card.component";
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    // Check if the category exists in categoriesMap before setting galleries
    if (categoriesMap && categoriesMap[category]) {
      setGalleries(categoriesMap[category]);
  
    } else {
      // Handle category not found
      setGalleries([]);
    }
  }, [category, categoriesMap]);


  return (
 
    <div className="category-container">
      <h2 className="title">{category.toUpperCase()}</h2>
      {galleries && galleries.map((gallery) => <GalleryCard key={gallery.id} gallery={gallery} />)}
    </div>
  );
};

export default Category;
