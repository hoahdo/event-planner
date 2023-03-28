const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
	res.send("express is here");
});

app.listen(PORT, () => {
	console.log("server is running");
});
