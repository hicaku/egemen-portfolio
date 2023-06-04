import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/HomePage.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../pages/AboutPage.vue"),
        },
        {
            path: "/project/:projectName",
            name: "projects",
            component: () => import("../pages/ProjectPage.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: () => import("../pages/NotFoundPage.vue"),
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        } else {
            return {
                top: 0,
            };
        }
    },
});

export default router;
