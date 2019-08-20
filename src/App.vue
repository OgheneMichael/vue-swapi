<template>
  <!-- <div id="app"> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
}

.btn {
  position: relative;
  display: inline-block;
  background: #d8d8d8;
  font-size: 15px;
  font-weight: 400;
  padding: 8px 15px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease;
  color: #0e0e0e;
  text-decoration: none;
}
</style>
