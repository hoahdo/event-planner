import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient from "./apis/apiClient";

function CreateEvent() {
	const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

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

	const createEvent = async (event) => {
		try {
			event.preventDefault();
			await axiosClient.post(`/create`, post);
			navigate("events");
		} catch (error) {
			console.log(error);
		}
	};
	// const createEvent = (event) => {
	// 	event.preventDefault();
	// 	axios
	// 		.post(`${apiUrl}/create`, post)
	// 		.then((res) => {
	// 			// console.log(res);
	// 		})
	// 		.catch((error) => console.log(error));

	// 	navigate("events");
	// };

	return (
		<div className="flex flex-col gap-y-8">
			<h1>Create Event</h1>
			<form className="form-container">
				<input
					className="input-fields"
					type="text"
					name="event"
					value={post.event}
					placeholder="Event"
					onChange={textInputChange}
				/>
				<input
					className="input-fields"
					type="date"
					name="date"
					value={post.date}
					onChange={dateInputChange}
				/>
				<input
					className="input-fields"
					type="text"
					name="description"
					value={post.description}
					placeholder="Description"
					onChange={textInputChange}
				/>
			</form>
			<div className="flex flex-row">
				<button className="buttons bg-[#1D741B]" onClick={createEvent}>
					CREATE EVENT
				</button>
				<button className="buttons" onClick={() => navigate("events")}>
					VIEW EVENTS
				</button>
			</div>
		</div>
	);
}

export default CreateEvent;
