import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../../store/favorites-context/favorites-context";

import logo from "./../../../assets/places-icon.png";
import styles from "./MainNavigation.module.css";

function MainNavigatation() {
	const favoritesCntx = useContext(FavoritesContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={logo} alt="Website Logo, Meetups Network" />
				<span>Meetups Network</span>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">New Meetup</Link>
					</li>
					<li>
						<Link to="favorites">
							My Favorites
							<span className={styles.badge}>{favoritesCntx.favoritesNo}</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigatation;
