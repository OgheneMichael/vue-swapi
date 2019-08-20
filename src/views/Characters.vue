<template>
  <div>
    <Hero>
      <component :is="search_component" :onInput="fetchData"></component>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Characters" />
        <div v-if="!isLoading" class="grid grid--2">
          <Person v-for="(person, index) in people" :key="index" :person="person" />
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
import Person from "../components/Person";
import Search from "../components/common/Search";
import Pager from "../components/common/Pager";
import Loader from "../components/common/Loader";

export default {
  data() {
    return {
      isLoading: false,
      search_component: "search",
      people: [],
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
      this.isLoading = !this.isLoading;
      try {
        const res = await fetch(
          `https://swapi.co/api/people/?search=${searchTerm}`
        );
        const people = await res.json();
        this.people = people.results;
        this.prevPage = people.previous;
        this.nextPage = people.next;
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
        const people = await res.json();
        this.people = people.results;
        this.prevPage = people.previous;
        this.nextPage = people.next;
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
    Person,
    Pager,
    Loader
  }
};
</script>

<style lang="scss" scoped>
</style>