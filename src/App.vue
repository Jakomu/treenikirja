<template>
  <the-header></the-header>
  <div class="flex">
    <aside>
      <navigation-tabs></navigation-tabs>
    </aside>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
  <the-footer class="footer"></the-footer>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import NavigationTabs from "./components/layout/NavigationTabs.vue";

export default {
  components: { TheHeader, TheFooter, NavigationTabs },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin: 0;
  background-color: #fff8ee;
}
.flex {
  display: flex;
  justify-content: center;
}
aside {
  flex-grow: 2;
  max-width: 200px;
}
.main {
  flex-grow: 8;
  max-width: 500px;
  margin-top: 50px;
}
</style>
