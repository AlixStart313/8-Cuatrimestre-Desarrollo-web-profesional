
<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col sm="5" md="4" lg="4" xl="3">
          <b-sidebar id="sidebar-1"  sidebar-class="border" backdrop-variant="transparent" backdrop="false" no-close-on-backdrop no-close-on-esc
            no-close-on-route-change no-header-close title="Sidebar" visible z-index="-1">
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
        <b-col sm="6" md="7" lg="7" xl="8">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
</script>