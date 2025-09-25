<template>
  <nav class="nav">
    <h1 class="brand">Tarea 7</h1>
    <ul>
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li><RouterLink to="/about">Acerca</RouterLink></li>
      <li><RouterLink to="/contador">Contador</RouterLink></li>
  <li><RouterLink to="/fetch">Fetch API</RouterLink></li>
  <li><RouterLink to="/contacto">Contacto</RouterLink></li>
    </ul>
  </nav>
</template>
<script setup>
</script>
<style scoped>
.nav { display:flex; gap:2rem; align-items:center; padding:0.75rem 1rem; background:#1e293b; color:#fff; }
.brand { margin:0; font-size:1.1rem; }
ul { list-style:none; display:flex; gap:1rem; margin:0; padding:0; }
a { color:#fff; text-decoration:none; }
a.router-link-active { font-weight:bold; text-decoration:underline; }
</style>
