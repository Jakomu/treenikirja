<template>
  <nav>
    <div :class="{ active: welcomeActive }" @click="changeTab(1)">
      <p>Welcome</p>
    </div>
    <div :class="{ active: addActive }" @click="changeTab(2)">
      <p>Add exercise</p>
    </div>
    <div>
      <p>Exercises</p>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      welcomeActive: true,
      addActive: false,
    };
  },
  methods: {
    changeTab(tab) {
      if (tab == 1) {
        this.$router.push("/welcome");
        this.welcomeActive = true;
        this.addActive = false;
      } else if (tab == 2) {
        this.$router.push("/add");
        this.welcomeActive = false;
        this.addActive = true;
      }
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
