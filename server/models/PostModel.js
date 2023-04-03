const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	event: String,
	date: Date,
	description: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
