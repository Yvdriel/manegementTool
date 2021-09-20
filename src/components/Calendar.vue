<template>
  <q-card class="my-card q-mt-md" bordered>
    <q-card-section class="q-pt-xs">
      <div class="text-overline text-weight-bolder">Kalender</div>
      <v-calendar
          locale="nl"
          class="shadow-1 shadow-transition"
          :columns="$screens({ default: 1, lg: 2 })"
          :rows="$screens({ default: 2, lg: 2 })"
          :is-expanded="$screens({ default: true, lg: false })"
          :attributes="attrs"
          timezone="Europe/Amsterdam"
      ></v-calendar>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      attrs: [
        {
          key: 'today',
          highlight: {
            fillMode: "light",
          },
          dates: new Date(),
        },
        {
          bar: 'red',
          dates: [
            new Date(), // Jan 4th
            new Date(2021, 9, 4, 13, 40), // Jan 4th
            new Date(2021, 9, 10), // Jan 10th
            new Date(2021, 9, 15), // Jan 15th
          ],
          popover: {
            label: "Naar Prinsalbertlaan 15 \r\n \r\n 12:00 - 21:30",
            visibility: 'click'
          }
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>