import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/contador', name: 'counter', component: () => import('../views/CounterView.vue') },
  { path: '/fetch', name: 'fetch', component: () => import('../views/FetchView.vue') },
  { path: '/contacto', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFound.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
