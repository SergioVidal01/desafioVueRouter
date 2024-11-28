<template>
    <div class="product-card">
      <img :src="imagen" alt="Imagen del Producto" class="product-image" />
      <h2>{{ nombre }}</h2>
      <p>{{ descripcion }}</p>
      <p><strong>Precio:</strong> ${{ precio }}</p>
      <p><strong>Cantidad:</strong> {{ cantidad }}</p>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <script>
  import desayunosImage from '@/assets/img/desayunos.jpg';
  
  export default {
    name: 'ProductsView',
    data() {
      return {
        nombre: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos.',
        precio: 2000,
        cantidad: 2,
        imagen: desayunosImage
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center; /* Centrar el contenido */
    max-width: 300px; /* Ancho máximo de la tarjeta */
    margin-left: auto; /* Centrar la tarjeta horizontalmente */
    margin-right: auto; /* Centrar la tarjeta horizontalmente */
  }
  .product-card h2 {
    margin-top: 0;
  }
  .product-image {
    width: 100%; /* Ajustar la imagen al ancho de la tarjeta */
    height: auto;
    max-width: 300px; /* Tamaño máximo de la imagen */
    border-radius: 4px; /* Opcional: añade bordes redondeados a la imagen */
    margin-bottom: 15px;
  }
  </style>
  