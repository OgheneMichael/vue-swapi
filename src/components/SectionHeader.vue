<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: String
  }
};
</script>

<style scoped>
h3 {
  position: relative;
  font-size: 2rem;
  margin-bottom: 3rem;
}

h3::after {
  content: "";
  display: block;
  margin: 1rem auto 0;
  width: 6rem;
  height: 5px;
  background: currentColor;
}
</style>