import axios from "axios";
import store from "../store/index";

const ApiService = () =>
  axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.getters.token}` || "",
    },
  });

export default ApiService;
