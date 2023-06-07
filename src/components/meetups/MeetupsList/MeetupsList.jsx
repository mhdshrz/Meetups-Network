import MeetupItem from "../MeetupItem/MeetupItem";

import styles from "./MeetupsList.module.css";

function MeetupsList(props) {
	return (
		<ul className={styles.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					title={meetup.title}
					image={meetup.image}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default MeetupsList;
