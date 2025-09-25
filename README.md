# Tarea 7 — Vue 3 + Vite

Aplicación de ejemplo creada manualmente (sin scaffolding) para practicar Vue 3 con Vite, enrutamiento, estado global, pruebas y buenas prácticas.

> Requisitos: Node.js >= 18.17 y npm >= 9. Verifica con `node -v` y `npm -v`.

## Demo rápida

- Arranca el servidor local y navega por las vistas (Home, About, Counter, Fetch, Contact).
- Flujo de contacto y rutas de la app:

![Arquitectura del stack](docs/stack-architecture.svg)

![Mapa de rutas](docs/routes-map.svg)

![Flujo de contacto](docs/contact-flow.svg)

### Video (coloca aquí tu demo)

Puedes incrustar un video MP4 (sube `docs/demo.mp4` al repo) o enlazar uno de YouTube.

<details>
<summary>Ver como incrustar un MP4 local</summary>

<video src="docs/demo.mp4" controls width="720" poster="docs/routes-map.svg">
  Tu navegador no soporta video HTML5. Descarga el archivo desde <a href="docs/demo.mp4">docs/demo.mp4</a>.
 </video>

</details>

## Tabla de contenidos

- Introducción
- Características
- Estructura del proyecto
- Cómo ejecutar (desarrollo y build)
- Scripts disponibles
- Calidad de código (ESLint) y pruebas (Vitest)
- Configuración de rutas y estado global
- Troubleshooting
- Cómo desplegar (opcional)

## Características

- Vue 3 con Composition API.
- Vite para desarrollo y build ultrarrápidos.
- Vue Router para navegación SPA.
- Pinia como gestor de estado.
- ESLint con reglas para Vue.
- Vitest + @vue/test-utils para pruebas unitarias.
- Ejemplo de fetch (JSONPlaceholder) y manejo básico de errores/carga.
- Formulario de contacto con validación mínima.

## Estructura del proyecto

```
.
├── src/
│   ├── main.js              # punto de entrada Vite/Vue
│   ├── App.vue              # layout principal
│   ├── assets/              # estilos e imágenes locales
│   │   └── base.css
│   ├── components/
│   │   ├── ContactForm.vue
│   │   └── NavBar.vue
│   ├── router/
│   │   └── index.js         # definición de rutas
│   ├── stores/
│   │   └── counter.js       # ejemplo de store Pinia
│   └── views/               # páginas de la app
│       ├── AboutView.vue
│       ├── ContactView.vue
│       ├── CounterView.vue
│       ├── FetchView.vue
│       ├── HomeView.vue
│       └── NotFound.vue
├── tests/                   # pruebas unitarias (Vitest)
│   ├── ContactForm.spec.js
│   ├── FetchView.spec.js
│   └── counterStore.spec.js
├── docs/                    # diagramas/activos para documentación
│   ├── contact-flow.svg
│   ├── routes-map.svg
│   └── stack-architecture.svg
├── index.html               # HTML base Vite
├── package.json
├── vite.config.js
├── vitest.config.js
└── vitest.setup.js
```

## Cómo ejecutar

1. Instala dependencias

```bash
npm install
```

2. Modo desarrollo

```bash
npm run dev
```

Abre el navegador (si no se abre solo) en: http://localhost:5173

3. Build de producción

```bash
npm run build
npm run preview   # sirve la build localmente
```

## Scripts disponibles

- `npm run dev` — inicia Vite en modo desarrollo.
- `npm run build` — genera la carpeta `dist` con archivos optimizados.
- `npm run preview` — sirve la build para verificación local.
- `npm run lint` — corre ESLint y aplica fixes seguros.
- `npm test` — ejecuta todas las pruebas una vez.
- `npm run test:watch` — ejecuta pruebas en modo watch.
- `npm run test:ui` — interfaz web experimental de Vitest.

## Calidad de código y pruebas

- Linting: `npm run lint`.
- Pruebas unitarias: `npm test` o `npm run test:watch`.
- Configuración de pruebas en `vitest.config.js` y `vitest.setup.js`.
- Ejemplos:
  - `tests/ContactForm.spec.js` valida inputs y submit.
  - `tests/FetchView.spec.js` cubre llamada a API y estados.
  - `tests/counterStore.spec.js` prueba el store Pinia.

## Rutas y estado global

- Las rutas están definidas en `src/router/index.js`. Incluye una ruta catch-all para 404 (`NotFound.vue`).
- El estado global usa Pinia (`src/stores/counter.js`) con acciones y getters básicos.

## Notas y buenas prácticas

- El ejemplo de fetch utiliza JSONPlaceholder (https://jsonplaceholder.typicode.com/).
- Añade más stores en `src/stores` y vistas en `src/views` según necesites.
- Componentiza UI repetitiva (por ejemplo, NavBar) y mantén lógica en composables cuando crezca el proyecto.

## Troubleshooting

- Error al instalar dependencias en Windows: asegúrate de tener Node >= 18.17.
- Puerto ocupado (5173): establece `--port` en un script o cierra el proceso ocupando el puerto.
- Problemas con pruebas en Windows: verifica que `jsdom` esté instalado y versión de Node compatible.

## Despliegue (opcional)

La carpeta `dist` puede hospedarse en cualquier servidor estático (Netlify, Vercel, GitHub Pages, etc.).

---

Hecho con Vue 3 + Vite. Si usas este repo para estudiar, ¡no dudes en ampliarlo con tus propias vistas y pruebas!
