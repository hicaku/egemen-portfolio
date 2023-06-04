<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useIndexStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useIndexStore();
const { theme } = storeToRefs(store);

const isLightCheck = ref(true as boolean);
if (theme.value === "dark") {
    document.documentElement.classList.toggle("dark");
    isLightCheck.value = false;
}

const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    theme.value = theme.value === "light" ? "dark" : "light";
};
</script>

<template>
    <header
        class="fixed bg-gray-600 text-white w-full px-10 py-5 flex flex-col gap-8 justify-between items-center z-50 dark:bg-slate-800 dark:text-gray-200 sm:px-40 sm:flex-row sm:items-end"
    >
        <a class="text-xl flex items-end" href="/">
            <span
                class="font-bold text-4xl"
                :class="[
                    theme === 'light' ? 'text-yellow-300 ' : 'text-yellow-500',
                ]"
                >E</span
            >gemen
            <span
                class="font-bold text-4xl ml-1"
                :class="[
                    theme === 'light' ? 'text-yellow-300 ' : 'text-yellow-500',
                ]"
                >T</span
            >on
        </a>
        <div class="flex gap-4 relative">
            <nav class="flex gap-4 items-center">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink :to="{ name: 'home', hash: '#featuredProjects' }"
                    >Projects</RouterLink
                >
            </nav>
            <input
                type="checkbox"
                class="checkbox opacity-0 absolute right-0"
                id="chk"
                v-model="isLightCheck"
                @change="changeTheme"
            />
            <label
                class="label rounded-3xl cursor-pointer flex items-center justify-between p-1 relative h-6 w-12 scale-150 ml-4"
                :class="[
                    theme === 'light'
                        ? 'text-yellow-300 bg-slate-500'
                        : 'text-yellow-400 bg-black',
                ]"
                for="chk"
            >
                <font-awesome-icon icon="fa-solid fa-sun" />
                <font-awesome-icon icon="fa-solid fa-moon " />
                <div
                    class="ball bg-white rounded-full absolute top-0.5 left-0.5 h-5 w-5 translate-x-0 transition-all duration-200"
                ></div>
            </label>
        </div>
    </header>
</template>

<style scoped>
.checkbox:checked + .label .ball {
    transform: translateX(24px);
}
</style>
