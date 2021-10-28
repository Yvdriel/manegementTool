<template>
  <q-header class="bg-white text-black q-px-md q-pt-md">
    <q-toolbar>
      <q-toolbar-title class="text-weight-bold"
        >Dienst Overzicht</q-toolbar-title
      >
      <q-btn flat color="primary">Terug</q-btn>
    </q-toolbar>
  </q-header>
  <q-page class="q-pa-lg q-gutter-md">
    <div class="q-mb-lg">
      <q-separator></q-separator>

      <div class="text-subtitle1 q-mt-sm q-mb-xs">
        Prins Albertlaan 15, 2271 EK Voorburg
      </div>
      <div class="text-overline">
        <q-icon name="event" size="xs" />
        20 Sep 2021
        <q-space></q-space>
        <q-icon name="schedule" size="xs" />
        12:00 - 21:30
      </div>
      <div
        class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
      >
        <q-icon name="place" />
        250 km

        <q-space></q-space>

        <q-icon name="euro" />
        23,12-
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed, ref } from "vue";
import store from "../store";

export default {
  props: {
    tab: String,
  },
  name: "OpenShiftsCard",
  emits: ["update:tab"],
  setup() {
    return {
      leftDrawerOpen: ref(false),
      isAuthenticated: computed(() => {
        return store.getters.isAuthenticated;
      }),
      shifts: computed(() => {
        return store.getters.shifts;
      }),
    };
  },
  methods: {
    changeTab() {
      this.$emit("update:tab", "shifts");
    },
    lastThree() {
      let shifts = this.shifts;
      let newShifts = {};
      let iteration = 0;

      for (let key in shifts) {
        if (iteration === 3) {
          break;
        }

        newShifts[key] = shifts[key];
        iteration++;
      }

      return newShifts;
    },
  },
};
</script>

<style scoped></style>
