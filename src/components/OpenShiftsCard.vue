<template>
  <q-card class="my-card q-mt-md" bordered>
    <q-card-section class="q-py-xs">
      <div class="text-overline text-weight-bolder">Open Diensten</div>

      <q-separator></q-separator>
    </q-card-section>
    <q-list class="q-pt-xs">
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label caption lines="2">
            Prins Albertlaan 15, 2271 EK Voorburg
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            <q-icon name="event" size="xs" />
            20 Sep 2021
            <q-space></q-space>
            <q-icon name="schedule" size="xs" />
            12:00 - 21:30
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label caption lines="2">
            Prins Albertlaan 15, 2271 EK Voorburg
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            <q-icon name="event" size="xs" />
            20 Sep 2021
            <q-space></q-space>
            <q-icon name="schedule" size="xs" />
            12:00 - 21:30
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label caption lines="2">
            Prins Albertlaan 15, 2271 EK Voorburg
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            <q-icon name="event" size="xs" />
            20 Sep 2021
            <q-space></q-space>
            <q-icon name="schedule" size="xs" />
            12:00 - 21:30
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator inset />

      <q-item>
        <q-item-section>
          <q-btn
            push
            no-caps
            @click="changeTab()"
            color="primary"
            label="Alle diensten bekijken"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
export default {
  props: {
    tab: String,
  },
  name: "OpenShiftsCard",
  emits: ["update:tab"],
  methods: {
    changeTab() {
      this.$emit("update:tab", "shifts");
    },
  },
};
</script>

<style scoped></style>
