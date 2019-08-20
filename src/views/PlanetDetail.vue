<template>
  <div>
    <Hero />
    <main class="container">
      <transition name="slide-fade">
        <section v-if="!isLoading">
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
      planet: {}
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
          `https://swapi.co/api/planets/${this.$route.params.id}`
        );
        const planetDetail = await res.json();
        this.planet = planetDetail;
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
  background: #000;
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
  transform: translateY(0);
  opacity: 0;
}
</style>