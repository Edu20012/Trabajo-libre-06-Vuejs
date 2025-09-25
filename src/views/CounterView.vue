<template>
  <section>
    <h2>Contador con Pinia</h2>
    <div class="card">
      <p>Valor: <strong>{{ counter.count }}</strong></p>
      <p>Doble (getter): <strong>{{ counter.double }}</strong></p>
      <div class="actions">
        <button @click="counter.decrement">-</button>
        <button @click="counter.increment">+</button>
        <button @click="counter.reset">Reset</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();
</script>
<style scoped>
.card { max-width:300px; border:1px solid #ddd; padding:1rem; border-radius:8px; }
.actions { display:flex; gap:.5rem; }
button { padding:.4rem .8rem; }
</style>
