<script setup lang="ts">
import { links } from "@/stores/index";
</script>

<template>
    <div>
        <h3 class="text-center text-2xl font-bold mb-10 text-yellow-500">
            CONTACT ME
        </h3>
        <div class="flex flex-wrap w-full align-middle justify-center gap-5">
            <a
                v-for="link in links"
                class="h-max text-center"
                target="_blank"
                :href="link.url"
                :key="link.id"
            >
                <font-awesome-icon
                    :icon="link.icon"
                    class="text-6xl text-center mb-2 duration-200 text-yellow-500 sm:hover:scale-110 hover:text-yellow-600"
                />
            </a>
        </div>
        <span class="text-center block mt-10 text-xs">
            Last updated on 05.02.2024 - Made by
            <a
                href="https://github.com/hicaku"
                target="_blank"
                class="text-yellow-500 hover:underline"
                >hicaku</a
            >
            with Vue 3, TypeScript, Tailwind CSS and most importantly, love
            <font-awesome-icon
                icon="fas fa-heart"
                class="text-red-500 animate-pulse duration-300"
            />
        </span>
    </div>
</template>
