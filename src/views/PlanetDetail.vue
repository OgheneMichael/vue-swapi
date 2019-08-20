<template>
  <div>
    <Hero />
    <main class="container">
      <section>
        <figure class="figure-wrapper">
          <img src="../assets/planet-1.jpg" alt="photo" />
          <figcaption>{{planet.name}}</figcaption>
        </figure>
        <div class="detail">
          <ul>
            <li>
              <strong>Population:</strong>
              <span>{{planet.population}}</span>
            </li>
            <li>
              <strong>Climate:</strong>
              <span>{{planet.climate}}</span>
            </li>
            <li>
              <strong>Rotation Period:</strong>
              <span>{{planet.rotation_period}}</span>
            </li>
            <li>
              <strong>Rotation Period:</strong>
              <span>{{planet.rotation_period}}</span>
            </li>
            <li>
              <strong>Gravity:</strong>
              <span>{{planet.gravity}}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  data() {
    return {
      planet: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://swapi.co/api/planets/${this.$route.params.id}`
        );
        const planetDetail = await res.json();
        this.planet = planetDetail;
      } catch (error) {
        throw error;
      }
    }
  },
  components: { Hero }
};
</script>

<style scoped>
section {
  transform: translateY(-20%);
}

figure {
  background: #000;
}

span {
  padding-left: 5px;
}
</style>