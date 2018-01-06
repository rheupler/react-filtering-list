import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props.list)
  }


  render() {
    return(
      <div className="section-wrapper">
        <h1>hello</h1>
        <ul className="movie-list">
          {this.props.list.map((item, index) => (
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
