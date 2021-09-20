<template>
  <q-card class="my-card" bordered>
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
  </q-card>
</template>

<script>
export default {
  name: "NextShift"
}
</script>

<style scoped>

</style>