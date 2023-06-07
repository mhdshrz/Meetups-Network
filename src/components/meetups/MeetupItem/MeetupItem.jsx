import { useContext } from "react";
import Card from "../../ui/Card/Card";
import FavoritesContext from "../../../store/favorites-context/favorites-context";

import styles from "./MeetupItem.module.css";

function MeetupItem(props) {
	const favoritesCntx = useContext(FavoritesContext);
	function handleToggleFavoriteStatus() {
		if (favoritesCntx.isFavorite(props.id)) {
			favoritesCntx.removeFavorite(props.id);
		} else {
			favoritesCntx.addFavorite({
				id: props.id,
				title: props.title,
				image: props.image,
				address: props.address,
				description: props.description,
			});
		}
	}

	return (
		<li className={styles.item}>
			<Card>
				<div className={styles.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={styles.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={styles.actions}>
					<button onClick={handleToggleFavoriteStatus}>
						{favoritesCntx.isFavorite(props.id)
							? "Remove from Favorites"
							: "Add to Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
