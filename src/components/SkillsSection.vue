<template>
  <section class="py-8 md:py-12">
    <header class="mb-10 opacity-0 animate-fade-in-up animate-fill-both">
      <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">What I use</p>
      <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 mt-1">Skills</h1>
      <p class="mt-3 text-surface-600 max-w-2xl">Technologies and practices I work with day to day.</p>
    </header>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(category, index) in skillCategories"
        :key="category.title"
        class="skill-card rounded-xl border border-surface-200 bg-white p-6 shadow-card opacity-0 animate-scale-in animate-fill-both"
        :style="{ animationDelay: `${120 + index * 70}ms` }"
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

<style scoped>
.skill-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease;
}
.skill-card:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04);
  border-color: rgb(199 210 254);
}
</style>
