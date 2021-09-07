<template>
  <q-page class="q-pa-md q-gutter-md">
    <div class="text-h6 text-center q-mb-lg">Home</div>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    if (this.token === "") {
      this.$router.push({ path: "login" });
    }
    return {};
  },
  setup() {
    const $store = useStore();

    const token = computed({
      get: () => $store.state.token,
      set: (val) => {
        $store.commit("setToken", val);
      },
    });

    return {
      token,
    };
  },
};
</script>
<style lang="sass">
.login-wrapper
  width: 90%
  margin: auto
</style>
