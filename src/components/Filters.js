import React, { Component } from 'react';
import './Filters.css';

const Filters = (props) => (
  <div className="filters section-wrapper">
    <div className="section-header">
      <h1>Exercise 3 - Filterable Content</h1>
    </div>
    <div className="dropdown">
      <button className="dropbtn">Genre
      </button>
      <div className="dropdown-content">
        <a href="#">Action</a>
        <a href="#">Adventure</a>
        <a href="#">Comedy</a>
      </div>
    </div>

    <div className="dropdown">
      <button className="dropbtn">Year
      </button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>

    <div className="filter-type">

      <form id="list-form">
  			<label className="radio-container">Movies
  			  <input type="radio" name="radio" value="movie" onClick={props.handleTypeChange}/>
  			  <span className="checkmark"></span>
  			</label>
  			<label className="radio-container">Books
  			  <input type="radio" name="radio" value="book" onClick={props.handleTypeChange}/>
  			  <span className="checkmark"></span>
  			</label>
  			<div>
  				<a href="" id="clear-filters" type="submit" onClick={props.clearFilters}>CLEAR FILTERS</a>
  			</div>
      </form>

		</div>
  </div>
)

export default Filters;
