<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderMenu from "@/components/HeaderMenu.vue";
</script>

<template>
    <HeaderMenu class="font-sans" />
    <body>
        <RouterView
            class="font-sans transition-all duration-150 bg-white text-gray-950 px-10 pt-32 dark:bg-gray-950 dark:text-white sm:px-40 sm:pt-24"
        />
    </body>
</template>
