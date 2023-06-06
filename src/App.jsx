import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
	return (
		<>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<AllMeetupsPage />} />
				<Route path="/new-meetup" element={<NewMeetupPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</>
	);
}

export default App;
