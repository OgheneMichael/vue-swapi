<template>
  <div>
    <Hero>
      <transition name="slide-fade">
        <component :is="search_component" :onInput="fetchData"></component>
      </transition>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Planets" />
        <div v-if="!isLoading" class="grid grid--3">
          <Planet v-for="(planet, index) in planets" :key="index" :planet="planet" />
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
import Planet from "../components/Planet";
import Search from "../components/common/Search";
import Pager from "../components/common/Pager";
import Loader from "../components/common/Loader";

export default {
  data() {
    return {
      isLoading: false,
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
        this.isLoading = !this.isLoading;
        const res = await fetch(
          `https://swapi.co/api/planets/?search=${searchTerm}`
        );
        const planets = await res.json();
        this.planets = planets.results;
        this.prevPage = planets.previous;
        this.nextPage = planets.next;
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
        const planets = await res.json();
        this.planets = planets.results;
        this.prevPage = planets.previous;
        this.nextPage = planets.next;
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
    Planet,
    Pager,
    Loader
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(0%);
  opacity: 0;
}
</style>