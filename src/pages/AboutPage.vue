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
            I have been interested in game development for a long time. My first
            experience was with Valve's "Hammer" Editor, but I later moved to
            GameMaker and Unity where I started to learn how to program. In
            university, I initially studied Game Design, but it was during my
            time there that I realized programming was what I enjoyed most about
            developing games.
        </p>
        <p class="text-xl mt-10">
            I've made it a personal goal to be programming language and
            game-engine agnostic, as some are better suited for certain tasks
            than others, and they all come with their own pros & cons. I strive
            to always improve upon my own skills, and like to try different
            approaches to problems I have encountered before. In a team I try to
            help out whenever I have time, as solving problems together is both
            fun and an opportunity to learn something new!
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
