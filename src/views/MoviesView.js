import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import api from '../services/movies-api';

class MoviesView extends Component {
  state = {
    SearchQuery: '',
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchQuery !== this.state.SearchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({ SearchQuery: query });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  fetchMovies = async () => {
    try {
      const movies = await api.searchMovies(this.state.SearchQuery);
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {this.state.movies.map(({ id, title, name }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title || name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesView;
