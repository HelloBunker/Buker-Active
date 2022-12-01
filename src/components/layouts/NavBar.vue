<template>
  <div class="nav px-6 py-4 lg:px-8  top-0 z-20  sticky md:relative animated"
   :class="{ 'change_color': scrollPosition > 50 }">
    <div>
      <nav class="flex h-9 items-center justify-between " aria-label="Global">
        <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8" src="../../assets/logo1.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">

          <router-link to="cart">
            <button
              class=" inline-flex justify-center items-center px-2  rounded-lg  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
              <i class="bi bi-cart text-xl mb-1"></i>
              <span class="px-2 rounded-lg bg-primary text-xs text-secondary ml-[-10px] align-top">1</span>

            </button>
          </router-link>

          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="font-semibold text-gray-900 hover:text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <div class="hidden lg:block">
            <router-link to="cart">
              <button
                class=" inline-flex justify-center items-center   rounded-lg  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary">
                <i class="bi bi-cart text-2xl mb-1"></i>
                <span class="px-2 rounded-lg bg-primary text-xs text-secondary ml-[-10px] align-top">1</span>
              </button>
            </router-link>
          </div>
        </div>
      </nav>
      <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex h-9 items-center justify-between">
            <div class="flex">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8" src="../../assets/logo1.png" alt="" />
              </a>
            </div>
            <div class="flex">
              <button type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{
                      item.name
                  }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Shop", href: "#" },
  { name: "Features", href: "#" },
  { name: "Contact", href: "#" },
  { name: "About", href: "#" },
];



const mobileMenuOpen = ref(false);


</script>

<script>
export default {
  data ()  {
    return{
    scrollPosition: null
    }
  },

 mounted () {
    window.addEventListener('scroll', this.updateScroll);
    console.log(1);
  },
  methods: {
    updateScroll(){
      this.scrollPosition = window.scrollY
    }
   
    }
  
  }  

</script>

<style lang="scss" scoped>
.nav.change_color {
 background:rgb(231, 231, 230);
  border-bottom: 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 }
</style>