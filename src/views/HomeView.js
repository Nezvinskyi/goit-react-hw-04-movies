import React, { Component } from 'react';
import api from '../services/movies-api';
import { NavLink } from 'react-router-dom';

class HomeView extends Component {
  state = {
    trending: [],
  };

  async componentDidMount() {
    const trending = await api.fetchMovies();
    this.setState({ trending });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {this.state.trending.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeView;
