import { createContext, useState } from "react";

const FavoritesContext = createContext({
	favorites: [],
	favoritesNo: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupID) => {},
	isFavorite: (meetupID) => {},
});

export function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([]);

	function handleAddFavorites(favoriteMeetup) {
		setUserFavorites((previous) => {
			return previous.concat(favoriteMeetup);
		});
	}
	function handleRemoveFavorites(meetupID) {
		setUserFavorites((previous) => {
			return previous.filter((meetup) => meetup.id !== meetupID);
		});
	}
	function itemIsFavorite(meetupID) {
		return userFavorites.some((meetup) => meetup.id === meetupID);
	}

	const context = {
		favorites: userFavorites,
		favoritesNo: userFavorites.length,
		addFavorite: handleAddFavorites,
		removeFavorite: handleRemoveFavorites,
		isFavorite: itemIsFavorite,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
