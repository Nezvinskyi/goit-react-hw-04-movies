import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../Cast';

class InfoContainer extends Component {
	state = {  }
	render() {
		return (
			<>
				<h3>Additional info</h3>
				<ul>
					<li>
						<NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
					</li>
					<li>
						<NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
					</li>
				</ul>

				{this.props.cast &&
					<Route
					path={`${this.props.match.path}/cast`}
					render={(props) => {
						return <Cast cast={this.props.cast }/>
					}}
					/>}
			</>
		 );
	}
}
 
export default InfoContainer;