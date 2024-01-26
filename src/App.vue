
<template>
  <div id="app">
    <b-navbar toggleable="lg" z-index="15" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-sidebar
            id="sidebar-1"
            sidebar-class="border"
            backdrop-variant="transparent"
            backdrop
            no-close-on-backdrop
            no-close-on-esc
            no-close-on-route-change
            no-header-close
            title="Sidebar"
            visible
            z-index="-1"
          >
            <!-- <b-nav-item>
              <b-link :to="{ name: 'Inicio' }"> Inicio</b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'Main' }"> Main </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'tercero' }"> Tercero </b-link>
            </b-nav-item> -->
            <b-nav-item>
              <b-link :to="{ name: 'Rentar' }"> Renta tu espacio </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'Alquilar' }"> Alquila un espacio </b-link>
            </b-nav-item>
            <b-nav-item>
              <b-link :to="{ name: 'Formulario' }"> formulario </b-link>
            </b-nav-item>
          </b-sidebar>
        </b-col>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script setup>
</script>