<template>
  <div>
    <Hero />
    <main class="container">
      <section>
        <figure class="image-wrapper">
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
    </main>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  data() {
    return {
      ship: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://swapi.co/api/starships/${this.$route.params.id}`
        );
        const shipDetail = await res.json();
        this.ship = shipDetail;
      } catch (error) {
        throw error;
      }
    }
  },
  components: { Hero }
};
</script>

<style scoped>
figure {
  position: relative;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 6px 0px #2c3e50;
  transform: translateY(-40%);
  transition: all 0.3s ease;
}

figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 5px;
  font-size: 25px;
  opacity: 0.8;
  color: #ffffff;
}

span {
  padding-left: 5px;
}
</style>