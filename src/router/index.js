import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { path: '/products', 
    name: 'products', 
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue'),
    props: route => ({ 
      nombre: route.query.nombre, 
      descripcion: route.query.descripcion, 
      precio: route.query.precio, 
      cantidad: route.query.cantidad
    }) 
  },
  { path: '/contact',
    name: 'contact', 
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(), // Modo hash
  routes,
})

export default router




