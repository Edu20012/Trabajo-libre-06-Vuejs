<template>
  <section>
    <h2>Ejemplo Fetch API (JSONPlaceholder)</h2>
    <button @click="loadPosts" :disabled="loading">{{ loading ? 'Cargando...' : 'Cargar posts' }}</button>
    <p v-if="error" class="error">Error: {{ error }}</p>
    <ul v-if="posts.length">
      <li v-for="p in posts" :key="p.id">
        <strong>{{ p.title }}</strong><br />
        <small>#{{ p.id }}</small>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from 'vue';

const posts = ref([]);
const loading = ref(false);
const error = ref('');

async function loadPosts() {
  loading.value = true;
  error.value = '';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    if (!res.ok) throw new Error('Respuesta no OK');
    posts.value = await res.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>
<style scoped>
ul { padding-left:1.2rem; }
.error { color:#dc2626; }
</style>
