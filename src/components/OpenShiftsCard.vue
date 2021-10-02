<template>
  <q-card class="my-card q-mt-md" bordered>
    <q-card-section class="q-py-xs">
      <div class="text-overline text-weight-bolder">Open Diensten</div>

      <q-separator></q-separator>
    </q-card-section>
    <q-list>
      <q-item v-for="(obj, index) in lastThree()" :key="index" clickable v-ripple>
        <q-item-section>
          <q-item-label caption lines="2">
            {{ obj.project.street }} {{ obj.project.house_number }}
            {{ obj.project.house_number_extension }} {{ obj.project.postal_code }},
            {{ obj.project.city }}
<!--            Prins Albertlaan 15, 2271 EK Voorburg-->
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>
            <q-icon name="event" size="xs" />
            {{ obj.shift.date_formatted }}
            <q-space></q-space>
            <q-icon name="schedule" size="xs" />
            {{ obj.shift.time_start }} - {{ obj.shift.time_end }}
          </q-item-label>
        </q-item-section>
      </q-item>


<!--      <q-item clickable v-ripple>-->
<!--        <q-item-section>-->
<!--          <q-item-label caption lines="2">-->
<!--            Prins Albertlaan 15, 2271 EK Voorburg-->
<!--          </q-item-label>-->
<!--        </q-item-section>-->

<!--        <q-item-section side top>-->
<!--          <q-item-label caption>-->
<!--            <q-icon name="event" size="xs" />-->
<!--            20 Sep 2021-->
<!--            <q-space></q-space>-->
<!--            <q-icon name="schedule" size="xs" />-->
<!--            12:00 - 21:30-->
<!--          </q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
      <!--      <q-separator spaced inset />-->

      <!--      <q-item clickable v-ripple>-->
      <!--        <q-item-section>-->
      <!--          <q-item-label caption lines="2">-->
      <!--            Prins Albertlaan 15, 2271 EK Voorburg-->
      <!--          </q-item-label>-->
      <!--        </q-item-section>-->

      <!--        <q-item-section side top>-->
      <!--          <q-item-label caption>-->
      <!--            <q-icon name="event" size="xs" />-->
      <!--            20 Sep 2021-->
      <!--            <q-space></q-space>-->
      <!--            <q-icon name="schedule" size="xs" />-->
      <!--            12:00 - 21:30-->
      <!--          </q-item-label>-->
      <!--        </q-item-section>-->
      <!--      </q-item>-->

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
import {computed, ref} from "vue";
import store from "../store";

export default {
  props: {
    tab: String,
  },
  name: "OpenShiftsCard",
  emits: ["update:tab"],
  setup() {
    // const $q = useQuasar();
    // console.log($q.platform.is.desktop);
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

        newShifts[key] = shifts[key]
        iteration++;
      }

      return newShifts;
    },
  },
};
</script>

<style scoped></style>
