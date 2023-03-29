import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventPosts() {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(posts);
		axios
			.get("http://localhost:3001/events")
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

    const updateEvent = (item) => {
        const {event, date, description } = item

	};

	const deleteEvent = (id) => {
		// console.log(id);

		axios
			.delete(`http://localhost:3001/delete/${id}`)
			.then((res) => console.log(res))
            .catch((error) => console.log(error));
        window.location.reload()
	};



	const Events = posts.map((item) => {
		return (
			<div key={item._id}>
				<h4>Event: {item.event}</h4>
				<p>Date: {item.date}</p>
				<p>Info: {item.description}</p>
				<button onClick={() => updateEvent(item)}>UPDATE</button>
				<button onClick={() => deleteEvent(item._id)}>DELETE</button>
			</div>
		);
	});

	return (
		<div className=" bg-orange-600 ">
			<h1>Events Page</h1>
			{Events}
			<button onClick={() => navigate(-1)}>BACK</button>
		</div>
	);
}

export default EventPosts;
