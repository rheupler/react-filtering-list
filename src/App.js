import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import MovieList from './components/MovieList';
import Filters from './components/Filters';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      joke: '',
      isLoading: true,
      filteredList: data.media,
      listAll: data.media,
      selectedRadio: null
    }
    this.updateJoke = this.updateJoke.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.clearFilters = this.clearFilters.bind(this)
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
    this.setState({ filteredList: this.state.listAll })
    Array.from(document.querySelectorAll('input')).map(item => item.checked = false)
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
        />
        <MovieList
          list={this.state.filteredList}
        />
      </div>
    );
  }
}

export default App;
