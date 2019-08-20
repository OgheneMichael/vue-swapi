<template>
  <div>
    <Hero />
    <main class="container">
      <section>
        <figure class="figure-wrapper">
          <img src="../assets/character-3.jpg" alt="photo" />
          <figcaption>{{person.name}}</figcaption>
        </figure>
        <div class="detail">
          <ul>
            <li>
              <strong>Gender:</strong>
              <span>{{person.gender}}</span>
            </li>
            <li>
              <strong>Birth Year:</strong>
              <span>{{person.birth_year}}</span>
            </li>
            <li>
              <strong>Height:</strong>
              <span>{{person.height}}</span>
            </li>
            <li>
              <strong>Hair Color:</strong>
              <span>{{person.hair_color}}</span>
            </li>
            <li>
              <strong>Skin Color:</strong>
              <span>{{person.skin_color}}</span>
            </li>
            <li>
              <strong>Eye Color:</strong>
              <span>{{person.eye_color}}</span>
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
      person: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://swapi.co/api/people/${this.$route.params.id}`
        );
        const personDetail = await res.json();
        this.person = personDetail;
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
  background: #0e0e0e;
}

span {
  padding-left: 5px;
}
</style>