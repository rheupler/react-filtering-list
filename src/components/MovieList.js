import React, { Component } from 'react';
import './MovieList.css';

function isSearched(searchTerm) {
  return (item => {
    if ( item.title ) {
      return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })
}

class MovieList extends Component {

  render() {
    return(
      <div className="section-wrapper">
        <ul className="movie-list">
          {this.props.list.filter(isSearched(this.props.searchTerm))
                          .map((item, index) => (
            <li key={index} className="movie-container">
              <img className="movie-image" src={item.poster} alt="Movie Poster"/>
              <span>{item.title}</span>
              <span>{item.year}</span>
              <span className="genre">{item.genre.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MovieList;
