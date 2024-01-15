<template>
  <div>
    <h1>detalles del espacio</h1>
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
          to: { name: "Catalago" },
        },
        {
          text: "Detalles del espacio",
          to: { name: "Detalles" },
          active: true
        },
      ],
    };
  },
}
</script>

<style></style>