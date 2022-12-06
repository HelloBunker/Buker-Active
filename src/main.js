import { createApp } from "vue";

import { createPinia } from "pinia";
import "@/axios";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/styles/tailwind.css";
// import  '@/assets/styles/main.css'
import "@/assets/scripts/flowbite.js";
import "@/assets/styles/flowbite.min.css";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(store)
app.use(router);
app.mount("#app");
