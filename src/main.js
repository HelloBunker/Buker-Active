import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import  '@/assets/styles/tailwind.css'
// import  '@/assets/styles/main.css'
import  '@/assets/scripts/flowbite.js'
import  '@/assets/styles/flowbite.min.css'


createApp(App).use(router).mount('#app')
