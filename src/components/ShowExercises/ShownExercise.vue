<template>
  <div>
    <base-page>
      <div>
        <h3>{{ date }} {{ time }}</h3>
        <p>{{ sport }}</p>
        <p v-if="distance != '' || duration != ''">
          {{ distance }} {{ duration }}
        </p>
        <p>Feeling {{ feeling }} out of 5</p>
        <p>Notes: {{ notes }}</p>
      </div>
      <div>
        <p></p>
      </div>
    </base-page>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "date",
    "time",
    "sport",
    "duration",
    "distance",
    "feeling",
    "notes",
  ],
};
</script>

<style scoped>
.controls {
  align-self: flex-end;
}
h3 {
  padding: 1rem;
  margin: 0;
}
p {
  padding: 0.5rem;
  margin-left: 1rem;
}
</style>
