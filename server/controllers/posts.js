const Post = require("../models/PostModel");

const getEventPosts = (req, res) => {
	Post.find()
		.then((items) => res.json(items))
		.catch((error) => console.log(error));
};

const createEventPosts = (req, res) => {
	// console.log(req.body);
	Post.create({
		event: req.body.event,
		date: req.body.date,
		description: req.body.description,
	})
		.then() //(doc) => console.log(doc)
		.catch((error) => console.log(error));
};

const deleteEventPosts = (req, res) => {
	// console.log(req.params);
	Post.findByIdAndDelete({ _id: req.params.id })
		.then()
		.catch((error) => console.log(error));
};

const updateEventPosts = (req, res) => {
	console.log(req.params);
	console.log(req.body);
	Post.findByIdAndUpdate(
		{ _id: req.params.id },
		{
			event: req.body.event,
			date: req.body.date,
			description: req.body.description,
		}
	)
		.then()
		.catch();
};

module.exports = {
	getEventPosts,
	createEventPosts,
	deleteEventPosts,
	updateEventPosts,
};
