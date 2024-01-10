<script setup>
</script>

<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col class="border">
          <b-navbar toggleable="lg"  z-index=15 type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            <b-button v-b-toggle.sidebar-1>Abrir SideBar</b-button>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="border">
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
            visible="true"
            z-index=1
          >
            <div class="px-3 py-2"></div>
          </b-sidebar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


