import React from "react";
import './search.styles.scss'
// When the user types in the search input field, it triggers the onChange event and
// calls the setSearchTerm function
// passing the value of the input field as an argument, 
// this updates the searchTerm in the parent component's state and
// the component filters the movies based on the updated searchTerm.
// This way the component always shows the filtered movies based on the search term
const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-container">
      <label>
        <input
          className="search-input"
          placeholder="search movies"
          type="search"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default SearchBar;
