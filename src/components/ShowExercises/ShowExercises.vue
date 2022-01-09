<template>
  <div>
    <h2>Exercises</h2>
    <base-button @click="loadExercises()">Load exercises</base-button>
  </div>
  <div>
    <div>
      <shown-exercise
        v-for="obj in getExerciseData"
        :key="obj.id"
        :id="obj.id"
        :date="obj.date"
        :time="obj.time"
        :sport="obj.sport"
        :distance="obj.distance"
        :duration="obj.duration"
        :feeling="obj.feeling"
        :notes="obj.notes"
      >
      </shown-exercise>
    </div>
    <div>
      <!-- <base-controls class="controls"> </base-controls> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ShownExercise from "./ShownExercise.vue";

export default {
  // mounted() {
  //   this.loadExercises();
  // },
  components: { ShownExercise },
  computed: {
    ...mapGetters(["getExerciseData"]),
    ...mapActions(["getExercises"]),
  },
  methods: {
    loadExercises() {
      this.getExercises();
    },
  },
};
</script>

<style scoped>
div {
  flex-grow: 100;
}
</style>
