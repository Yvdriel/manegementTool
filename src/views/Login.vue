<template>
  <q-card
    :flat="$q.platform.is.desktop"
    class="q-pa-lg items-center"
    :class="loginWrapper"
  >
    <q-form ref="loginForm" @submit.prevent="login" class="q-gutter-md">
      <div class="text-h5 text-center q-mb-xl q-mt-lg">Login</div>
      <q-input
        class="q-mt-md"
        v-model="email"
        outlined
        type="email"
        label="Email"
      />
      <q-input
        class="q-my-md"
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="row justify-end">
        <q-btn
          :loading="loading"
          push
          color="primary"
          text-color="white"
          label="Login"
          type="submit"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "Login",
  components: {},
  setup() {
    const $q = useQuasar();
    const loading = ref(false);

    let loginWrapper = ref("login-wrapper");
    // if ($q.platform.is.desktop) {
    //   loginWrapper = ref("login-wrapper-desktop");
    // }
    return {
      loading,
      platform: ref($q.platform.is),
      password: ref(""),
      isPwd: ref(true),
      email: ref(""),
      loginWrapper,
    };
  },
  methods: {
    login: function (e) {
      e.preventDefault();
      this.loading = true;

      //Call API to get Authentication Token based on login
      this.$store
        .dispatch("AUTH_REQUEST", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          console.log("yoranyoran");
          setTimeout(() => {
            this.$router.push("/");
          }, 5000);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style lang="sass">
.login-wrapper
  width: 90%
  margin: auto
  align-self: center
.login-wrapper-desktop
  min-width: 25%
  max-width: 400px
  margin-top: 60px
  margin-left: auto
  margin-right: auto
  background-color: #f9f9f9
</style>
