const express = require("express");
const router = express.Router();

const {
	getEventPosts,
	createEventPosts,
	deleteEventPosts,
	updateEventPosts,
} = require("../controllers/posts");

// Home route
router.get("/", (req, res) => {
	res.send("Hello, express server here.");
});

// Fetch event items from DB
router.get("/events", getEventPosts);

// Create event item and save to DB
router.post("/create", createEventPosts);

// Delete event item by id from DB
router.delete("/delete/:id", deleteEventPosts);

// Update an event item by id in DB
router.put("/update/:id", updateEventPosts);

module.exports = router;
