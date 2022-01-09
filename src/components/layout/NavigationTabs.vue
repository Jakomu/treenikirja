<template>
  <nav>
    <div
      :class="{ active: this.$store.state.welcomeActive }"
      @click="chooseTab(1)"
    >
      <p>Welcome</p>
    </div>
    <div :class="{ active: this.$store.state.addActive }" @click="chooseTab(2)">
      <p>Add exercise</p>
    </div>
    <div
      :class="{ active: this.$store.state.exercisesActive }"
      @click="chooseTab(3)"
    >
      <p>Exercises</p>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["changeTab"]),
    chooseTab(tab) {
      this.$store.commit("changeTab", tab);
    },
  },
};
</script>

<style scoped>
div {
  width: 150px;
  margin: 2px;
  background-color: #ff0202d8;
  border-style: solid;
  border-radius: 2px;
  border-width: 1px;
  box-shadow: black;
  box-shadow: 1px 1px 5px;
}
div:hover {
  background-color: #cc0000d8;
}
.active {
  background-color: #cc0000d8;
  transform: translateX(10px);
  transition-duration: 1s;
}
nav {
  margin-right: 0.5rem;
  margin-top: 1.5rem;
}
</style>
