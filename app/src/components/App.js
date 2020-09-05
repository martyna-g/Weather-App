import React, { Fragment } from 'react';
import SearchBar from '../containers/SearchBar';
import Results from '../containers/Results';
import Forecast from '../containers/Forecast';
import '../App.css';

function App() {
  return (
    <Fragment>
      <SearchBar />
      <Results />
      <Forecast />
    </Fragment>
  );
}

export default App;
