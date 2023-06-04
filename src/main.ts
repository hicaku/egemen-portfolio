import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
    faBars,
    faDownload,
    faX,
    faSun,
    faMoon,
    faLocationDot,
    faGamepad,
    faHandshakeAngle,
    faClock,
    faCircleInfo,
    faPeopleGroup,
    faGlobe,
    faServer,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faDiscord,
    faItchIo,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    // solid
    faBars,
    faX,
    faDownload,
    faSun,
    faMoon,
    faLocationDot,
    faGamepad,
    faHandshakeAngle,
    faClock,
    faCircleInfo,
    faPeopleGroup,
    faGlobe,
    faServer,
    // brands
    faLinkedin,
    faGithub,
    faYoutube,
    faDiscord,
    faItchIo
);

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router).component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
