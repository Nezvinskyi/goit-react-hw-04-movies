import { NavLink } from 'react-router-dom';

import styles from './Searchbar.module.scss'

const Searchbar = () => {
	return (
		<header className={styles.Searchbar}>
			<nav className={styles.NavigationList}>
				<ul>
					<li>
						<NavLink
							exact
							className={styles.NavigationListItem}
							activeClassName={styles.NavigationListItemActive}
							to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={styles.NavigationListItem}
							activeClassName={styles.NavigationListItemActive}
							to='/movies'>
							Movies
						</NavLink>
					</li>
				</ul>
				
				
			</nav>
		</header> );
}
 
export default Searchbar;