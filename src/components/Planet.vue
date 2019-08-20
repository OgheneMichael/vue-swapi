<template>
  <router-link :to="planetPath" class="planet">
    <div class="image-wrapper">
      <img src="../assets/planet-1.jpg" alt="photo" />
    </div>
    <div class="planet-detail">
      <h3>{{planet.name}}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["planet"],
  computed: {
    planetPath: function() {
      return `/planets/${this.planet.url.replace(/[^0-9]/g, "")}`;
    }
  }
};
</script>

<style scoped>
.planet {
  position: relative;
  display: block;
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(4, 4, 4, 0.5);
}

.image-wrapper {
  position: absolute;
  overflow: hidden;
  z-index: -1;
  height: 100%;
  width: 100%;
}

.planet:hover img {
  transform: scale(1.05);
}

img {
  position: absolute;
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.planet-detail {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
}

h3 {
  font-size: 32px;
  margin: 0;
  opacity: 0.8;
}
</style>