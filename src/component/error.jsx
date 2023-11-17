/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();

	return (
		<>
			<h2>Ini Error</h2>
		</>
	);
}

export default ErrorPage;
