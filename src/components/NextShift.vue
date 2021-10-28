<template>
  <q-card class="my-card" bordered>
    <q-card-section class="q-pt-xs">
      <div class="text-overline text-weight-bolder">Eerstvolgende Dienst</div>

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
    </q-card-section>
    <q-separator inset />
    <q-card-actions vertical>
      <q-btn flat color="primary" @click="goToShift()">Bekijken</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { computed } from "vue";
import store from "../store";

export default {
  name: "NextShift",
  setup() {
    return {
      nextShift: computed(() => {
        return store.getters.nextShift;
      }),
    };
  },
  methods: {
    goToShift() {
      // this.$router.push({ path: `/shift/${this.nextShift.id}` });
      this.$router.push({ path: `/shift/1` });
    },
  },
};
</script>

<style scoped></style>
