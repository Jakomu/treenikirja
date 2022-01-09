import { createRouter, createWebHistory } from "vue-router";

import WelcomePage from "./components/WelcomePage.vue";
import AddExercise from "./components/AddExercise.vue";
import ShowExercises from "./components/ShowExercises/ShowExercises.vue";
// import ShownExercise from "./components/ShowExercises/ShownExercise.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: WelcomePage },
    { path: "/add", component: AddExercise },
    { path: "/exercises", component: ShowExercises },
    // { path: "/exercises/:page", component: ShownExercise },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
