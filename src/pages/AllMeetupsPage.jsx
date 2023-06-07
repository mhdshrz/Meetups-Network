import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupsList/MeetupsList";

function AllMeetupsPage() {
	const [loading, setLoading] = useState(true);
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
		fetch(
			"https://react-maxi-second-project-back-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetupsdata = [];
				for (let key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetupsdata.push(meetup);
				}

				setLoading(false);
				setMeetups(meetupsdata);
			});
	}, []);

	if (loading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupsList meetups={meetups} />
		</section>
	);
}

export default AllMeetupsPage;
