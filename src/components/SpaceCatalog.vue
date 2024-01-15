<template>
  <div>
    <h1>Catalogo de espacios</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Alquilar espacio",
          to: { name: "Alquilar" },
        },
        {
          text: "Catalogo de espacios",
          to: { name: "Catalogo" },
          active: true
        },
        {
          text: "Detalles del espacio",
          to: { name: "Detalles" },
        },
      ],
    };
  },
}
</script>

<style></style>