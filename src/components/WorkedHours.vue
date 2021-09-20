<template>
  <q-card class="my-card" bordered>
    <q-card-section class="q-pt-xs">
      <div class="text-overline text-weight-bolder">Gewerkte Uren - Afgelopen Week</div>

      <q-separator></q-separator>
      <div class="text-overline items-center no-wrap">
        <q-icon name="history" size="xs"/>
        {{ totalWorkingHours }}

        <q-space></q-space>

        <q-icon name="euro_symbol" size="xs"/>
        {{ totalMoney }}

      </div>
      <div class="col-auto text-grey text-caption row no-wrap items-center">
        <q-icon name="euro" />
        11,12- excl. tarieven
      </div>
      <q-table
          grid
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
      >
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Datum',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: false
  },
  { name: 'beginTijd', align: 'left', label: 'Ingevoerde Begin Tijd', field: 'startTime', sortable: false },
  { name: 'eindTijd', label: 'Ingevoerde Eind Tijd', field: 'endTime', sortable: false },
  { name: 'overuren', label: 'Overuren', field: 'overtime' },
];

const rows = [
      {
        name: '11-09-2021',
        startTime: '12:30',
        endTime: '21:30',
        overtime: '1:00',
      },
      {
        name: '12-09-2021',
        startTime: '12:30',
        endTime: '21:30',
        overtime: '1:00',
      },

];
export default {
  name: "WorkedHours",
  setup () {
    return {
      filter: ref(''),
      rows,
      columns,
      totalWorkingHours: ref('18:00'),
      totalMoney: ref('201,78'),
    }
  },
}
</script>

<style scoped>

</style>