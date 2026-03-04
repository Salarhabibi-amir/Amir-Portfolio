<template>
  <section class="py-8 md:py-12">
    <header class="mb-10 opacity-0 animate-fade-in-up animate-fill-both">
      <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">Get in touch</p>
      <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 mt-1">Reach out</h1>
      <p class="mt-3 text-surface-600 max-w-xl">
        I'm open to collaboration and new opportunities. Send a message or connect via the links below.
      </p>
    </header>
    <div class="contact-card rounded-2xl border border-surface-200 bg-white p-6 sm:p-8 shadow-card max-w-xl opacity-0 animate-scale-in animate-fill-both animate-delay-100">
      <p class="text-surface-600 mb-6">
        A contact form or backend integration can be added here. For now, you can reach me via:
      </p>
      <ul class="space-y-3">
        <li>
          <a
            href="mailto:a.hussainhabibi@gmail.com"
            class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            a.hussainhabibi@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amirhhabibi"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-card {
  transition: box-shadow 0.3s ease, border-color 0.2s ease;
}
.contact-card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05);
  border-color: rgb(199 210 254);
}
</style>
