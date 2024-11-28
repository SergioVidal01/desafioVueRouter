<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  padding: 10px;
  background-color: #f8f9fa;
}
nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}
</style>
