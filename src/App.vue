<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderMenu from "@/components/HeaderMenu.vue";
import FooterMenu from "./components/FooterMenu.vue";
</script>

<template>
    <HeaderMenu class="font-sans" />
    <body
        class="font-sans transition-all duration-150 bg-white text-gray-950 px-10 pt-32 dark:bg-gray-950 dark:text-white sm:px-40 sm:pt-24"
    >
        <RouterView />
        <FooterMenu class="py-10" />
    </body>
</template>
