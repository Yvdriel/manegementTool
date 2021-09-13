import axios from "axios";

const ApiService = () =>
  axios.create({
    baseURL: "yourbaseUrl",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export default ApiService;
