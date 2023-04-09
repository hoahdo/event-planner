import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import * as EventsApi from "./apis/lib/events";

function EventPosts() {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);
	const [posts, setPosts] = useState([]);
	const [updatedPost, setUpdatedPost] = useState({});
	const deleteItemId = useRef("");

	useEffect(() => {
		fetchEvents();
	}, []);

	async function fetchEvents() {
		try {
			const res = await EventsApi.getEvents();
			const data = res.data;
			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	}

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

	const deleteConfirm = async () => {
		await deleteEvent();
		closeDeleteConfirm();
	};

	const savePostEdit = async () => {
		const id = updatedPost._id;
		try {
			await EventsApi.updateEvents(id, updatedPost);
			await fetchEvents();
			closeModal();
		} catch (error) {
			console.log(error);
		}
	};

	const deleteEvent = async () => {
		const id = deleteItemId.current;
		try {
			await EventsApi.deleteEvents(id);
			await fetchEvents();
		} catch (error) {
			console.log(error);
		}
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
