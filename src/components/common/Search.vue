<template>
  <div>
    <input type="search" @input="onInput" placeholder="Enter a search term" />
  </div>
</template>

<script>
export default {
  props: {
    onInput: Function
  }
};
</script>

<style  scoped>
div {
  display: block;
  width: 50%;
}

input {
  width: 100%;
  padding: 0.5rem 3rem;
  margin: auto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  outline: 0;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 8px 4px #0e0e0e;
  -webkit-appearance: textfield;
}
</style>