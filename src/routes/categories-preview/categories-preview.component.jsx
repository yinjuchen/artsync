import React, { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const { categoriesMap, isLoading } = useContext(CategoriesContext);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const galleries = categoriesMap[title];
          return <CategoryPreview key={title} title={title} galleries={galleries} />;
        })
  
      )}
   
    </Fragment>
  );
};

export default CategoriesPreview;
