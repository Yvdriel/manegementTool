import { createStore } from "vuex";
import ApiService from "../plugins/axios";
import axios from "axios";

export default createStore({
  state: {
    token: localStorage.getItem("user-token") || "",
    state: "",
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = "loading";
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.status = "error";
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        const token = "yoranToken";
        localStorage.setItem("user-token", token);
        // you have your token, now log in your user :)
        axios.defaults.headers.common["Authorization"] = token;
        dispatch("USER_REQUEST");
        resolve(token);
        // The Promise used for router redirect in login
        commit("AUTH_REQUEST");
        return;
        // eslint-disable-next-line no-unreachable
        ApiService()
          .post("auth", user)
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem("user-token", token); // store the token in localstorage
            commit("AUTH_SUCCESS", token);
            // you have your token, now log in your user :)
            axios.defaults.headers.common["Authorization"] = token;
            dispatch("USER_REQUEST");
            resolve(resp);
          })
          .catch((err) => {
            commit("AUTH_ERROR", err);
            localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
            reject(err);
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    AUTH_LOGOUT: ({commit, dispatch}) => {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        commit("AUTH_LOGOUT");
        localStorage.removeItem('user-token')
        // remove the axios default header
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
    token(state) {
      return state.token;
    },
  },
  modules: {},
});
