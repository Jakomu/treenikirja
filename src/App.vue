<template>
  <the-header></the-header>

  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

body {
  margin: 0;
}
</style>
