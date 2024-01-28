<template>
  <h1>Componente inicio</h1>
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