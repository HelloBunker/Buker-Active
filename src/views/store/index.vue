<template>
  <!-- <Header /> -->
  <main class="">
    <!-- banner -->
    <section class="relative flex my-4">
      <!-- semi  bannner -->
      <div
        class="semi-banner h-60 w-full lg:w-full bg-cover bg-center bg-no-repeat lg:h-70"
      ></div>

      <div
        class="c-hero-gradient-bg absolute top-0 left-0 h-60 w-full bg-cover bg-no-repeat lg:h-70"
      >
        <div class="py-20 px-6 sm:px-12 lg:px-20">
          <h1 class="md:text-6xl text-3xl font-extrabold text-secondary">
            Bunker Shop
          </h1>
          <div class="flex pt-2">
            <router-link
              to="/"
              class="text-base text-primary transition-colors hover:text-secondary"
              >Home</router-link
            >
            <span class="px-2 text-base text-white">> </span>
            <span class="text-base text-gray-300">Collection Grid</span>
          </div>
        </div>
      </div>
    </section>

    <!-- body -->
    <div class="grid lg:grid-cols-5">
      <!-- filter aside -->
      <aside
        class="col-span-1 border-solid space-y-4  flex-col px-4 border py-2  hidden lg:flex justify-start"
      >
        <!-- category filter -->
        <h3 class="text-lg font-bold uppercase mb-9">filter by</h3>

        <div class="">
          <h3 class="text-secondary-100 text-lg font-bold uppercase">
            Category
          </h3>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                Category name</label
              >
            </div>
            <b>(20)</b>
          </div>
        </div>
        <div class="">
          <h3 class="text-secondary-100 text-lg font-bold uppercase">
            Availbility
          </h3>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                In Stock</label
              >
            </div>
            <b>(20)</b>
          </div>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                Not In Stock</label
              >
            </div>
            <b>(20)</b>
          </div>
        </div>
      </aside>

      <!--product section -->
      <section class="col-span-4">
       
        <div class="">
          
          <div class="flex justify-evenly items-center shadow pb-4 bg-white ">
        <div>
          <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                 <div
        class="col-span-1 border-solid space-y-4  flex-col px-4 border py-2  flex justify-start"
      >
        <!-- category filter -->
        <h3 class="text-lg font-bold uppercase mb-9">filter by</h3>

        <div class="">
          <h3 class="text-secondary-100 text-lg font-bold uppercase">
            Category
          </h3>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                Category name</label
              >
            </div>
            <b>(20)</b>
          </div>
        </div>
        <div class="">
          <h3 class="text-secondary-100 text-lg font-bold uppercase">
            Availbility
          </h3>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                In Stock</label
              >
            </div>
            <b>(20)</b>
          </div>
          <div class="flex justify-between my-3">
            <div>
              <input type="checkbox" />
              <label for="checkbox" class="mx-2 text-secondary-100 text-sm">
                Not In Stock</label
              >
            </div>
            <b>(20)</b>
          </div>
        </div>
      </div>
               <!--  <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Deactivate account</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                    </div>
                  </div>
                </div>-->
              </div> 
             

              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <!-- <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Deactivate</button> -->
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-green-500 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
        </div>
        <div>
          <button class="px-9 py-3 text-secondary bg-green-500 md:hidden" @click="open = true">FILTER</button>
        </div>
        <div class="relative w-1/2 px-2 container">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-green-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" v-model="searchTerm" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search for products">
        </div>
    </div>
    
          <section
            class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
          >
            <div
              v-for="prod in products.product"
              :key="prod.id"
              class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <router-link :to="{ name: 'Product', params: { id: prod.id } }">
                <img
                  :src="BaseUrl + prod.product_image"
                  alt="Product"
                  class="h-80 w-72 object-cover rounded-t-xl"
                />
              </router-link>
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">{{
                  prod.category
                }}</span>
                <p
                  class="text-lg font-bold text-black truncate block capitalize"
                >
                  {{ prod.product_name }}
                </p>
                <div class="flex items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                    &#8358;{{ prod.normal_price }}
                  </p>
                  <del>
                    <p
                      class="text-sm text-gray-600 cursor-auto ml-2 text-danger"
                    >
                      &#8358;{{ prod.wholesale_price }}
                    </p>
                  </del>

                  <div class="ml-auto">
                    <button
                      class="hover:shadow-2xl hover:text-green-500"
                      @click="addToCart(prod.id)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path
                          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- pagination -->
        <div class="mx-auto flex justify-center py-16">
          <span
            class="cursor-pointer pr-5 font-hk font-semibold text-grey-darkest transition-colors hover:text-black"
            >Previous</span
          >
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white"
            >1</span
          >
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white"
            >2</span
          >
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white"
            >3</span
          >
          <span
            class="cursor-pointer pl-2 font-hk font-semibold text-grey-darkest transition-colors hover:text-black"
            >Next</span
          >
        </div>
      </section>
    </div>
  </main>
  <Footer />
</template>

<script>
// import axios from 'axios';
import ProdService from "@/services/product.service";
export default {
  // components: {  },
  data() {
    return {
      products: [],
      BaseUrl: "https://test-api.hellobunker.xyz/product/",
      loading: true,
      errored: false,
      message: [],
    };
  },

  mounted() {
    ProdService.getAllProduct()
      .then((response) => {
        console.log(response.data);
        this.products = response.data;
        console.log(this.products);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  methods: {
    addToCart(item) {
      this.$store
        .dispatch("add_cart", item)
        .then((response) => {
          console.log(response.data);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

// }
</script>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const open = ref(false)
</script>
<style lang="scss" scoped>
.dash {
  border-bottom-width: 4px;
  border-bottom-color: #7dab2e;
  width: 15%;
}

.semi-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/banner1.jpg");
  background-size: cover;
  background-position: center;
}
</style>
