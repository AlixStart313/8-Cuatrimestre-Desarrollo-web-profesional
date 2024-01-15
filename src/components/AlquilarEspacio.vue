<template>
  <div>
    <h1>Alquilar espacio</h1>
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
          active: true
        },
        {
          text: "Catalogo de espacios",
          to: { name: "Catalago" },
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