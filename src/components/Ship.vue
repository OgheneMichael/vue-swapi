<template>
  <article>
    <div class="image-wrapper">
      <img src="../assets/starship-2.jpg" alt="photo" />
    </div>
    <div>
      <h3>{{ship.name}}</h3>
      <p>{{ ship.manufacturer }}</p>
      <router-link to="/ship" class="btn">Read more</router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ["ship"]
};
</script>

<style  scoped>
article {
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: -6px 7px 0 0px #d8d8d8;
}

article:hover img {
  transform: scale(1.3);
}

.image-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
  transform: translateX(-5px);
}

div:not(.image-wrapper) {
  display: flex;
  flex-direction: column;
  padding: 10px 1rem;
  background: #f2f2f2;
  flex-grow: 1;
  text-align: initial;
}

h3 {
  margin: 0;
  color: #82828a;
}

p {
  color: #c3c3c8;
}

.btn {
  margin-top: auto;
  align-self: flex-end;
}

.btn:hover {
  background: #0e0e0e;
  color: #d8d8d8;
}
</style>