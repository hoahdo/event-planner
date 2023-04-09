import axiosClient from "../apiClient";

const postEvents = (eventPost) => {
	return axiosClient.post(`/create`, eventPost);
};

const getEvents = () => {
	return axiosClient.get(`/events`);
};

const updateEvents = (id, eventPost) => {
	return axiosClient.put(`/update/${id}`, eventPost);
};

const deleteEvents = (id) => {
	return axiosClient.delete(`/delete/${id}`);
};

export { postEvents, getEvents, updateEvents, deleteEvents };
