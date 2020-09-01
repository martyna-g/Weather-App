import React from 'react';
import {fetchWeather} from '../actions/actions'

const SearchBar = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <div>
      <form>
        <input type="text" value="" placeholder="Enter city name" onChange={} />
        <button type="submit" onClick={}>Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
