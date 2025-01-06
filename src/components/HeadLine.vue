<template>
    <div class="flex flex-col gap-8 p-6">
        <div class="left-column">
            <h4 class="text-2xl font-bold mb-4">Full Stack Developer</h4>
            <p class="mb-4">
                My name is Amir Hussain Habibi, and I hold a Bachelor's degree in Computer Science from Kabul
                Polytechnic University, which I completed in 2022. As a Full Stack Web Developer with over three years
                of hands-on experience, I specialize in designing and developing a variety of websites and web
                applications. My primary stack includes Laravel and Vue.js, and I also have expertise in CodeIgniter,
                Firebase, React, and WordPress. I am passionate about creating efficient, user-friendly solutions that
                meet the unique needs of each project.
            </p>
            <p>
                I have worked on various types of web applications, such  <a href="http://emllak.com" target="_blank"
                class="text-blue-600 hover:underline">Emllak</a>, <a href="http://karwwan.com"
                class="text-blue-600 hover:underline" target="_blank">Karwwan</a>, <a href="http://daraaye.com"
                class="text-blue-600 hover:underline">Darayee</a> , <a href="http://alhawaims.com" target="_blank"
                class="text-blue-600 hover:underline">HRIMS</a> platforms, <a href="http://alhawatechs.com"
                class="text-blue-600 hover:underline" target="_blank">Al-Hawa
                Technologies</a> website and <a href="http://alhawagc.com" class="text-blue-600 hover:underline"
                target="_blank">Al-Hawa Group of Companies</a> website.
            </p>
            <br>
            <hr>
        </div>
        <div class="right-column">
            <img :src="profile" alt="Profile" class="w-full rounded-lg shadow-lg" />
        </div>
    </div>
</template>

<script setup>
import profile from "@/assets/img.jpg"

</script>