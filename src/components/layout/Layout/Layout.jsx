import MainNavigatation from "../MainNavigation/MainNavigation";

import styles from "./Layout.module.css";

function Layout(props) {
	return (
		<>
			<MainNavigatation />
			<main className={styles.main}>{props.children}</main>
		</>
	);
}

export default Layout;
