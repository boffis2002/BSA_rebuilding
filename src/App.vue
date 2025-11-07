<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background-color: #f8f9fa;
}
</style>
