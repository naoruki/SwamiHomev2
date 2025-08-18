import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Index from "./Index.jsx";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/NavBar.css";
import "./styles/AboutUs.css"; // import the css file
import "./styles/ContactUs.css";
import "./styles/services.css"
import "./styles/Career.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);