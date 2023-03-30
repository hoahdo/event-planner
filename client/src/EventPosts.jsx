import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";

function EventPosts() {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [posts, setPosts] = useState([]);
	const [updatedPost, setUpdatedPost] = useState({});

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

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const updatePostBtn = (item) => {
		setUpdatedPost(item);
		openModal();
	};

	const postEdit = (event) => {
		const { name, value } = event.target;
		setUpdatedPost((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const savePostEdit = () => {
		console.log(updatedPost);
        console.log(updatedPost._id);
        const id = updatedPost._id

		axios
			.put(`http://localhost:3001/update/${id}`, updatedPost)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		closeModal();
		window.location.reload()
	};

	const deleteEvent = (id) => {
		// console.log(id);

		axios
			.delete(`http://localhost:3001/delete/${id}`)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
		window.location.reload();
	};

	const Events = posts.map((item) => {
		return (
			<div key={item._id}>
				<h4>Event: {item.event}</h4>
				<p>Date: {item.date}</p>
				<p>Info: {item.description}</p>
				<button onClick={() => updatePostBtn(item)}>UPDATE</button>
				<button onClick={() => deleteEvent(item._id)}>DELETE</button>
			</div>
		);
	});

	return (
		<div className=" bg-orange-600 ">
			<h1>Events Page</h1>
			<button onClick={() => navigate(-1)}>BACK</button>
			{Events}
			<UpdateModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				updatedPost={updatedPost}
				postEdit={postEdit}
				savePostEdit={savePostEdit}
			/>
		</div>
	);
}

export default EventPosts;
