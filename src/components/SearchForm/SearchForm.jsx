import React, { Component } from 'react';

class SearchForm extends Component {
	state = {
		query: '',
	};
	
  handleChange = event => {
    this.setState({ query: event.currentTarget.value.trim() });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.query);
	}
	
	render() { 
		return (
			<form action="" onSubmit={this.handleSubmit} className='input-group mb-3'
			>
          <input
						className='form-control'
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" className='btn btn-primary'>Search</button>
			</form>
		);
	}
}
 
export default SearchForm;