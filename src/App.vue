<template>
  <app-navbar></app-navbar>
  <div class=" bg-red-500 w-screen-md">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
</script>

<style></style>
