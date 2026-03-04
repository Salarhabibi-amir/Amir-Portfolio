<template>
  <nav class="sticky top-0 z-50 border-b border-surface-200 bg-white/95 backdrop-blur-sm">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16">
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center gap-3 rounded-lg transition-opacity hover:opacity-90"
        >
          <img :src="profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-surface-200" alt="Amir Hussain Habibi" />
          <span class="font-display font-semibold text-surface-800 text-base">Amir Hussain Habibi</span>
        </router-link>
        <button
          type="button"
          @click="toggleMenu"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-surface-500 hover:bg-surface-100 hover:text-surface-700 focus:outline-none focus:ring-2 focus:ring-accent-500"
          aria-controls="navbar-menu"
          :aria-expanded="isOpen"
        >
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div
          :class="{ hidden: !isOpen }"
          id="navbar-menu"
          class="md:flex md:items-center md:gap-1 w-full md:w-auto"
        >
          <ul class="flex flex-col md:flex-row md:items-center gap-1 py-4 md:py-0 md:gap-0">
            <li>
              <router-link
                :to="{ name: 'home' }"
                class="nav-link"
                active-class="nav-link-active"
                exact-active-class="nav-link-active"
                @click="isOpen = false"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'projects' }"
                class="nav-link"
                active-class="nav-link-active"
                exact-active-class="nav-link-active"
                @click="isOpen = false"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'contact' }"
                class="nav-link"
                active-class="nav-link-active"
                exact-active-class="nav-link-active"
                @click="isOpen = false"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import profile from '@/assets/profile.jpg'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.nav-link {
  @apply block px-4 py-2.5 rounded-lg text-sm font-medium text-surface-600 hover:bg-surface-100 hover:text-surface-800 transition-colors;
}
.nav-link-active {
  @apply bg-accent-50 text-accent-700 hover:bg-accent-100 hover:text-accent-800;
}
</style>
