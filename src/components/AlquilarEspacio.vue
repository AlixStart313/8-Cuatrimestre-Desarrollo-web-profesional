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
          text: "Inicio",
          href: "#",
          to: { name: "Inicio" },
        },
        {
          text: "Main",
          href: "#",
          to: { name: "Main" },
        },
        {
          text: "Tercero",
          href: "#",
          to: { name: "tercero" },
        },
      ],
    };
  },
};
</script>

<style>
</style>