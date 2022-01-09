import { createStore } from "vuex";
import axios from "axios";
import router from "./router";

const store = createStore({
  state() {
    return {
      welcomeActive: true,
      addActive: false,
      exercisesActive: false,
      exerciseData: [],
      chosenPage: 1,
    };
  },
  getters: {
    getExerciseData(state) {
      return state.exerciseData;
    },
    getChosenPage(state) {
      return state.chosenPage;
    },
  },
  mutations: {
    submitExercise(_, payload) {
      const data = payload;
      axios.post(process.env.VUE_APP_FIREBASE_URL, data);
    },
    changeTab(state, payload) {
      if (payload == 1) {
        router.push("/welcome");
        state.welcomeActive = true;
        state.addActive = false;
        state.exercisesActive = false;
      } else if (payload == 2) {
        router.push("/add");
        state.welcomeActive = false;
        state.addActive = true;
        state.exercisesActive = false;
      } else if (payload == 3) {
        router.push("/exercises");
        state.welcomeActive = false;
        state.addActive = false;
        state.exercisesActive = true;
      }
    },
    getExercises(state) {
      axios.get(process.env.VUE_APP_FIREBASE_URL).then((res) => {
        if (res.statusText == "OK") {
          const data = res.data;
          state.exerciseData = [];
          for (const obj in data) {
            state.exerciseData.unshift({
              id: data[obj].id,
              sport: data[obj].sport,
              date: data[obj].date,
              time: data[obj].time,
              distance: data[obj].distance,
              duration: data[obj].duration,
              feeling: data[obj].feeling,
              notes: data[obj].notes,
            });
          }
        }
      });
    },
    // dynamicSort(property) {
    //   var sortOrder = 1;
    //   if (property[0] === "-") {
    //     sortOrder = -1;
    //     property = property.substr(1);
    //   }
    //   return function (a, b) {
    //     /* next line works with strings and numbers,
    //      * and you may want to customize it to your needs
    //      */
    //     var result =
    //       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    //     return result * sortOrder;
    //   };
    // },
    // sortExerciseData(x) {
    //   x.sort(this.dynamicSort("date"));
    // },
  },
  actions: {
    submitExercise(context, payload) {
      context.commit("submitExercise", payload);
    },
    changeTab(context, payload) {
      context.commit("changeTab", payload);
    },
    getExercises(context) {
      context.commit("getExercises");
    },
  },
});

export default store;
