import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({ 
  categoriesMap: {},
  isLoading: true 
})

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCategoriesMap = async() => {
      setIsLoading(true)
      try {
        const categoryMap = await getCategoriesAndDocuments()
        setCategoriesMap(categoryMap)
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getCategoriesMap()
  }, [])

 
  const value = {categoriesMap, isLoading}
  return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}
