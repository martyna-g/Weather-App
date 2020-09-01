import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import Results from '../conteiners/Results';
import Forecast from '../conteiners/Forecast';
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
