<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/stores/index";

const route = useRoute();
const { projectName } = route.params as any;
const project = projects.find((project) => project.url === projectName);
</script>
<template>
    <div class="pb-10">
        <div class="px-5 sm:px-40">
            <h3
                class="mt-10 text-center text-2xl font-bold mb-10 text-yellow-500"
            >
                {{ project?.name }}
            </h3>
            <div class="mt-8">
                <h3 class="text-2xl flex items-end text-yellow-500">
                    Description
                </h3>
                <p class="text-xl mt-4">{{ project?.description }}</p>
            </div>
            <div class="mt-8">
                <h3 class="text-2xl flex items-end text-yellow-500">
                    Tech Stack
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                    <div
                        v-for="(stack, index) in project?.techStack"
                        :key="index"
                        class="p-1 px-4 rounded-full bg-yellow-500 font-bold text-center"
                    >
                        {{ stack }}
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <h3 class="text-2xl flex items-end text-yellow-500">Video</h3>
                <iframe
                    :src="project?.youtube"
                    frameborder="0"
                    allowfullscreen
                    class="mt-4 w-full h-96 rounded-lg"
                ></iframe>
            </div>
            <div class="mt-8">
                <h3 class="text-2xl flex items-end text-yellow-500">Details</h3>
                <div class="mt-4">
                    <div
                        v-for="(detail, key) in project?.details"
                        :key="key"
                        class="my-2"
                    >
                        <span class="text-xl font-extrabold mt-4"
                            ><font-awesome-icon
                                :icon="detail.icon"
                                class="mr-2 text-yellow-500"
                            ></font-awesome-icon
                            >{{ detail.title }}:</span
                        >
                        <span class="text-xl mt-4 ml-2">
                            {{ detail.value }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>