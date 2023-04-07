const Post = require("../models/PostModel");

const getEventPosts = async (req, res) => {
	try {
		const data = await Post.find();
		res.json(data);
	} catch (error) {
		console.log(error);
	}
};

const createEventPosts = async (req, res) => {
	try {
		await Post.create({
			event: req.body.event,
			date: req.body.date,
			description: req.body.description,
		});
		res.send("Event was created.");
	} catch (error) {
		console.log(error);
	}
};

const deleteEventPosts = async (req, res) => {
	try {
		await Post.findByIdAndDelete({ _id: req.params.id });
		res.send("Event was deleted.");
	} catch (error) {
		console.log(error);
	}
};

const updateEventPosts = (req, res) => {
	try {
		Post.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				event: req.body.event,
				date: req.body.date,
				description: req.body.description,
			}
		);
		res.send("Event was updated.");
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getEventPosts,
	createEventPosts,
	deleteEventPosts,
	updateEventPosts,
};
