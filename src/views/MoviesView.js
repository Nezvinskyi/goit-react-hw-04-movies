import React, { Component } from 'react';
import api from '../services/movies-api';

import MoviesList from '../components/MoviesList';

class MoviesView extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    const trending = await api.fetchMovies();
    this.setState({ trending });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Trending today</h1>
        <MoviesList movies={this.state.trending} />
      </div>
    );
  }
}

export default MoviesView;
