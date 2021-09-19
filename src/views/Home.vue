<template>
  <q-page class="q-pa-lg q-gutter-md">
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
        <q-tab :ripple="false" name="overview" label="Overview" />
        <q-tab :ripple="false" name="productivity" label="Productivity" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="overview">
          <q-card class="my-card" bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline text-weight-bolder">Eerstvolgende Dienst</div>

                <q-separator></q-separator>

                <div class="text-subtitle1 q-mt-sm q-mb-xs">Prins Albertlaan 15, 2271 EK Voorburg</div>
                <div class="text-overline">
                  <q-icon name="schedule" size="xs"/>
                  12:00 - 21:30
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  <q-icon name="place" />
                  250 km

                  <q-space></q-space>

                  <q-icon name="euro" />
                  23,12-
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
          <q-card class="my-card q-mt-md" bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline text-weight-bolder">Kalender</div>

                <q-separator></q-separator>
                <v-calendar></v-calendar>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-tab-panel>

        <q-tab-panel name="productivity">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",
  components: {},
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
};
</script>
<style lang="sass">
.login-wrapper
  width: 90%
  margin: auto
.homeButton
  width: 100px!important
</style>
