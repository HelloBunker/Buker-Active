<template>
    <div class="nav px-6 py-4 lg:px-8 top-0 z-10  sticky lg:relative animated"
      :class="{ change_color: scrollPosition > 50 }">
      <div>
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
         
  
         <!-- mobile -->
          <div class="inline-flex justify-between flex-row lg:hidden">
  
           <!-- mobile nav open icon -->
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-gray-700"
              @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
            
          </div>

          <!-- mobile persion and cart icon -->
          <div class="flex justify-end items-center "> 
            <span class=" px-6 inline-flex items-center justify-center lg:hidden">
            
              
  <div class=" ">
    <button @click="showInput = !showInput" class="h-5 w-5 ">
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div v-if="showInput" class="absolute z-20 mt-2 flex w-full left-0 rounded-md shadow-sm">
      <form @submit.prevent="handleSearch" class="w-full px-3 py-2">
        <input
          v-model="searchTerm"
          type="search"
          class="form-input py-2 px-4 block w-full border-secondary-100 leading-5  transition duration-150 ease-in-out sm:text-sm sm:leading-5text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
        />
      </form>
      <div
        v-if="showDropdown"
        class="mt-1 rounded-md bg-white shadow-xs absolute z-10 w-full"
      >
        <ul v-if="searchResults.length > 0" class="py-2">
          <li v-for="result in searchResults" :key="result.id" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            {{ result.title }}
          </li>
        </ul>
        <div v-else class="px-4 py-2 text-sm leading-5 text-gray-700">No results found</div>
      </div>
    </div>
  </div>

        
            </span>
            <!-- mobile person -->
          <span class="lg:hidden">
                  <Menu as="div" class="relative px-4 inline-block text-left">
                    <div>
                      <MenuButton
                        class="-m-2.5 inline-flex w-full justify-center font-semibold capitalize  text-gray-900 hover:text-gray-900">
                        <i class="bi bi-person-circle text-xl"></i>
                        <!-- <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> -->
                      </MenuButton>
                    </div>
                    <!-- <div v-else>
                      <MenuButton
                        class="inline-flex w-full justify-center font-semibold text-gray-900 hover:text-gray-900">
                        Account
                        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                      </MenuButton>
                    </div> -->


                    <!-- mobile user drop down -->
                    <transition enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems
                        class="z-20 absolute mt-2 w-20 origin-top-left left-1/2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1" v-if="currentUser">
                          <form @submit.prevent="Logout">
                            <MenuItem v-slot="{ active }">
                            <button type="submit" :class="[
                              active
                                ? 'bg-gray-100 text-primary-100 '
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm',
                            ]">
                              Logout
                            </button>
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                            <router-link to="/profile" :class="[
                              active
                                ? 'bg-gray-100  text-primary-100 '
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]">
                              Profile</router-link>
                            </MenuItem>
                          </form>
                        </div>

                        <div class="py-1" v-else>
                          <MenuItem v-slot="{ active }" v-for="account in Account" :key="account.name">
                          <router-link :to="account.Link" :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]">
                            {{ account.name }}</router-link>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
          </span>

          <!-- mobile cart icon  -->
         <span class="lg:hidden">
          <router-link :to="{ name: 'Cart' }">
            <button
              class="  inline-flex  justify-start items-center hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
              <i class="bi bi-cart text-xl mb-1"></i>
              <span class="px-2 rounded-lg bg-primary-100  text-xs text-secondary-50   ml-[-10px] align-top">{{ cartcount
              }}</span>
            </button>
          </router-link>
          </span>
          </div>

          <!-- desktop section -->
          <div class="hidden lg:flex lg:min-w-0 items-center lg:flex-1 lg:justify-between lg:gap-x-12">
