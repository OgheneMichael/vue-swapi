<template>
  <div>
    <Hero>
      <component :is="search_component" :onInput="fetchData"></component>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Planets" />
        <div class="grid grid--3">
          <Planet v-for="(planet, index) in planets" :key="index" :planet="planet" />
        </div>
      </section>
      <Pager :prevPage="prevPage" :nextPage="nextPage" :onClick="handlePage" />
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import Planet from "../components/Planet";
import Search from "../components/common/Search";
import Pager from "../components/common/Pager";

export default {
  data() {
    return {
      search_component: "search",
      planets: [],
      prevPage: null,
      nextPage: null
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function(e) {
      let searchTerm = "";
      if (e !== undefined) searchTerm = e.target.value;
      try {
        const res = await fetch(
          `https://swapi.co/api/planets/?search=${searchTerm}`
        );
        const planets = await res.json();
        this.planets = planets.results;
        this.prevPage = planets.previous;
        this.nextPage = planets.next;
      } catch (e) {
        throw e;
      }
    },
    handlePage: async function(endpoint) {
      try {
        const res = await fetch(endpoint);
        const planets = await res.json();
        this.planets = planets.results;
        this.prevPage = planets.previous;
        this.nextPage = planets.next;
      } catch (e) {
        throw e;
      }
    }
  },
  components: {
    Hero,
    SectionHeader,
    Search,
    Planet,
    Pager
  }
};
</script>

<style lang="scss" scoped>
</style>