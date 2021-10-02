import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import ApiService from "../plugins/axios";
import { LocalStorage } from 'quasar'
import axios from "axios";
// import shifts from "../store/modules/shifts.js";
import _ from "lodash";

const store = createStore({
  initialState: {
    token: localStorage.getItem("user-token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    state: "",
  },
  state: LocalStorage.getItem("state") || "",
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = "loading";
    },
    AUTH_SUCCESS: (state, {token, user}) => {
      console.log(user);
      console.log(token);
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    AUTH_LOGOUT: (state) => {
      localStorage.removeItem("user-token");
      state.status = "logged_out";
      state.token = "";
    },
    AUTH_ERROR: (state) => {
      state.status = "error";
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setShifts: (state, shifts) => {
      state.shifts = shifts;
    },
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        // const token = "yoranToken";
        // localStorage.setItem("user-token", token);
        // // you have your token, now log in your user :)
        // axios.defaults.headers.common["Authorization"] = token;
        // dispatch("USER_REQUEST");
        // resolve(token);
        // // The Promise used for router redirect in login
        // commit("AUTH_REQUEST");
        // return;
        // eslint-disable-next-line no-unreachable
        ApiService()
          .post("login", user)
          .then((resp) => {
            console.log(resp.data);
            const token = resp.data.token;
            const user = resp.data.user;
            // localStorage.setItem("user-token", token); // store the token in localstorage
            // localStorage.setItem("user", JSON.stringify(user)); // store the user in localstorage
            commit("AUTH_SUCCESS", {token, user});
            // you have your token, now log in your user :)
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            dispatch("USER_REQUEST");
            resolve(resp);
          })
          .catch((err) => {
            console.log(err);
            commit("AUTH_ERROR", err);
            localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
            reject(err);
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    AUTH_LOGOUT: ({ commit, dispatch }) => {
      console.log(axios.defaults.headers.common);
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        ApiService()
          .post("logout")
          .then(() => {
            console.log();
            commit("AUTH_LOGOUT");
            localStorage.removeItem("user-token");
            // remove the axios default header
            delete axios.defaults.headers.common["Authorization"];
            resolve();
          });
      });
    },
    getShifts: ({ commit, state }) => {
      console.log("HALLOOOOOO");
      // eslint-disable-next-line no-unused-vars
      ApiService()
          .get("shifts")
          .then((response) => {
            if (!_.isEqual(response.data, state.shifts)) {
              console.log(response.data);
              console.log(state.shifts);
              console.log("vers");
              commit("setShifts", response.data);
            }
          });
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
    user: (state) => state.user,
    shifts: (state) => state.shifts,
    token: (state) => state.token,
  },
  modules: {
  },
});

export default store;

store.subscribe((mutation, state) => {
  LocalStorage.set("state", state);
})
