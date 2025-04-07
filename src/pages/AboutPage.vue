<script setup lang="ts">
import { skills, games } from "@/stores/index";
</script>
<template>
    <div>
        <h3 class="text-center text-2xl font-bold my-10 text-yellow-500">
    ABOUT ME
        </h3>

        <div class="max-w-5xl mx-auto text-xl space-y-6">
            <p>
                Passionate <strong>programmer</strong> with a background in <strong>physics</strong> and strong game <strong>design</strong> sensibility, 
                <strong>2.5+ years</strong> of experience building and optimizing <strong>gameplay</strong> systems, <strong>AI</strong> behaviors, <strong>UI</strong> elements, 
                and <strong>combat mechanics</strong> in <strong>Unreal Engine (C++/Blueprint)</strong>.<br><br>
                <strong>Passionate</strong> about creating immersive gaming experiences that engage players and leave a lasting impact.
            </p>
            <p>
                I recently released the FPS roguelite <strong>Revenge of the Mage</strong> in Early Access, where it received over 80% very positive reviews on Steam.
                I'm currently working on a first-person cooperative tactical shooter titled <strong>Contain</strong>.
                <br /><br />
                Please don't hesitate to reach out to me through the links at the bottom of the page.
            </p>
        </div>
        <h3 class="text-center text-2xl font-bold mt-10 text-yellow-500">
            SKILLS
        </h3>
        <div class="mt-10 flex justify-center items-center flex-wrap gap-2">
            <div
                v-for="(skill, index) in skills"
                :key="index"
                class="p-1 px-4 rounded-full bg-yellow-500 font-bold text-center"
            >
                {{ skill }}
            </div>
        </div>
        <h3 class="text-center text-2xl font-bold mt-32 text-yellow-500">
            MY FAVORITE GAMES
        </h3>
        <div class="mt-10 pb-10 flex flex-wrap h-fit">
            <div
                class="w-full h-max sm:w-1/2 lg:w-1/3 p-2"
                v-for="game in games"
                :key="game.id"
            >
                <div
                    class="bg-gray-600 dark:bg-slate-800 rounded-lg p-4 duration-200 sm:hover:scale-105"
                >
                    <h4
                        class="mb-2 text-xl text-center font-bold line-clamp-2 h-16 text-yellow-500"
                    >
                        <font-awesome-icon icon="fas fa-gamepad" />
                        <span class="ml-2">{{ game.name }}</span>
                    </h4>
                    <div class="px-0 sm:px-5">
                        <img
                            :src="game.image"
                            alt="Game"
                            class="w-full h-60 mb-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
