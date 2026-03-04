<template>
  <div class="min-h-screen flex flex-col">
    <app-navbar />
    <main class="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <RouterView />
    </main>
    <app-footer />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
