import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { LoginButton } from "./components/LoginButton";
import { Modal } from "./components/Modal";
import supabase from "./utils/supabase";

import {
	Auth,
	// Import predefined theme
	ThemeSupa,
} from "@supabase/auth-ui-react";

function App() {
	const [count, setCount] = useState(0);
	const [showLogin, setShowLogin] = useState(false);

	const login = () => {
		console.log("LOGIN");
		setShowLogin(true);
	};

	return (
		<>
			<Modal onClose={() => setShowLogin(false)} title="Login" show={showLogin}>
				<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
			</Modal>
			<div className="app">
				<Navbar>
					<LoginButton onClick={login}>Login</LoginButton>
				</Navbar>

				<div
					className="flex flex-col items-center min-h-screen space-y-2 py-6
        "
				>
					<Card className="w-full max-w-xl">
						<h1>Works</h1>
					</Card>
				</div>
			</div>
		</>
	);
}

export default App;
