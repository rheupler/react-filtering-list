import React from 'react';
import './Filters.css';

const Filters = (props) => (
  <div className="filters section-wrapper">
    <div className="section-header">
      <h1>Exercise 3 - Filterable Content</h1>
    </div>

    <div className="dropdown-container">
      <div className="dropdowns">
        <div className="dropdown">
          <button className="dropbtn">Genre
          </button>
          <div className="dropdown-content">
            {props.genres.map((genre, index) => (
              <a href="" key={index} id={genre} onClick={props.handleGenreChange}>{genre}</a>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Year
          </button>
          <div className="dropdown-content">
            {props.years.map((year, index) => (
              <a key={index} href="" className={year} onClick={props.handleYearChange}>{year}</a>
            ))}
          </div>
        </div>
      </div>

      <form className="search-bar">
        <input
        type="text"
        placeholder="Search by title..."
        value={props.value}
        onChange={props.onChange}
        />
      </form>

    </div>

    <div className="filter-type">

      <form id="list-form">

        <div className="radios-container">
    			<label className="radio-container">Movies
    			  <input type="radio" name="radio" value="movie" onClick={props.handleTypeChange}/>
    			  <span className="checkmark"></span>
    			</label>
    			<label className="radio-container">Books
    			  <input type="radio" name="radio" value="book" onClick={props.handleTypeChange}/>
    			  <span className="checkmark"></span>
    			</label>
        </div>

  			<div>
  				<a href="" id="clear-filters" type="submit" onClick={props.clearFilters}>CLEAR FILTERS</a>
  			</div>
      </form>

		</div>
  </div>
)

export default Filters;
