<template>
  <div>
    <h1>Ofertar espacio</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Rentar tu espacio",
          to: { name: "Rentar" },
        },
        {
          text: "Información del espacio",
          to: { name: "Informacion" },
        },
        {
          text: "Ofertar tu espacio",
          to: { name: "Ofertar" },
          active: true
        },
      ],
    };
  },
}
</script>

<style></style>