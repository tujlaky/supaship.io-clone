import "./App.css";
import { PostCard } from "./components/PostCard";
import usePosts from "./hooks/usePosts";

function App() {
	const [posts] = usePosts();

	return posts.map((post) => <PostCard />);
}

export default App;
