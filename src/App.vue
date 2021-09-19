<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white text-black q-px-md q-py-md">
      <q-toolbar>
        <div class="row justify-between">
          <q-toolbar-title class="col text-weight-bold">Hallo, <br> Tycho Prins</q-toolbar-title>
          <q-toolbar-title class="col-4 text-weight-bold">Hallo, <br> Tycho Prins</q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-black">
      <q-toolbar>
        <!--        <q-toolbar-title>-->
        <div class="text-caption" style="margin: auto">
          Copyright © 2021 - {{ new Date().getFullYear() }} Yoran van Driel
        </div>
        <!--        </q-toolbar-title>-->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
// import { useQuasar } from "quasar";
import axios from "axios";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    // const $q = useQuasar();
    // console.log($q.platform.is.desktop);
    return {
      leftDrawerOpen: ref(false),
    };
  },
  computed: {},

  created: function () {
    axios.interceptors.response.use(undefined, function (err) {
      // eslint-disable-next-line no-unused-vars
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch("AUTH_LOGOUT");
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
  },
};
</script>
<style lang="sass"></style>
