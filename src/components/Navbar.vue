<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active a">
          <router-link class="nav-link" to="/home" v-if="adminAcces"
            >Home</router-link
          >
        </li>
        <li class="nav-item a">
          <router-link class="nav-link" to="/about" v-if="adminAcces"
            >About</router-link
          >
        </li>
        <li class="nav-item a">
          <router-link class="nav-link" to="/contact" v-if="adminAcces"
            >Contact</router-link
          >
        </li>
        <li class="nav-item a">
          <router-link class="nav-link" to="/product">Produk</router-link>
        </li>
        <li class="nav-item a">
          <router-link class="nav-link" to="/detail">Detail</router-link>
        </li>
        <li class="nav-item a" @click="out">
          <router-link to="/" class="nav-link log">Log Out</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    adminAcces() {
      return sessionStorage.getItem("role") === "admin";
    },
  },
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.log {
  margin-left: 850px;
}
.a {
  color: white;
}
</style>
