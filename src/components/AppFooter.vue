<template>
  <footer class="border-t border-surface-200 bg-white/80 mt-auto">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-surface-500 font-medium">
          &copy; {{ new Date().getFullYear() }} Amir Hussain Habibi. Full Stack Developer.
        </p>
        <nav class="flex items-center gap-6">
          <router-link
            :to="{ name: 'home' }"
            class="text-sm text-surface-500 hover:text-accent-600 transition-colors"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'projects' }"
            class="text-sm text-surface-500 hover:text-accent-600 transition-colors"
          >
            Projects
          </router-link>
          <router-link
            :to="{ name: 'contact' }"
            class="text-sm text-surface-500 hover:text-accent-600 transition-colors"
          >
            Contact
          </router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
