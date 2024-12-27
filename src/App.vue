<template>
  <app-navbar></app-navbar>
  <div class="mt-auto mx-auto container mx-auto  px-6">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
</script>

<style></style>
