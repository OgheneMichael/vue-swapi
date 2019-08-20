<template>
  <div>
    <Hero />
    <main class="container">
      <div v-if="!isLoading">
        <!-- home listing of popular starships -->
        <section>
          <SectionHeader title="Popular Starships" />
          <div class="grid grid--3">
            <Ship v-for="(ship, index) in starships" :key="index" :ship="ship" />
          </div>
          <router-link to="/starships" class="btn">View more</router-link>
        </section>

        <!-- home listing of popular planets -->
        <section>
          <SectionHeader title="Popular Planets" />
          <swiper :options="swiperOption">
            <swiper-slide v-for="(planet, index) in planets" :key="index">
              <Planet :planet="planet" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </section>

        <!-- home listing of popular characters -->
        <section>
          <SectionHeader title="Popular Characters" />
          <div class="grid grid--2">
            <Person v-for="(person, index) in people" :key="index" :person="person" />
          </div>
          <router-link to="/characters" class="btn">View more</router-link>
        </section>
      </div>
      <Loader v-else />
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import Ship from "../components/Ship";
import Person from "../components/Person";
import SectionHeader from "../components/SectionHeader";
import Planet from "../components/Planet";
import Loader from "../components/common/Loader";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      isLoading: false,
      starships: [],
      planets: [],
      people: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      this.isLoading = !this.isLoading;
      try {
        // get all response at the same time
        const data = await Promise.all([
          fetch("https://swapi.co/api/starships").then(res => res.json()),
          fetch("https://swapi.co/api/planets").then(res => res.json()),
          fetch("https://swapi.co/api/people").then(res => res.json())
        ]);
        this.starships = data[0].results.slice(0, 6);
        this.planets = data[1].results.slice(0, 6);
        this.people = data[2].results.slice(0, 4);
        this.isLoading = !this.isLoading;
      } catch (e) {
        this.isLoading = !this.isLoading;
        throw e;
      }
    }
  },
  components: {
    Hero,
    Ship,
    SectionHeader,
    swiper,
    swiperSlide,
    Planet,
    Person,
    Loader
  }
};
</script>

<style scoped>
.btn {
  margin: 5rem 0 auto;
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