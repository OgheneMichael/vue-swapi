<template>
  <div id="app">
    <h1>SWAPI</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

img {
  display: block;
  width: 100%;
  transition: all 0.3s ease;
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
