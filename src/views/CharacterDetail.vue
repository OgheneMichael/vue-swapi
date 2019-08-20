<template>
  <div>
    <Hero />
    <main class="container">
      <transition name="slide-fade">
        <section v-if="!isLoading">
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
      </transition>
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  data() {
    return {
      isLoading: false,
      person: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      this.isLoading = !this.isLoading;
      try {
        const res = await fetch(
          `https://swapi.co/api/people/${this.$route.params.id}`
        );
        const personDetail = await res.json();
        this.person = personDetail;
        this.isLoading = !this.isLoading;
      } catch (error) {
        this.isLoading = !this.isLoading;
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