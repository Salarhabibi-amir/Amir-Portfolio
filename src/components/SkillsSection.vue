<template>
  <section class="py-8 md:py-12">
    <header class="mb-10">
      <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">What I use</p>
      <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 mt-1">Skills</h1>
      <p class="mt-3 text-surface-600 max-w-2xl">Technologies and practices I work with day to day.</p>
    </header>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="rounded-xl border border-surface-200 bg-white p-6 shadow-card"
      >
        <h2 class="font-display font-semibold text-surface-900 text-lg flex items-center gap-2">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 text-accent-600" aria-hidden="true">
            {{ category.icon }}
          </span>
          {{ category.title }}
        </h2>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="skill in category.skills"
            :key="skill"
            class="inline-flex rounded-md bg-surface-100 px-3 py-1.5 text-sm font-medium text-surface-700"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Laravel', 'PHP', 'CodeIgniter', 'REST APIs', 'Authentication', 'File Storage'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['Vue.js', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Database & Services',
    icon: '🗄️',
    skills: ['MySQL', 'Firebase', 'Redis', 'Migrations', 'Query optimization'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'NPM', 'Composer', 'Linux', 'VS Code'],
  },
  {
    title: 'CMS & Other',
    icon: '📄',
    skills: ['WordPress', 'Headless CMS', 'Third-party APIs'],
  },
  {
    title: 'Leadership & Delivery',
    icon: '👥',
    skills: ['Project Management', 'Team Leadership', 'Agile', 'Sprint Planning', 'Code Review', 'Mentoring'],
  },
]
</script>
