<script setup lang="ts">
import { skills, games } from "@/stores/index";
</script>
<template>
    <div>
        <h3 class="text-center text-2xl font-bold my-10 text-yellow-500">
            ABOUT ME
        </h3>
        <p class="text-xl">
            I am a passionate gamer and a programmer with a strong interest in
            game design. After graduating as a Physics Engineer from one of the
            top schools in Turkey, I decided to pursue my true passion: game
            development. I have one and a half years of experience with Unreal
            Engine (C++ / Blueprint). I live with the dream of making games
            worth the players' time and offering them unforgettable experiences,
            similar to the experiences I am having with my favorite games.
        </p>
        <p class="text-xl mt-10">
            I am currently working on a Battle Royale/MOBA game called 'Hit and
            Boom' using Unreal Engine. Throughout the project, I have actively
            contributed to various aspects, including gameplay, AI, and UI. My
            primary focus has been on player abilities, where I've been involved
            in developing new abilities and addressing bugs. Additionally, I
            have worked on UI elements and enhanced my network programming
            skills to accommodate the multiplayer nature of the game. One of the
            key highlights of my contributions to this project is the design and
            programming of the game's AI, where I had the freedom to create the
            system from scratch.
            <br />
            <br />Please don't hesitate to reach out to me through the links at
            the bottom of the page.
        </p>
        <h3 class="text-center text-2xl font-bold my-10 text-yellow-500">
            SKILLS
        </h3>
        <div class="mt-10 flex flex-wrap gap-2">
            <div
                v-for="(skill, index) in skills"
                :key="index"
                class="p-1 px-4 rounded-full bg-yellow-500 font-bold text-center"
            >
                {{ skill }}
            </div>
        </div>
        <h3 class="text-center text-2xl font-bold my-10 text-yellow-500">
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
