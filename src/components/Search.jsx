import React from 'react';
import './Search.css';

const Search = ({ className = '' }) => {
  return (
    <div className={`sidebar_search_contain ${className}`}>
      <div className="search_container">
        <span className="search_icon">&#9906;</span>
        <input
          type="search"
          placeholder="поиск"
          className="search_input"
        />
      </div>
    </div>
  );
};

export default Search;