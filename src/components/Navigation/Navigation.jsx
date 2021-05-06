import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
	return (
		<nav className='nav nav-pills'>
			<NavLink
				exact
				className="nav-link"
				activeClassName="active"
				to={routes.home}>
				Home
			</NavLink>
			<NavLink
				className="nav-link"
				activeClassName="active"
				to={routes.movies}>
				Movies
			</NavLink>
			<NavLink
				className="nav-link"
				activeClassName="active"
				to={routes.search}>
				Search
			</NavLink>
		</nav>
	);
};
 
export default Navigation;