import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      sport: "",
      date: "",
      time: "",
      distance: 0,
      duration: 0,
      feeling: 0,
      notes: "",
    };
  },
  mutations: {
    submitExercise(payload) {
      console.log(payload);
    },
  },
  actions: {
    submitExercise(context, payload) {
      context.commit("submitExercise", payload);
    },
  },
});

export default store;
