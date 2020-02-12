import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './components/searchResults';
import { inject, observer } from 'mobx-react';
 
function App() {
  return (
    <div className="App">
        <SearchResults />
    </div>
  );
}

export default inject("searchStore")(observer(App));
