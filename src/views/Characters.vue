<template>
  <div>
    <Hero>
      <component :is="search_component" :onInput="fetchData"></component>
    </Hero>
    <main class="container">
      <section>
        <SectionHeader title="Popular Characters" />
        <div class="grid grid--2">
          <Person v-for="(person, index) in people" :key="index" :person="person" />
        </div>
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

export default {
  data() {
    return {
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
      try {
        const res = await fetch(
          `https://swapi.co/api/people/?search=${searchTerm}`
        );
        const people = await res.json();
        this.people = people.results;
        this.prevPage = people.previous;
        this.nextPage = people.next;
      } catch (e) {
        throw e;
      }
    },
    handlePage: async function(endpoint) {
      try {
        const res = await fetch(endpoint);
        const people = await res.json();
        this.people = people.results;
        this.prevPage = people.previous;
        this.nextPage = people.next;
      } catch (e) {
        throw e;
      }
    }
  },
  components: {
    Hero,
    SectionHeader,
    Search,
    Person,
    Pager
  }
};
</script>

<style lang="scss" scoped>
</style>