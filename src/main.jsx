import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Index from "./Index.jsx";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);