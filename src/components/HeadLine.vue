<template>
  <section class="py-8 md:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
      <div class="lg:col-span-3 space-y-6">
        <p class="font-display text-accent-600 font-semibold text-sm uppercase tracking-wider">Full Stack Developer</p>
        <h1 class="font-display text-3xl sm:text-4xl font-bold text-surface-900 leading-tight">
          Hi, I'm Amir Hussain Habibi
        </h1>
        <div class="space-y-4 text-surface-600 leading-relaxed">
          <p>
            I hold a Bachelor's degree in Computer Science from Kabul Polytechnic University (2022). With over three years of experience, I design and build websites and web applications. My core stack is <strong class="text-surface-800">Laravel</strong> and <strong class="text-surface-800">Vue.js</strong>, and I also work with CodeIgniter, Firebase, React, and WordPress. I focus on efficient, user-friendly solutions tailored to each project.
          </p>
          <p>
            I've delivered projects such as <a href="https://emllak.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">Emllak</a>, <a href="https://karwwan.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">Karwwan</a>, <a href="https://daraaye.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">Darayee</a>, <a href="https://alhawaims.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">HRIMS</a>, <a href="https://alhawatechs.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">Al-Hawa Technologies</a>, and <a href="https://alhawagc.com" target="_blank" rel="noopener noreferrer" class="text-accent-600 hover:text-accent-700 font-medium underline decoration-accent-200 hover:decoration-accent-400 underline-offset-2 transition-colors">Al-Hawa Group of Companies</a>.
          </p>
        </div>
      </div>
      <div class="lg:col-span-2 flex justify-center lg:justify-end">
        <div class="relative">
          <img
            :src="profile"
            alt="Amir Hussain Habibi"
            class="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl object-cover shadow-card-hover ring-1 ring-surface-200"
          />
          <div class="absolute -z-10 -inset-4 rounded-3xl bg-accent-100/60 blur-xl" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '@/assets/img.jpg'
</script>
