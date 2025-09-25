<template>
  <div class="layout">
    <NavBar />
    <main class="container">
      <RouterView />
    </main>
    <footer class="footer">Vue 3 + Vite - Tarea 7</footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style scoped>
.layout { display:flex; flex-direction:column; min-height:100vh; }
.container { flex:1; padding:1rem; }
.footer { text-align:center; padding:1rem; font-size:0.85rem; opacity:0.7; }
</style>
