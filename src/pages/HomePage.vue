<script setup lang="ts">
import ContactMe from "@/components/ContactMe.vue";
import FeaturedProjects from "@/components/FeaturedProjects.vue";
import SmallProjects from "@/components/SmallProjects.vue";

const downloadCV = () => {
    console.log("Coming soon!");
};
</script>

<template>
    <main>
        <div class="flex flex-col justify-center gap-10 sm:flex-row sm:gap-20">
            <div class="my-auto text-center sm:text-right">
                <h2 class="text-4xl font-bold mt-20 sm:mt-0">
                    Hi, I'm
                    <span class="text-yellow-500">Egemen!</span>
                </h2>
                <p class="text-2xl">
                    I'm a
                    <span class="text-yellow-500">game developer</span>
                    based
                </p>
                <p class="text-2xl">
                    in
                    <font-awesome-icon
                        icon="fas fa-location-dot"
                        class="text-yellow-500"
                    />
                    Istanbul, Turkey.
                </p>
                <div
                    class="flex justify-center gap-2 mt-4 flex-col lg:flex-row sm:justify-end"
                >
                    <RouterLink
                        to="/about"
                        class="text-center font-bold py-2 px-4 rounded-full duration-200 sm:hover:scale-105 bg-yellow-500 text-white hover:bg-yellow-600"
                        >About Me</RouterLink
                    >
                    <button
                        class="font-bold py-2 px-4 rounded-full duration-200 sm:hover:scale-105 bg-yellow-500 text-white hover:bg-yellow-600"
                        @click="downloadCV"
                    >
                        <font-awesome-icon
                            icon="fas fa-download"
                            class="text-white"
                        />
                        Download CV
                    </button>
                </div>
            </div>
            <img
                src="images/egemen.jpg"
                alt="Egemen"
                class="landing-image h-full w-96 mx-auto sm:mx-0"
            />
        </div>
        <blockquote class="text-2xl italic text-center">
            I'm a game developer with a special interest in gameplay systems. I
            love transforming an abstract gameplay idea into a concrete system
            that the player can interact with. Programming new systems and seeing them work is the best!
        </blockquote>
        <FeaturedProjects class="pt-10" id="featuredProjects" />
        <SmallProjects class="pt-10" />
        <ContactMe class="py-10" />
    </main>
</template>
<style scoped>
.landing-image {
    mask: url(@/assets/images/mask.png) no-repeat center;
    -webkit-mask: url(@/assets/images/mask.png) no-repeat center;
    mask-size: cover;
}
</style>
