const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const baseRouter = require("./routes/routes");
const PORT = 3001;
const db = "mongodb://localhost:27017/testEventDB";

const mongoUri = process.env.MONGO_URI

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", baseRouter);

mongoose
	.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Database is connected..."))
	.catch((error) => console.log(error));

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
