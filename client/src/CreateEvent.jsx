import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateEvent() {
	const navigate = useNavigate();
	const [post, setPost] = useState({
		event: "",
		date: "",
		description: "",
	});

	const textInputChange = (event) => {
		const { name, value } = event.target;
		setPost((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
    };
    
	const dateInputChange = (event) => {
        const { name, value } = event.target;
		setPost((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const createEvent = (event) => {
		event.preventDefault();
		axios
            .post("http://localhost:3001/create", post)
            .then((res)=> console.log(res))
            .catch((error) => console.log(error));

		navigate("events");
    };


	return (
		<div>
			<h1 className="">Create Event</h1>
			<form>
				<input
					type="text"
					name="event"
					value={post.event}
					placeholder="Event"
					onChange={textInputChange}
				/>
				<input
					type="date"
					name="date"
					value={post.date}
					onChange={dateInputChange}
				/>
				<input
					type="text"
					name="description"
					value={post.description}
					placeholder="Description"
					onChange={textInputChange}
				/>
				<button type="submit" onClick={createEvent}>
					Create Event
				</button>
			</form>
			<button onClick={() => navigate("/")}>BACK</button>
		</div>
	);
}

export default CreateEvent;
