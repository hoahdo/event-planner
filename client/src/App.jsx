import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreateEvent from "./CreateEvent";
import EventPosts from "./EventPosts";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreateEvent />} />
				<Route path="/create/events" element={<EventPosts />} />
			</Routes>
		</div>
	);
}

export default App;
