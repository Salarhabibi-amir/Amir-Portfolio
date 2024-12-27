<template>
    <nav class="border-blue-200 bg-blue-50 dark:bg-blue-800 dark:border-blue-700">
        <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center rounded space-x-3 rtl:space-x-reverse">
                <img :src="profile" class="w-12 h-13 rounded-full" alt="" />
                <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Amir Hussain
                    Habibi</span>
            </a>
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg" :aria-expanded="isOpen">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="{ 'hidden': !isOpen }" class="w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul
                    class="flex flex-col font-medium mt-4  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'home' }"
                            class="block py-1 px-2 md:p-0 text-xs text-white bg-purple-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                            aria-current="page">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects' }"
                            class="block py-1 px-2 md:p-0 text-gray-900 text-xs rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects
                            and Experience</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contact' }"
                            class="block py-1 px-2 md:p-0 text-gray-900 text-xs rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Reach
                            out</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue'
import profile from "@/assets/profile.jpg"
const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>