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
		const id = updatedPost._id;

		axios
			.put(`http://localhost:3001/update/${id}`, updatedPost)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		closeModal();
		window.location.reload();
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
		const wrongDateFormat = new Date(item.date);
		wrongDateFormat.setDate(wrongDateFormat.getDate() + 1);
		const date = wrongDateFormat.toLocaleDateString();

		return (
			<div key={item._id} className="event-posts-container">
				<div className="flex content-center">
					<h4 className="mr-auto text-xl">{item.event}</h4>
					<p className="ml-auto text-base">{date}</p>
				</div>
				<p className="text-md text-[#AEAEAE] text-left">
					{item.description}
				</p>
				<div className="flex flex-row gap-x-4 mt-auto">
					<button
						className="buttons grow bg-[#189AB4]"
						onClick={() => updatePostBtn(item)}
					>
						UPDATE
					</button>
					<button
						className="buttons grow bg-[#e7625f]"
						onClick={() => deleteEvent(item._id)}
					>
						DELETE
					</button>
				</div>
			</div>
		);
	});

	return (
		<div className="flex flex-col gap-y-8">
			<h1>Events Page</h1>
			<button className="buttons w-40 self-center" onClick={() => navigate(-1)}>
				BACK
			</button>
			<div className="event-posts-box">{Events}</div>
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
