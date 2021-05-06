import React, { Component, createRef } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';

const ulRef = createRef()

class InfoContainer extends Component {
	state = {};

	componentDidUpdate() {
		ulRef.current.scrollIntoView({behavior: "smooth"})
	}

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

				<div ref={ulRef}>
					{this.props.cast &&
						<Route
						path={`${this.props.match.path}/cast`}
						render={(props) => {
							return <Cast cast={this.props.cast }/>
						}}
						/>}
					
					{this.props.reviews &&
						<Route
						path={`${this.props.match.path}/reviews`}
						render={(props) => {
							return <Reviews reviews={ this.props.reviews }/>
						}}
						
						/>}
				</div>
			</>
		 );
	};
};
 
export default InfoContainer;