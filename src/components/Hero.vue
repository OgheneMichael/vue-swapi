<template>
  <header>
    <div class="intro">
      <span class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </span>
      <h4>Directory</h4>
    </div>
    <nav>
      <router-link
        v-for="(item, index) in nav"
        :key="index"
        :to="item.link"
        :exact="item.exact"
      >{{item.name}}</router-link>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      nav: [
        {
          link: "/",
          name: "Galaxy",
          exact: true
        },
        {
          link: "/starships",
          name: "Starships",
          exact: true
        },
        {
          link: "/planets",
          name: "Planets",
          exact: true
        },
        {
          link: "/characters",
          name: "Characters",
          exact: true
        }
      ]
    };
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 75vh;
  margin-bottom: 2rem;
  background: url("../assets/hero-banner.jpg") no-repeat center/cover fixed;
  color: #ffffff;
}

.intro {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 50px;
  justify-content: center;
}

.intro::after {
  content: "";
  position: absolute;
  bottom: -1rem;
  width: 90%;
  height: 2px;
  background: currentColor;
}

.logo {
  width: 130px;
  transform: translateX(2.5px);
}

h4 {
  transform: translateX(-2.5px);
}

nav {
  display: block;
  margin: 2rem auto;
  padding: 0 0 20px;
  border-bottom: 2px solid currentColor;
}

nav a {
  position: relative;
  padding: 4px 10px;
  margin: 0 2px;
  border-radius: 2px;
  font-weight: 500;
}

.router-link-exact-active {
  color: bisque;
}

@media only screen and (max-width: 330px) {
  .logo {
    width: 100px;
  }

  .intro {
    font-size: 30px;
  }

  nav a {
    font-size: 14px;
    padding: 2px 5px;
  }
}
</style>