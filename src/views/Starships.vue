<template>
  <div>
    <Hero>
      <component :is="search_component" :onInput="fetchData"></component>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Starships" />
        <div v-if="!isLoading" class="grid grid--3">
          <Ship v-for="(ship, index) in starships" :key="index" :ship="ship" />
        </div>
        <Loader v-else />
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
import Loader from "../components/common/Loader";
export default {
  data() {
    return {
      isLoading: false,
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
        this.isLoading = !this.isLoading;
        const res = await fetch(
          `https://swapi.co/api/starships/?search=${searchTerm}`
        );
        const starships = await res.json();
        this.starships = starships.results;
        this.prevPage = starships.previous;
        this.nextPage = starships.next;
        this.isLoading = !this.isLoading;
      } catch (e) {
        this.isLoading = !this.isLoading;
        throw e;
      }
    },
    handlePage: async function(endpoint) {
      this.isLoading = !this.isLoading;
      try {
        const res = await fetch(endpoint);
        const starships = await res.json();
        this.starships = starships.results;
        this.prevPage = starships.previous;
        this.nextPage = starships.next;
        this.isLoading = !this.isLoading;
      } catch (e) {
        this.isLoading = !this.isLoading;
        throw e;
      }
    }
  },
  components: {
    Hero,
    SectionHeader,
    Search,
    Ship,
    Pager,
    Loader
  }
};
</script>

<style  scoped>
main {
  position: relative;
  min-height: 50vh;
}
</style>