<script setup lang="ts">
import { skills, games } from "@/stores/index";
</script>
<template>
    <div>
        <div
            class="my-10 box mx-auto h-80 relative rounded-lg border-yellow-500 overflow-hidden sm:w-1/2"
        >
            <img
                src="images/egemen.jpg"
                alt="Egemen"
                class="landing-image absolute block h-24 w-24"
            />
        </div>
        <h3 class="text-center text-2xl font-bold mb-10 text-yellow-500">
            ABOUT ME
        </h3>
        <p class="text-xl">
            I am a passionate gamer and a game developer. After graduating as a Physics Engineer at one of the top schools in Turkey, I decided to follow my real passion, game programming. 
            I have one year of experience with game programming using Unreal Engine (C++/Blueprints). I live with the dream of making games worth the players' time and offering them unforgettable experiences, similar to the experiences I am having with my favorite games.
        </p>
        <p class="text-xl mt-10">
            Over the last year, I made various projects both individually and as a part of a team. Presently, I am employed by a company where I contribute to the development of player abilities utilizing the Gameplay Ability System (GAS) framework for a MOBA game called Hit&Boom.
            Additionally, outside of my regular working hours, I hold the position of Lead Developer for an indie game project. Our objective is to release a demo on Steam NextFest in October. I invite you to explore my work, particularly a project titled "Hear Me Not," which can be found in the Featured Projects section of this website.
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
    </div>
</template>
<style>
.box {
    box-shadow: inset 0 0 20px rgb(234 179 8);
}

.landing-image {
    mask: url(@/assets/images/mask.png) no-repeat center;
    -webkit-mask: url(@/assets/images/mask.png) no-repeat center;
    mask-size: cover;
}

.box img {
    -webkit-animation: moveX 2s linear 0s infinite alternate,
        moveY 3.4s linear 0s infinite alternate;
    -moz-animation: moveX 2s linear 0s infinite alternate,
        moveY 3.4s linear 0s infinite alternate;
    -o-animation: moveX 2s linear 0s infinite alternate,
        moveY 3.4s linear 0s infinite alternate;
    animation: moveX 2s linear 0s infinite alternate,
        moveY 3.4s linear 0s infinite alternate;
}

@-webkit-keyframes moveX {
    from {
        left: 0;
    }
    to {
        left: calc(100% - 6rem);
    }
}
@-moz-keyframes moveX {
    from {
        left: 0;
    }
    to {
        left: calc(100% - 6rem);
    }
}
@-o-keyframes moveX {
    from {
        left: 0;
    }
    to {
        left: calc(100% - 6rem);
    }
}
@keyframes moveX {
    from {
        left: 0;
    }
    to {
        left: calc(100% - 6rem);
    }
}

@-webkit-keyframes moveY {
    from {
        top: 0;
    }
    to {
        top: calc(100% - 6rem);
    }
}
@-moz-keyframes moveY {
    from {
        top: 0;
    }
    to {
        top: calc(100% - 6rem);
    }
}
@-o-keyframes moveY {
    from {
        top: 0;
    }
    to {
        top: calc(100% - 6rem);
    }
}
@keyframes moveY {
    from {
        top: 0;
    }
    to {
        top: calc(100% - 6rem);
    }
}
</style>
