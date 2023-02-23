<template>

    <nav
        class=" bg-secondary text-gray-100 py-3 6 px-6 md:shadow-none sm:shadow md:flex justify-between items-center top-0 z-50  sticky md:relative">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <router-link to="/" class="flex items-center">
                <img src="@/assets/logo1.png" class="mr-3 h-4 sm:h-12" alt=" Logo">
            </router-link>
            <div class="md:hidden ml-3 inline-flex justify-center items-center">
                <router-link to="cart">
                <button class=" inline-flex justify-center items-center   rounded-lg  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
                <i class="bi bi-cart text-2xl mb-1"></i> 
                <span class="px-2 rounded-lg bg-primary text-xs text-secondary ml-[-10px] align-top">1</span>  

                </button>
            </router-link>
                <button data-collapse-toggle="mobile-menu" type="button"
                    class="inline-flex justify-center  items-center ml-3  rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary "
                    aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>

                    <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>

                </button>
            </div>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul
                    class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                    <li>
                        <router-link to=""
                            class="block py-2 pr-4 pl-3 text-primary bg-secondary rounded md:bg-transparent md:text-secodary md:p-0"
                            aria-current="page">Home</router-link>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto ">Categories<svg
                                class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg></button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar"
                            class="hidden z-10 w-44 font-normal bg-secondary rounded divide-y divide-gray-100 shadow"
                            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 10px);">
                            <ul class="overflow-y-auto h-48 py-1 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                                <li class="" v-for="category in  Categories" :key="category.name">
                                    <router-link
                                     :to="category.Link"
                                      class="block py-2 px-4 hover:bg-gray-100 ">{{category.name}}
                                    </router-link>
                                </li>
                             </ul>
                                                    </div>
                    </li>
                    <li>
                        <button id="AccLink" data-dropdown-toggle="Acc"
                            class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto ">Account<svg
                                class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg></button>
                        <!-- Dropdown menu -->
                        <div id="Acc"
                            class="hidden z-10 w-44 font-normal bg-secondary rounded divide-y divide-gray-100 shadow"
                            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 10px);">
                            <ul class="py-1 text-sm text-gray-700 " aria-labelledby="AccLink">
                                <li v-for="account in  Account" :key="account.name">
                                    <router-link
                                     :to="account.Link"
                                      class="block py-2 px-4 hover:bg-gray-100 "
                                      >
                                      {{account.name}}
                                    </router-link>
                                </li>
                                
                            </ul>
                           
                        </div>
                    </li>
                    <!-- pagees -->
                    <li>
                        <button id="pagesLink" data-dropdown-toggle="pages"
                            class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto ">Pages<svg
                                class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg></button>
                        <!-- Dropdown menu -->
                        <div id="pages"
                            class="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow"
                            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 10px);">
                            <ul class="py-1 text-sm text-gray-700 " aria-labelledby="pagesLink">
                                <li v-for="page in Pages" :key="page.name" >
                                    <router-link
                                     :to="page.Link"
                                      class="block py-2 px-4 hover:bg-gray-100 "
                                      >
                                      {{page.name}}
                                    </router-link>
                                </li>
                                
                            </ul>
                           
                        </div>
                    </li>
                   
                    <li>
                        <router-link to=""
                            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ">
                            Contact</router-link>
                    </li>
                </ul>
            </div>
            <div class="hidden md:block">
                <router-link to="cart">
                <button class=" inline-flex justify-center items-center   rounded-lg  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
                <i class="bi bi-cart text-2xl mb-1"></i> 
                <span class="px-2 rounded-lg bg-primary text-xs text-secondary ml-[-10px] align-top">1</span>  
                </button>
            </router-link>
            </div>
        </div>
    </nav>

</template>

<script>
import { ref } from "vue"
import Button from "@/components/utilities/Button.vue"
export default {
    components: {
        Button
    },
    setup() {
       
        let Categories = [
            { name: "Cereal and Breakfast", Link: "category" },
            { name: "Foodstuff", Link: "category" },
            { name: "BUNKR Subscription Plan", Link: "category" },
            { name: "Yoghurt and milk", Link: "category" },
            { name: "Extras", Link: "category" },
            { name: "Salt and Sugar", Link: "category" },
            { name: "Baby Food", Link: "category" },
            { name: "Cooking oilNoodles and Pasta", Link: "category" },
            { name: "Seasoning", Link: "category" },
            { name: "Beverages and Tea", Link: "category" },
            { name: "Drinks", Link: "category" },
        ]
        let Account = [
            { name: "Login", Link: "login" },
            { name: "Signup", Link: "signup" },
            { name: "User Dashboard", Link: "/profile" },
            { name: "Admin Dashboard", Link: "customer_index"},
            { name: "forget password", Link: "forgetpassword"},
          
        ]
        let Pages = [
            { name: "Product Page", Link: "shop/product" },
            { name: "Faq", Link: "shop/faq" },
            { name: "Privacy Policy", Link: "shop/policy" },
            { name: "Landing Page", Link: "/" },
        ]

       
        return { Categories,Account,Pages, }
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