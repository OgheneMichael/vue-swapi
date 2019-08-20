<template>
  <article>
    <div class="image-wrapper">
      <img src="../assets/character-3.jpg" alt="photo" />
    </div>
    <div>
      <h3>{{person.name}}</h3>
      <p>Gender: {{ person.gender }}</p>
      <p>Skin Color: {{ person.skin_color }}</p>
      <p>Eye Color: {{ person.eye_color }}</p>
      <p>Birth Year: {{ person.birth_year }}</p>
      <router-link to="/ship" class="btn">Read more</router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ["person"]
};
</script>

<style  scoped>
article {
  display: grid;
  position: relative;
  box-shadow: -6px 7px 0 0px #d8d8d8;
  grid-template-columns: repeat(2, 1fr);
}

article:hover img {
  transform: scale(1.3);
}

.image-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
  /* transform: translateX(-5px); */
  /* flex-grow: 1; */
}

img {
  height: 100%;
  object-fit: cover;
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
  margin: 2px 0;
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