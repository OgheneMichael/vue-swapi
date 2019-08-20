<template>
  <div>
    <Hero>
      <component :is="search_component" :onInput="fetchData"></component>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Starships" />
        <div class="grid grid--3">
          <Ship v-for="(ship, index) in starships" :key="index" :ship="ship" />
        </div>
      </section>
      <Pager :prevPage="prevPage" :nextPage="nextPage" :onClick="handlePage" />
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import Ship from "../components/Ship";
import Search from "../components/common/Search";
import Pager from "../components/common/Pager";
export default {
  data() {
    return {
      search_component: "search",
      starships: [],
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
          `https://swapi.co/api/starships/?search=${searchTerm}`
        );
        const starships = await res.json();
        this.starships = starships.results;
        this.prevPage = starships.previous;
        this.nextPage = starships.next;
      } catch (e) {
        throw e;
      }
    },
    handlePage: async function(endpoint) {
      try {
        const res = await fetch(endpoint);
        const starships = await res.json();
        this.starships = starships.results;
        this.prevPage = starships.previous;
        this.nextPage = starships.next;
      } catch (e) {
        throw e;
      }
    }
  },
  components: {
    Hero,
    SectionHeader,
    Search,
    Ship,
    Pager
  }
};
</script>

<style  scoped>
</style>