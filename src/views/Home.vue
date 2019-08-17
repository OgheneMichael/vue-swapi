<template>
  <main class="container">
    <section>
      <SectionHeader title="Popular Starships" />
      <div class="grid">
        <Ship v-for="(ship, index) in starships" :key="index" :ship="ship" />
      </div>
      <router-link to="/ship" class="btn">View more</router-link>
    </section>
  </main>
</template>

<script>
import Ship from "../components/Ship";
import SectionHeader from "../components/SectionHeader";

export default {
  data() {
    return {
      starships: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://swapi.co/api/starships`);
        const starships = await res.json();
        this.starships = starships.results.slice(0, 6);
      } catch (e) {
        throw e;
      }
    }
  },
  components: { Ship, SectionHeader }
};
</script>

<style scoped>
section {
  position: relative;
  padding: 5rem 0;
  text-align: center;
}
.grid {
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-auto-rows: minmax(100px, auto);
}

.btn {
  margin: 5rem auto;
  min-width: 40%;
  background: transparent;
  border: 1px solid currentColor;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
}

.btn:hover {
  background: #0e0e0e;
  border-color: #0e0e0e;
  color: #d8d8d8;
}
</style>