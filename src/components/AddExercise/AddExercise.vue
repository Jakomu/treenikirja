<template>
  <base-container>
    <form>
      <h2>Add exercise:</h2>
      <div>
        <label for="sport">Choose your sport: </label>
        <input type="text" name="sport" id="sport" />
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
        <label for="distance">Distance: </label>
        <input type="number" name="distance" id="distance" />
        <label for="duration">Duration: </label>
        <input type="number" name="duration" id="duration" />
      </div>
      <label for="feeling">Feeling:</label>
      <div class="feelings">
        <span>
          <label for="vgood"></label>
          <input type="radio" name="vgood" id="vgood" value="5" />
          <img src="" alt="5" />
        </span>
        <span>
          <label for="good"></label>
          <input type="radio" name="good" id="good" value="4" />
          <img src="" alt="4" />
        </span>
        <span>
          <label for="semi"></label>
          <input type="radio" name="semi" id="semi" value="3" />
          <img src="" alt="3" />
        </span>
        <span>
          <label for="bad"></label>
          <input type="radio" name="bad" id="bad" value="2" />
          <img src="" alt="2" />
        </span>
        <span>
          <label for="vbad"></label>
          <input type="radio" name="vbad" id="vbad" value="1" />
          <img src="" alt="1" />
        </span>
      </div>
      <base-button>Add exercise</base-button>
    </form>
  </base-container>
</template>

<style scoped>
div {
  margin: 0.5rem;
}
input {
  margin: 0.5rem;
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
</style>