<div class="flex">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8" src="@/assets/logo1.png" alt="" />
                </a>
              </div>
            <!-- dektop links -->
            <router-link v-for="item in navigation" :key="item.name" :to="item.href"
              class="font-semibold text-gray-900 hover:text-gray-900">{{ item.name }}
            </router-link>

            <!-- destkop  serch bar -->
            <div class=" px-2  my-4 container">
              
              <input
                type="text"
                v-model="searchTerm"
                class="block p-2 pl-10 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="search for products"
              />
            </div>
            <!-- dsktop cart -->
        <div class="hidden lg:block">

          
              <router-link :to="{ name: 'Cart' }">
                <button
                  class="flex justify-between items-center rounded-lg hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-100 ">
                  <i class="bi bi-cart text-2xl mb-1"></i>
                
                  <span class="px-2 rounded-lg bg-primary-100  text-xs text-secondary-50   ml-[-10px] align-top">{{ cartcount
                  }}</span>
                </button>
              </router-link>
            </div>

            <!-- user account desktop -->
            <span>
              <Menu as="div" class="relative inline-block text-left">
                <div v-if="currentUser">
                  <MenuButton
                    class="inline-flex w-full justify-center font-semibold capitalize text-gray-900 hover:text-gray-900">
                    {{ currentUser.useri.first_name }}
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                </div>
                <div v-else>
                  <MenuButton class="inline-flex w-full justify-center font-semibold text-gray-900 hover:text-gray-900">
                    Account
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                </div>
  
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" v-if="currentUser">
                      <form @submit.prevent="Logout">
                        <MenuItem v-slot="{ active }">
                        <button type="submit" :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm',
                        ]">
                          Logout
                        </button>
                        </MenuItem>
  
                        <MenuItem v-slot="{ active }">
                        <router-link to="/profile" :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]">
                          Profile</router-link>
                        </MenuItem>
                      </form>
                    </div>
  
                    <div class="py-1" v-else>
                      <MenuItem v-slot="{ active }" v-for="account in Account" :key="account.name">
                      <router-link :to="account.Link" :class="[
                        active
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]">
                        {{ account.name }}</router-link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </span>
          </div>
  
          
        </nav>
        <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div class="flex h-9 items-center justify-between">
              <div class="flex">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8" src="@/assets/logo1.png" alt="" />
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
                <!-- <div class="py-6">
<button class="bg-green-500 text-secondary-50   px-9 py-4 rounded-lg hover:bg-secondary-50  -100">Become A Member</button>
  
                </div> -->
              </div>
              <!-- <div class=" px-2  my-4 container">
              
              <input
                type="text"
                v-model="searchTerm"
                class="block p-2 pl-10 w-2/3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="search"
              />
            </div> -->
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
    <!-- <span v-for="user in users" :key ="user.first_name">{{user.first_name}}</span> -->
    <!-- content -->
    <router-view></router-view>
    <Footer />
  </template>
  
  <script setup>
  import { ref} from "vue";
  import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
  import { ChevronDownIcon } from "@heroicons/vue/20/solid";
  import { Dialog, DialogPanel } from "@headlessui/vue";
  import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
  import Footer from "@/components/layouts/Footer.vue";

  
  
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "" },
   
  ];
  const Account = [
    { name: "Login", Link: "login" },
    { name: "Signup", Link: "signup" },
    // { name: "User Dashboard", Link: "/profile" },
    // { name: "Admin Dashboard", Link: "customer_ipndex" },
    // { name: "forget password", Link: "forgetpassword" },
  ];
  
  const mobileMenuOpen = ref(false);
  </script>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: null,
        cartcount: 0,
        searchTerm: '',
      searchResults: [],
      showInput: false,
      showDropdown: false,
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
     cartCount()  {
        return this.$store.state.cartCount
  
      }
    },
    watch: {
      cartcount(newValue, oldValue) {
        // Code to run when the data changes
        console.log(newValue,oldValue)
      }
    },
  
    
  
   created() {
      window.addEventListener("scroll", this.updateScroll);
      //  console.log(this.currentUser.useri.first_name)
      this.$store.dispatch('view_cart')
        .then(response => {
          console.log(response.data.data);
          if (this.currentUser ) {
        // console.log(this.cartCount);
        this.cartcount = response.data.data.length; 
        console.log(this.cartcount)
      }
        }).catch(error => {
          console.log(error);
        });
    },
    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY;
      },
  
      Logout() {
  
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push("/login");
        });
  
    }
  
    }
  
  
  
  }
  </script>
  
  <style lang="scss" scoped>
  .nav.change_color {
    background: rgb(231, 231, 230);
    border-bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  </style>
  