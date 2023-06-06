import { Link } from "react-router-dom";

import logo from "./../../../assets/places-icon.png";

import styles from "./MainNavigation.module.css";

function MainNavigatation() {
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
						<Link to="favorites">My Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigatation;
