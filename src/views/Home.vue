<template>
  <q-page
      class="q-pa-lg q-gutter-md"
  >
    <div class="q-mb-lg">
      <q-tabs
          v-model="tab"
          no-caps
          dense
          indicator-color="primary"
          active-color="black"
          class="text-grey-5"
          align="justify"
      >
        <q-tab :ripple="false" name="overview" label="Overzicht" />
        <q-tab :ripple="false" name="productivity" label="Productiviteit" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="overview">
          <NextShift />
          <Calendar />
        </q-tab-panel>

        <q-tab-panel name="productivity">
          <WorkedHours/>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import Calendar from "../components/Calendar";
import NextShift from "../components/NextShift";
import WorkedHours from "../components/WorkedHours";

export default {
  name: "Login",
  components: {
    WorkedHours,
    NextShift,
    Calendar
  },
  data() {
    if (this.token === "") {
      this.$router.push({ path: "login" });
    }
    return {
      tab: ref('overview'),
    };
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
  methods: {
    swipePage(obj) {
      switch (obj.direction) {
        case 'right':
          this.tab = "overview";
          break;
        case 'left':
          this.tab = "productivity";
          break;
        default:
          return;
      }
    }
  }
};
</script>
<style lang="sass">
.login-wrapper
  width: 90%
  margin: auto
.homeButton
  width: 100px!important
</style>
