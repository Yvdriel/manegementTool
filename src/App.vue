<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated v-if="currentRouteName != 'Login'">
      <q-toolbar>
        <q-toolbar-title> Management Tool </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-black">
      <q-toolbar>
        <!--        <q-toolbar-title>-->
        <div class="text-caption" style="margin: auto">
          Copyright © 2021 - 2021 Yoran van Driel
        </div>
        <!--        </q-toolbar-title>-->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    const $q = useQuasar();
    console.log($q.platform.is.desktop);
    return {
      leftDrawerOpen: ref(false),
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="sass"></style>
