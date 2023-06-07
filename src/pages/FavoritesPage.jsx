import { useContext } from "react";
import FavoritesContext from "../store/favorites-context/favorites-context";
import MeetupsList from "../components/meetups/MeetupsList/MeetupsList";

function FavoritesPage() {
	const favortiesCntx = useContext(FavoritesContext);

	let content;
	if (favortiesCntx.favoritesNo === 0)
		content = <p>Favorites list is empty.</p>;
	else content = <MeetupsList meetups={favortiesCntx.favorites} />;

	return (
		<section>
			<h1>Favorites</h1>
			{content}
		</section>
	);
}

export default FavoritesPage;
