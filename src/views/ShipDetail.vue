<template>
  <div>
    <Hero />
    <main class="container">
      <transition name="slide-fade">
        <section v-if="!isLoading">
          <figure class="figure-wrapper">
            <img src="../assets/starship-1.jpg" alt="photo" />
            <figcaption>{{ship.name}}</figcaption>
          </figure>
          <div class="detail">
            <ul>
              <li>
                <strong>Model:</strong>
                <span>{{ship.model}}</span>
              </li>
              <li>
                <strong>Cargo Capacity:</strong>
                <span>{{ship.cargo_capacity}}</span>
              </li>
              <li>
                <strong>Manufacturer:</strong>
                <span>{{ship.manufacturer}}</span>
              </li>
              <li>
                <strong>Consumables:</strong>
                <span>{{ship.consumables}}</span>
              </li>
              <li>
                <strong>Crew:</strong>
                <span>{{ship.crew}}</span>
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
      ship: {}
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
          `https://swapi.co/api/starships/${this.$route.params.id}`
        );
        const shipDetail = await res.json();
        this.ship = shipDetail;
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
  box-shadow: 0 0 6px 0px #2c3e50;
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