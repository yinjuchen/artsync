import './search-box.styles.scss';

const SearchBox = ({className,placeholder, onChangeHandler}) => {
  return (
    <input 
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchBox