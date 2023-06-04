<script setup lang="ts">
import { projects } from "@/stores/index";
</script>

<template>
    <div>
        <h3 class="text-center text-2xl font-bold mb-10 text-yellow-500">
            FEATURED PROJECTS
        </h3>
        <div class="flex flex-wrap h-fit">
            <RouterLink
                :to="'project/' + project.url"
                class="w-full h-max sm:w-1/2 lg:w-1/3 p-2"
                v-for="project in projects"
                :key="project.id"
            >
                <div
                    class="bg-gray-600 dark:bg-slate-800 rounded-lg p-4 duration-200 sm:hover:scale-105"
                >
                    <h4
                        class="mb-2 text-xl text-center font-bold line-clamp-2 h-16 text-yellow-500"
                    >
                        <font-awesome-icon icon="fas fa-gamepad" />
                        <span class="ml-2">{{ project.name }}</span>
                    </h4>
                    <img
                        :src="project.image"
                        alt="Game"
                        class="rounded-lg w-full h-auto max-h-80 mb-2"
                    />
                    <p class="text-gray-200 line-clamp-4 h-24">
                        {{ project.shortDescription }}
                    </p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
