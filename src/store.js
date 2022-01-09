import { createStore } from "vuex";
import axios from "axios";

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
    submitExercise(_, payload) {
      const data = payload;
      axios.post(process.env.VUE_APP_FIREBASE_URL, data);
    },
  },
  actions: {
    submitExercise(context, payload) {
      context.commit("submitExercise", payload);
    },
  },
});

export default store;
