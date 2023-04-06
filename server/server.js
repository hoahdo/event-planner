require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const baseRouter = require("./routes/routes");
const port = process.env.PORT || 3000;
let mongoUri;
let svrLoc;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", baseRouter);

if (process.env.CLOUD_DB) {
	mongoUri = process.env.CLOUD_DB;
	svrLoc = "CLOUD";
} else {
	mongoUri = "mongodb://localhost:27017/testEventDB";
	svrLoc = "LOCAL";
}
mongoose
	.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log(`Database connected on ${svrLoc} server...`);
		app.listen(port);
		console.log(`Server listening on port ${port}...`);
	})
	.catch((error) => console.log(error));
