const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = "mongodb://localhost:27017/testEventDB";
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database is connected..."))
	.catch((error) => console.log(error));

const postSchema = mongoose.Schema({
	event: String,
	date: Date,
	description: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.send("Hello, express server here.");
});

app.post("/create", (req, res) => {
	// console.log(req.body);
	Post.create({
		event: req.body.event,
		date: req.body.date,
		description: req.body.description,
	})
		.then() //(doc) => console.log(doc)
		.catch((error) => console.log(error));
});

app.get("/events", (req, res) => {
	Post.find()
		.then((items) => res.json(items))
		.catch((error) => console.log(error));
});

app.delete("/delete/:id", (req, res) => {
	// console.log(req.params);
	Post.findByIdAndDelete({ _id: req.params.id })
		.then()
		.catch((error) => console.log(error));
});

app.put("/update/:id", (req, res) => {
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
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
