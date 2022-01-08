import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "./components/WelcomePage.vue";
import AddExercise from "./components/AddExercise/AddExercise.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/add", component: AddExercise },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
