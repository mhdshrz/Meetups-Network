import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm/NewMeetupForm";

function NewMeetupPage() {
	const navigate = useNavigate();

	function handleAddNewMeetup(meetup) {
		fetch(
			"https://react-maxi-second-project-back-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetup),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => navigate("/", { replace: true }));
	}

	return (
		<section>
			<h1>Add New Meetups</h1>
			<NewMeetupForm onAddNewMeetup={handleAddNewMeetup} />
		</section>
	);
}

export default NewMeetupPage;
