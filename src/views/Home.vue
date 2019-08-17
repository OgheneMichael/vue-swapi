<template>
  <main class="container">
    <section>
      <SectionHeader title="Popular Starships" />
      <div class="grid">
        <Ship v-for="(ship, index) in starships" :key="index" :ship="ship" />
      </div>
      <router-link to="/ship" class="btn">View more</router-link>
    </section>
    <section>
      <SectionHeader title="Popular Planets" />
      <swiper :options="swiperOption">
        <swiper-slide v-for="(planet, index) in planets" :key="index">
          <Planet :planet="planet" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </main>
</template>

<script>
import Ship from "../components/Ship";
import SectionHeader from "../components/SectionHeader";
import Planet from "../components/Planet";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      starships: [],
      planets: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const data = await Promise.all([
          fetch("https://swapi.co/api/starships").then(res => res.json()),
          fetch("https://swapi.co/api/planets").then(res => res.json())
        ]);
        this.starships = data[0].results.slice(0, 6);
        this.planets = data[1].results.slice(0, 6);
      } catch (e) {
        throw e;
      }
    }
  },
  components: { Ship, SectionHeader, swiper, swiperSlide, Planet }
};
</script>

<style scoped>
section {
  position: relative;
  padding: 5rem 0;
  text-align: center;
}
.grid {
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 400px;
  grid-auto-rows: minmax(100px, auto);
}

.btn {
  margin: 5rem auto;
  min-width: 40%;
  background: transparent;
  border: 1px solid currentColor;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
}

.btn:hover {
  background: #0e0e0e;
  border-color: #0e0e0e;
  color: #d8d8d8;
}
</style>