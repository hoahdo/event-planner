import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col gap-y-8">
			<h1>Event Planner</h1>
			<button className="buttons" onClick={() => navigate("events")}>
				VIEW EVENTS
			</button>
		</div>
	);
}

export default HomePage;
