import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import axios from "axios";
import VCalendar from 'v-calendar';

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VCalendar, {})
  .mount("#app");
