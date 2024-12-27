<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div class="left-column">
            <h4 class="text-2xl font-bold mb-4">Full Stack Developer</h4>
            <p class="mb-4">
                I am Amir Hussain Habibi.I got my bachelor degree in Computer Science in 2022 from KPU( Kabul
                Polytechnic University). I am a Full Stack Web Developer with more than three years of experience in
                designing and
                developing different websites, Web applications, databases.
            </p>
            <p>
                I have worked on different type of web applications, such us <a href="http://emllak.com" target="_blank"
                    class="text-blue-600 hover:underline">Emllak</a>, <a href="http://karwwan.com"
                    class="text-blue-600 hover:underline" target="_blank">Karwwan</a>, <a href="http://daraaye.com"
                    class="text-blue-600 hover:underline">Darayee</a> and <a href="http://alhawaims.com" target="_blank"
                    class="text-blue-600 hover:underline">HRIMS</a> platforms, Also these websites <a
                    href="http://alhawatechs.com" class="text-blue-600 hover:underline" target="_blank">Al-Hawa
                    Technologies</a> and <a href="http://alhawagc.com" class="text-blue-600 hover:underline"
                    target="_blank">Al-Hawa Group of Companies</a>.
            </p>
        </div>
        <div class="right-column">
            <img :src="profile" alt="Profile" class="w-full rounded-lg shadow-lg" />
        </div>
    </div>
</template>

<script setup>
import profile from "@/assets/img.jpg"

</script>