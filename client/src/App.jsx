import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreateEvent from "./CreateEvent";
import EventPosts from "./EventPosts";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/events" element={<EventPosts />} />
				<Route path="/events/create" element={<CreateEvent />} />
			</Routes>
		</div>
	);
}

export default App;
