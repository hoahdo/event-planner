import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

function EventPosts() {
    const apiUrl = import.meta.env.VITE_API_BASE_URL

	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [posts, setPosts] = useState([]);
	const [updatedPost, setUpdatedPost] = useState({});
	const deleteItemId = useRef("");

	useEffect(() => {
		console.log(posts);
		axios
			.get(`${apiUrl}/events`)
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const openDeleteConfirm = (id) => {
		deleteItemId.current = id;
		setDeleteOpen(true);
	};

	const closeDeleteConfirm = () => {
		setDeleteOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const updatePostBtn = (item) => {
        // const { _id, event, date, description } = item
        // const fixedDate = date.split("T")
		// setUpdatedPost(() => {
        //     return {
        //         _id: _id,
        //         event: event,
        //         date: fixedDate[0],
        //         description: description
        //     };
		// });
        setUpdatedPost(item)
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

	const deleteConfirm = () => {
		deleteEvent();
		closeDeleteConfirm();
	};

	const savePostEdit = () => {
		console.log(updatedPost);
		console.log(updatedPost._id);
		const id = updatedPost._id;

		axios
			.put(`${apiUrl}/update/${id}`, updatedPost)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		closeModal();
		window.location.reload();
	};

	const deleteEvent = () => {
		const id = deleteItemId.current;

		axios
			.delete(`${apiUrl}/delete/${id}`)
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
				<p className="text-md text-[#AEAEAE] text-left">{item.description}</p>
				<div className="flex flex-row mt-auto gap-x-4">
					<button
						className="buttons grow bg-[#189AB4]"
						onClick={() => updatePostBtn(item)}
					>
						UPDATE
					</button>
					<button
						className="buttons grow bg-[#e7625f]"
						onClick={() => openDeleteConfirm(item._id)}
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
			<button className="self-center w-40 buttons" onClick={() => navigate(-1)}>
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
			<DeleteModal
				deleteOpen={deleteOpen}
				closeDeleteConfirm={closeDeleteConfirm}
				deleteConfirm={deleteConfirm}
			/>
		</div>
	);
}

export default EventPosts;
