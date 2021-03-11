import axios from "axios";

const instance = axios.create({
	baseURL: "http://127.0.0.1:80/api/",
	headers: {
		"Content-type": "application/json",
	},
});

export default instance;
