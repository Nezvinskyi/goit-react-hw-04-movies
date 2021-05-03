import React, { Component } from 'react';

class MoviesView extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <form action="">
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default MoviesView;
