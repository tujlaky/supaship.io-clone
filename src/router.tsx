import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DefaultLayout from "./layouts/DefaultLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);

export default router;
