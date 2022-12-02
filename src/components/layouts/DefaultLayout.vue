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
            <router-link v-for="item in navigation" :key="item.name" :to="item.href"
              class="font-semibold text-gray-900 hover:text-gray-900">{{ item.name }} </router-link>
            <!-- acc -->
            <span>
              <button id="AccLink" data-dropdown-toggle="Account"
                class="flex  justify-between w-full md:w-auto items-center font-semibold text-gray-900 hover:text-gray-900">Account<svg
                  class="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg></button>
              <!-- Dropdown menu -->
              <div id="Account" class="hidden z-10 w-44 font-normal bg-secondary rounded divide-y divide-gray-100 shadow"
                data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom"
                style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 10px);">
                <ul class="py-1 text-sm text-gray-700 " aria-labelledby="AccLink">
                  <li v-for="account in  Account" :key="account.name">
                    <router-link :to="account.Link" class="block py-2 px-4 hover:bg-gray-100 ">
                      {{ account.name }}
                    </router-link>
                  </li>
  
                </ul>
  
              </div>
            </span>
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
                  <router-link v-for="item in Account" :key="item.name" :to="item.Link"
                    class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{
      item.name
                    }} </router-link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>

    <!-- content -->
    <router-view></router-view>
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
  const Account = [
    { name: "Login", Link: "login" },
    { name: "Signup", Link: "signup" },
    { name: "User Dashboard", Link: "/profile" },
    { name: "Admin Dashboard", Link: "customer_index" },
    { name: "forget password", Link: "forgetpassword" },
  
  ]
  
  
  
  const mobileMenuOpen = ref(false);
  
  
  </script>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: null
      }
    },
  
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
      console.log(1);
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
  
    }
  
  }
  
  </script>
  
  <style lang="scss" scoped>
  .nav.change_color {
    background: rgb(231, 231, 230);
    border-bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  </style>