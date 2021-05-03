import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/movies-api';
import MovieContainer from '../components/MovieContainer';

class MovieDetailsView extends Component {
  state = {
    backdrop_path: null,
    id: null,
    original_title: null,
    vote_average: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const {
      backdrop_path,
      id,
      original_title,
      vote_average,
      overview,
      genres,
    } = await api.fetchById(movieId);
    this.setState({
      backdrop_path,
      id,
      original_title,
      vote_average,
      overview,
      genres,
    });
  }
  render() {
    const {
      backdrop_path,
      id,
      original_title,
      vote_average,
      overview,
      genres,
    } = this.state;
    return (
      <>
        <Link to="">Go back</Link>
        <h1>movie details</h1>
        <MovieContainer
          backdrop_path={backdrop_path}
          id={id}
          original_title={original_title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
      </>
    );
  }
}

export default MovieDetailsView;
