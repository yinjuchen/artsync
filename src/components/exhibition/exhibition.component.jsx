import { Fragment, useEffect, useState } from 'react';
import ExhibitionCardList from '../exhibition-card-list/exhibition-card-list.component'
import SearchBox from '../search-box/search-box.component'

const Exhibition = () => {
  const [searchField, setSearchField] = useState('')
  const [artworkers, setArtworkers] = useState([])
  const [filterredArtworkers, setFilterredArtWorkers] = useState(artworkers)
  const [isLoading, setIsLoading] = useState(true)
  
  // searaching for an artworker
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }
  // console.log('render')

  // Fetch API
  useEffect(() => {
    // Set isLoading to true when initiating the fetch
    setIsLoading(true)
    fetch('https://openaccess-api.clevelandart.org/api/artworks/?limit=6&indent=1&has_image=1')

      .then(res => res.json())
      .then(user => {
        setArtworkers(user.data)
        // Set isLoading to false after data is fetched
        setIsLoading(false)
        // console.log(user.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        // Set isLoading to false in case of error
        setIsLoading(false)
      })
  }, [])
  
  // filter artworker by name
  useEffect(() => {
    const newFilteredArtworkers = artworkers.filter((artworker) => {
      // use map() followed by some() for nested array
      if (artworker.creators) {
        const creatorNames = artworker.creators.map((creator) => creator.description)
        return creatorNames.some((creatorName) => creatorName.toLowerCase().includes(searchField))
      }
      return false
    })
    setFilterredArtWorkers(newFilteredArtworkers)
    // console.log('effect is fired')

  }, [artworkers, searchField])

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          <SearchBox
          onChangeHandler={onSearchChange}
          className='search-box'
          placeholder='search artist by name'
        />
        <ExhibitionCardList artworkers={filterredArtworkers} />
        </Fragment>
      )}
    </div>
  )
}

export default Exhibition