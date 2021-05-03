import { NavLink } from 'react-router-dom';

import styles from './AppBar.module.scss'

const AppBar = () => {
	return (
		<header className={styles.AppBar}>
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
 
export default AppBar;