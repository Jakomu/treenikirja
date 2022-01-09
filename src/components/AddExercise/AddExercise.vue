<template>
  <base-container>
    <form @submit.prevent="submitExerciseForm">
      <h2>Add exercise:</h2>
      <div>
        <label for="sport">Choose your sport: </label>
        <select name="sport" id="sport">
          <option value="">Choose sport</option>
          <option value="walk">walking</option>
          <option value="run">running</option>
          <option value="gym">gym</option>
          <option value="games">games</option>
          <option value="skiing">skiing</option>
          <option value="other">other</option>
        </select>
      </div>
      <div>
        <label for="date">Date: </label>
        <input type="date" name="date" id="date" />
      </div>
      <div>
        <label for="time">Time:</label>
        <input type="time" name="time" id="time" />
      </div>
      <div>
        <p>Add one or both:</p>
        <label for="distance">Distance (km): </label>
        <input type="number" name="distance" id="distance" />
        <br />
        <label for="duration">Duration (min): </label>
        <input type="number" name="duration" id="duration" />
      </div>
      <label for="feeling">Feeling:</label>
      <div class="feelings">
        <span>
          <label for="vgood"></label>
          <input type="radio" name="feeling" id="vgood" value="5" />
          <img src="" alt="5" />
        </span>
        <span>
          <label for="good"></label>
          <input type="radio" name="feeling" id="good" value="4" />
          <img src="" alt="4" />
        </span>
        <span>
          <label for="semi"></label>
          <input type="radio" name="feeling" id="semi" value="3" />
          <img src="" alt="3" />
        </span>
        <span>
          <label for="bad"></label>
          <input type="radio" name="feeling" id="bad" value="2" />
          <img src="" alt="2" />
        </span>
        <span>
          <label for="vbad"></label>
          <input type="radio" name="feeling" id="vbad" value="1" />
          <img src="" alt="1" />
        </span>
      </div>
      <div>
        <label for="notes">Notes:</label><br />
        <textarea name="notes" id="notes" cols="30" rows="3"></textarea>
      </div>
      <base-button>Add exercise</base-button>
    </form>
  </base-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    submitExerciseForm(event) {
      const data = event.target;
      if (
        data.sport.value == "" ||
        data.date.value == "" ||
        data.time.value == ""
      ) {
        alert("You must have at least sport, date and time selected!");
        return;
      }
      const payload = {
        sport: data.sport.value,
        date: data.date.value,
        time: data.time.value,
        distance: data.distance.value,
        duration: data.duration.value,
        feeling: data.feeling.value,
        notes: data.notes.value,
      };
      this.$store.commit("submitExercise", payload);
    },
    ...mapActions(["submitExercise"]),
  },
};
</script>

<style scoped>
div {
  margin: 0.25rem;
}
input {
  margin: 0.25rem;
}
span {
  display: flex;
  flex-direction: column;
}
.feelings {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
p {
  padding: 0.25rem;
}
</style>
