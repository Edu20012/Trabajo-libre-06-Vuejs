<template>
  <form @submit.prevent="onSubmit" novalidate class="contact-form">
    <h2>Contacto</h2>
    <div class="field">
      <label>Nombre *</label>
      <input v-model.trim="form.name" type="text" />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>
    </div>
    <div class="field">
      <label>Email *</label>
      <input v-model.trim="form.email" type="email" />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>
    </div>
    <div class="field">
      <label>Mensaje *</label>
      <textarea v-model.trim="form.message" rows="4"></textarea>
      <p v-if="errors.message" class="error">{{ errors.message }}</p>
    </div>
    <div class="field">
      <label>
        <input type="checkbox" v-model="form.accept" /> Acepto términos
      </label>
      <p v-if="errors.accept" class="error">{{ errors.accept }}</p>
    </div>
    <button :disabled="submitting">{{ submitting ? 'Enviando...' : 'Enviar' }}</button>
    <p v-if="submitted" class="ok">Formulario enviado correctamente.</p>
  </form>
</template>
<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '', accept: false });
const errors = reactive({});
const submitted = ref(false);
const submitting = ref(false);

function validate() {
  errors.name = form.name ? '' : 'El nombre es requerido';
  errors.email = /.+@.+\..+/.test(form.email) ? '' : 'Email inválido';
  errors.message = form.message.length >= 10 ? '' : 'Mínimo 10 caracteres';
  errors.accept = form.accept ? '' : 'Debes aceptar';
  return !errors.name && !errors.email && !errors.message && !errors.accept;
}

async function onSubmit() {
  submitted.value = false;
  if (!validate()) return;
  submitting.value = true;
  // Simular envío
  await new Promise(r => setTimeout(r, 300));
  submitting.value = false;
  submitted.value = true;
  // Limpiar
  Object.assign(form, { name: '', email: '', message: '', accept: false });
}
</script>
<style scoped>
.contact-form { max-width:420px; background:#fff; padding:1rem 1.25rem; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,.08); }
.field { margin-bottom: .9rem; display:flex; flex-direction:column; }
label { font-weight:600; margin-bottom:.25rem; }
input[type=text], input[type=email], textarea { padding:.5rem .6rem; border:1px solid #cbd5e1; border-radius:4px; font:inherit; }
.error { color:#dc2626; font-size:.8rem; margin:.25rem 0 0; }
.ok { color:#16a34a; margin-top:1rem; font-weight:600; }
</style>
