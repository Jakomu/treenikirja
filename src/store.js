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
    submitExercise(state, payload) {
      state.sport = payload.sport;
      state.date = payload.date;
      state.time = payload.time;
      state.distance = payload.distance;
      state.duration = payload.duration;
      state.feeling = payload.feeling;
      state.notes = payload.notes;
    },
  },
  actions: {
    submitExercise(context, payload) {
      context.commit("submitExercise", payload);
    },
  },
});

export default store;
