<template>
  <div>
    <button :disabled="prevPage === null" @click="onClick(prevPage)">&lt;</button>
    <button :disabled="nextPage === null" @click="onClick(nextPage)">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "pager",
  props: {
    onClick: Function,
    prevPage: String,
    nextPage: String
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

button {
  font-size: 30px;
  padding: 0 6px 6px;
  outline: none;
  margin: 2px;
  display: flex;
  line-height: 1;
  border: 1px solid #0e0e0e;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  border-color: rgba(0, 0, 0, 0.1);
}
</style>