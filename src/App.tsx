import "./App.css";
import { PostCard } from "./components/PostCard";
import usePosts from "./hooks/usePosts";

function App() {
	const [posts] = usePosts();

	return (
		<>
			{posts.map((post) => (
				<PostCard post={post} />
			))}
		</>
	);
}

export default App;
