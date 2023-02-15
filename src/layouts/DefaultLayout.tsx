import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoginButton } from "../components/LoginButton";
import { Modal } from "../components/Modal";
import supabase from "../utils/supabase";

import {
	Auth,
	// Import predefined theme
	ThemeSupa,
} from "@supabase/auth-ui-react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
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
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default DefaultLayout;
