import { useRef } from "react";
import Card from "../../ui/Card/Card";

import styles from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function handleSubmit(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const eneterdDescription = descriptionInputRef.current.value;

		const meetup = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: eneterdDescription,
		};

		props.onAddNewMeetup(meetup);
	}

	return (
		<Card>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.control}>
					<label htmlFor="title">Meetup Title</label>
					<input id="title" type="text" required ref={titleInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor="image">Meetup Image</label>
					<input id="image" type="url" required ref={imageInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor="address">Meetup Address</label>
					<input id="address" type="text" required ref={addressInputRef} />
				</div>
				<div className={styles.control}>
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="5"
						required
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={styles.actions}>
					<button>Add</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
