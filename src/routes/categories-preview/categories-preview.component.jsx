import React, { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext)
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => {
          const galleries = categoriesMap[title]
          return (
          <CategoryPreview key={title} title={title} galleries={galleries}/>
          )
        })
      }
    </Fragment>
  )
}


export default CategoriesPreview
