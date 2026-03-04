<template>
  <section class="py-8 md:py-12">
    <header class="mb-10">
      <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">Portfolio</p>
      <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 mt-1">Projects & Experience</h1>
      <p class="mt-3 text-surface-600 max-w-2xl">Web applications and sites I've built or contributed to, grouped by audience.</p>
    </header>

    <div class="space-y-12">
      <div>
        <h2 class="font-display text-xl font-semibold text-surface-800 mb-1 flex items-center gap-2">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 text-accent-600 text-sm" aria-hidden="true">🌐</span>
          Public & social platforms
        </h2>
        <p class="text-sm text-surface-500 mb-5">Products for everyone — real estate, transport, and similar services.</p>
        <ul class="grid gap-6 sm:grid-cols-2">
          <li
            v-for="project in publicProjects"
            :key="project.url || project.title"
            class="project-card"
          >
            <a
              :href="project.url || '#'"
              :target="project.url ? '_blank' : '_self'"
              :rel="project.url ? 'noopener noreferrer' : undefined"
              class="group p-5 sm:p-6 flex flex-col block"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                  <h3 class="font-display font-semibold text-surface-900 text-lg group-hover:text-accent-600 transition-colors">
                    {{ project.title }}
                  </h3>
                  <p v-if="project.description" class="mt-1 text-sm text-surface-500">
                    {{ project.description }}
                  </p>
                </div>
                <span v-if="project.url" class="shrink-0 text-surface-400 group-hover:text-accent-500 transition-colors" aria-hidden="true">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
              <div v-if="project.role" class="mt-3">
                <span class="text-xs font-medium text-surface-500 uppercase tracking-wider">My role</span>
                <p class="mt-0.5 text-sm font-medium text-accent-700">{{ project.role }}</p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="inline-flex items-center rounded-md bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-600"
                >
                  {{ tech }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-display text-xl font-semibold text-surface-800 mb-1 flex items-center gap-2">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 text-accent-600 text-sm" aria-hidden="true">🏢</span>
          For NGOs & companies
        </h2>
        <p class="text-sm text-surface-500 mb-5">Business and organizational products — HR, inventory, procurement, ERP, and corporate sites.</p>
        <ul class="grid gap-6 sm:grid-cols-2">
          <li
            v-for="project in companyProjects"
            :key="project.url || project.title"
            class="project-card"
          >
            <a
              :href="project.url || '#'"
              :target="project.url ? '_blank' : '_self'"
              :rel="project.url ? 'noopener noreferrer' : undefined"
              class="group p-5 sm:p-6 flex flex-col block"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                  <h3 class="font-display font-semibold text-surface-900 text-lg group-hover:text-accent-600 transition-colors">
                    {{ project.title }}
                  </h3>
                  <p v-if="project.description" class="mt-1 text-sm text-surface-500">
                    {{ project.description }}
                  </p>
                </div>
                <span v-if="project.url" class="shrink-0 text-surface-400 group-hover:text-accent-500 transition-colors" aria-hidden="true">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
              <div v-if="project.role" class="mt-3">
                <span class="text-xs font-medium text-surface-500 uppercase tracking-wider">My role</span>
                <p class="mt-0.5 text-sm font-medium text-accent-700">{{ project.role }}</p>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="inline-flex items-center rounded-md bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-600"
                >
                  {{ tech }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const publicProjects = [
  {
    title: 'Emllak',
    url: 'https://emllak.com',
    description: 'Property and real estate platform for everyone.',
    role: 'Full Stack Developer and Team Lead',
    technologies: ['Laravel', 'Vue.js', 'Supabase', 'REST API', 'File uploads', 'Search', 'Tailwind CSS'],
  },
  {
    title: 'Karwwan',
    url: 'https://karwwan.com',
    description: 'Transport and logistics application for the public.',
    role: 'Full Stack Developer and Team Lead',
    technologies: ['Laravel', 'Vue.js', 'Supabase', 'REST API', 'Maps/Geo', 'Tailwind CSS'],
  },
]

const companyProjects = [
  {
    title: 'ERP System',
    url: 'https://erp.alhawaims.com/',
    description: 'Enterprise resource planning for organizations.',
    role: 'Project Manager',
    technologies: ['Laravel', 'Vue.js', 'Supabase', 'REST API', 'Modules', 'Reporting', 'Tailwind CSS'],
  },
  {
    title: 'HRIMS',
    url: 'https://alhawaims.com/',
    description: 'HR and employee management platform for organizations.',
    role: 'Project Manager and Senior Software Developer',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Authentication', 'Tailwind CSS'],
  },
  {
    title: 'Employee Portal',
    url: 'https://alhawaemp.alhawaims.com/',
    description: 'Employee self-service and portal for organizations.',
    role: 'Project Manager and Senior Software Developer',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Authentication', 'Tailwind CSS'],
  },
  {
    title: 'Darayee — Inventory & Asset Management',
    url: 'https://daraaye.com',
    description: 'Inventory and asset management system for companies.',
    role: 'Full Stack Developer',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Firebase', 'REST API', 'Vue Router'],
  },
  {
    title: 'Procurement System',
    url: 'https://alhawas2p.com/',
    description: 'Procurement and purchasing management for NGOs and companies.',
    role: 'Project Manager and Senior Software Developer',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Workflows', 'Reporting'],
  },
  {
    title: 'Al-Hawa Technologies',
    url: 'https://alhawatechs.com',
    description: 'Company website.',
    role: 'Junior Developer',
    technologies: ['WordPress'],
  },
  {
    title: 'Al-Hawa Group of Companies',
    url: 'https://alhawagc.com',
    description: 'Corporate website.',
    role: 'Junior Developer',
    technologies: ['WordPress'],
  },
]
</script>

<style scoped>
.project-card {
  @apply rounded-xl border border-surface-200 bg-white shadow-card hover:shadow-card-hover hover:border-accent-200 transition-all duration-200 overflow-hidden flex flex-col;
}
</style>
