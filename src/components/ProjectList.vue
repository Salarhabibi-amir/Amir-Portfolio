<template>
  <section class="py-8 md:py-12">
    <header class="mb-10">
      <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">Portfolio</p>
      <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 mt-1">Projects & Experience</h1>
      <p class="mt-3 text-surface-600 max-w-2xl">Web applications and sites I've built or contributed to.</p>
    </header>
    <ul class="grid gap-5 sm:grid-cols-2">
      <li v-for="project in projects" :key="project.url">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group block p-5 sm:p-6 rounded-xl border border-surface-200 bg-white shadow-card hover:shadow-card-hover hover:border-accent-200 transition-all duration-200"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <h2 class="font-display font-semibold text-surface-900 text-lg group-hover:text-accent-600 transition-colors">
                {{ project.title }}
              </h2>
              <p v-if="project.description" class="mt-1 text-sm text-surface-500">
                {{ project.description }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="inline-flex items-center rounded-md bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
            <span class="shrink-0 text-surface-400 group-hover:text-accent-500 transition-colors" aria-hidden="true">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'HRIMS & Employee Portal',
    url: 'https://alhawaims.com',
    description: 'HR and employee management platform.',
    tags: ['Laravel', 'Vue.js'],
  },
  {
    title: 'Darayee — Inventory & Asset Management',
    url: 'https://daraaye.com',
    description: 'Inventory and asset management system.',
    tags: ['Laravel', 'Vue.js'],
  },
  {
    title: 'Emllak',
    url: 'https://emllak.com',
    description: 'Property and real estate platform.',
    tags: ['Laravel', 'Vue.js'],
  },
  {
    title: 'Karwwan',
    url: 'https://karwwan.com',
    description: 'Transport and logistics application.',
    tags: ['Laravel', 'Vue.js'],
  },
  {
    title: 'Al-Hawa Technologies',
    url: 'https://alhawatechs.com',
    description: 'Company website.',
    tags: ['Web'],
  },
  {
    title: 'Al-Hawa Group of Companies',
    url: 'https://alhawagc.com',
    description: 'Corporate website.',
    tags: ['Web'],
  },
]
</script>
