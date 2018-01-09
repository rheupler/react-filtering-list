import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import MovieList from './components/MovieList';
import Filters from './components/Filters';
import data from './data/data.json';

let genres = []
let years = []

function unique(arr) {
  return Array.from(new Set(arr))
}

data.media.map(item => {
  return genres.push(item.genre)
})

data.media.map(item => {
  return years.push(item.year)
})

let mergedGenres = [].concat.apply([], genres)
mergedGenres = unique(mergedGenres).sort()

let mergedYears = [].concat.apply([], years);
mergedYears = unique(years).sort();

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      joke: '',
      isLoading: true,
      filteredList: data.media,
      listAll: data.media,
      selectedRadio: null,
      searchTerm: '',
      genres: mergedGenres,
      years: mergedYears
    }
    this.updateJoke = this.updateJoke.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.clearFilters = this.clearFilters.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.handleGenreChange = this.handleGenreChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
  }

  componentWillMount() {
    fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({ joke: data.value.joke, isLoading: false })
      })
  }

  updateJoke() {
    fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({ joke: data.value.joke })
      })
  }

  handleTypeChange(e) {
    let typeChange = this.state.listAll.filter(movie => movie.type === e.target.value)
    this.setState({ filteredList: typeChange })
  }

  clearFilters(e) {
    e.preventDefault()
    this.setState({ filteredList: this.state.listAll, searchTerm: '' })
    Array.from(document.querySelectorAll('input')).map(item => item.checked = false)
    Array.from(document.querySelectorAll(".active")).map(item => item.classList.remove('active'))
  }

  onSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleGenreChange(e) {
    e.preventDefault()
    const filteredList = this.state.filteredList.filter(item => item.genre.includes(e.target.id))
    this.setState({ filteredList, filtered: e.target.id })
    if( e.target.classList.contains('active') ) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  }

  handleYearChange(e) {
    e.preventDefault()
    const filteredList = this.state.filteredList.filter(item => item.year === e.target.className)
    this.setState({ filteredList })
    if( e.target.classList.contains('active') ) {
      e.target.classList.remove('active')
    } else {
      e.target.classList.add('active')
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Quote
          joke={this.state.joke}
          updateJoke={this.updateJoke}
        />
        <Filters
          handleTypeChange={this.handleTypeChange}
          clearFilters={this.clearFilters}
          value={this.state.searchTerm}
          onChange={this.onSearchChange}
          list={this.state.filteredList}
          handleGenreChange={this.handleGenreChange}
          handleYearChange={this.handleYearChange}
          genres={this.state.genres}
          years={this.state.years}
        />
        <MovieList
          list={this.state.filteredList}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default App;
