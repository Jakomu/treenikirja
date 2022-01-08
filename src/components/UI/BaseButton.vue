<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  padding: 10px 15px;
  background-color: #ff0202d8;
  color: #fff8ee;
  border-radius: 10px;
  margin: 0.5rem;
}
button:hover {
  background-color: #cc0000d8;
}
</style>
