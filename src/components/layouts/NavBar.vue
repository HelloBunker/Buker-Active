<template>
    <div class=" bg-white text-gray-100  py-0 px-14 shadow md:flex justify-between items-center top-0 z-50 sticky md:relative ">
        <div class="flex items-center">
            <span class="text-primary text-xl mr-1">
                <img src="@/assets/logo1.png" alt="" srcset="">
            </span>
        </div>
        <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl text-primary">
            <i :class="[open ? 'bi bi-x': 'bi bi-filter-left']"></i>
        </span>
        <ul class="md:flex md:bg-white-100 md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static relative
        md:w-auto w-full top-5 duration-700 ease-in"  :class="[open ? 'left-0' : 'hidden']">
            <li class="md:mx-4 md:my-0 my-6" v-for="links in Links" :key="links.name">
                <a 
                :href="links.Link" 
                class="text-xl  link-underline link-underline-black"
                >{{ links.name }}
            </a>
            </li>
            <Button theme="primary" content="Warehouse Club"/>
        </ul>



    </div>
</template>

<script>
import { ref } from "vue"
import Button from "@/components/utilities/Button.vue"
export default {
    components:{
Button
    },
    setup() {
        let open = ref(false)
        let Links = [
            { name: "Home", Link: "#" },
            { name: "About", Link: "#about" },
            //{ name: "Plan", Link: "#plan" },
            { name: "Shop", Link: "#"},
            { name: "Contact", Link: "#contact" },
        ]

        function MenuOpen(){
            open.value =!open.value
        }
        return { Links , open, MenuOpen}
    }
}
</script>



<style lang="scss" scoped>
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#7DAB2E, #7DAB2E)
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>