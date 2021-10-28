<template>
  <q-layout view="lhh Lpr lff">
    <!--    <q-header-->
    <!--      v-if="isAuthenticated"-->
    <!--      class="bg-white text-black q-px-md q-py-md"-->
    <!--    >-->
    <!--      <q-toolbar>-->
    <!--        <q-toolbar-title class="text-weight-bold"-->
    <!--          >Hallo, <br />-->
    <!--          {{ fullname }}</q-toolbar-title-->
    <!--        >-->
    <!--      </q-toolbar>-->
    <!--    </q-header>-->
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-black">
      <q-toolbar>
        <div class="text-caption" style="margin: auto">
          Copyright © 2021 - {{ new Date().getFullYear() }} Yoran van Driel
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, ref, onMounted } from "vue";
// import { useQuasar } from "quasar";
import axios from "axios";
import store from "./store";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    // const $q = useQuasar();
    // console.log($q.platform.is.desktop);
    onMounted(() => {
      if (store.getters.isAuthenticated) {
        store.dispatch("getShifts");
      }
    });

    return {
      leftDrawerOpen: ref(false),
      isAuthenticated: computed(() => {
        return store.getters.isAuthenticated;
      }),
    };
  },

  created: function () {
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        console.log("Rejected");
        // Do something with request error
        return Promise.reject(error);
      }
    );
    // ApiService.interceptors.request.use(undefined, function (err) {
    //   console.log("Hallo");
    //   // eslint-disable-next-line no-unused-vars
    //   return new Promise(function (resolve, reject) {
    //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //       // if you ever get an unauthorized, logout the user
    //       this.$store.dispatch("AUTH_LOGOUT");
    //       // you can also redirect to /login if needed !
    //     }
    //     throw err;
    //   });
    // });
  },
};
</script>
<style lang="sass"></style>
