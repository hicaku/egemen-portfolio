<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import { skills, games } from "@/stores/index";
</script>
<template>
    <div>
        <h3 class="text-center text-2xl font-bold mb-10 text-yellow-500">
            ABOUT ME
        </h3>
        <p class="text-xl">
            I am a passionate gamer and a game developer. After graduating as a
            Physics Engineer at one of the top schools in Turkey, I decided to
            follow my real passion, game programming. I have one year of
            experience with game programming using Unreal Engine
            (C++/Blueprints). I live with the dream of making games worth the
            players' time and offering them unforgettable experiences, similar
            to the experiences I am having with my favorite games.
        </p>
        <p class="text-xl mt-10">
            Over the last year, I made various projects both individually and as
            a part of a team. Presently, I am employed by a company where I
            contribute to the development of player abilities utilizing the
            Gameplay Ability System (GAS) framework for a MOBA game called
            Hit&Boom. Additionally, outside of my regular working hours, I hold
            the position of Lead Developer for an indie game project. Our
            objective is to release a demo on Steam NextFest in October. I
            invite you to explore my work, particularly a project titled "Hear
            Me Not," which can be found in the Featured Projects section of this
            website.
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
                    <div class="px-20 sm:px-5">
                        <img
                            :src="game.image"
                            alt="Game"
                            class="w-full h-60 mb-2"
                        />
                    </div>
                </div>
            </div>
        </div>
        <ContactMe class="pb-10" />
    </div>
</template>
