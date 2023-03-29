import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>Hello</h1>
			<button onClick={() => navigate("create")}>NEXT</button>
		</div>
	);
}

export default HomePage;