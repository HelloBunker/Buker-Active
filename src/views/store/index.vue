<template>
  <main class="container ">
    <section class="flex flex-col  justify-between h-52">







      <div class=" px-7 md:py-4 py-2">
        <h3 class="text-lg text-primary">Shop</h3>
        <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <router-link :to="{ name: 'Home' }"
                class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-primary ">
                <svg aria-hidden="true" class="w-2 h-2 mr-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                  </path>
                </svg>
                Home
              </router-link>
            </li>

            <li aria-current="page">
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="ml-1 text-xs font-medium text-gray-500 md:ml-2 ">Shop</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>






      <div class="lg:row-span-1  px-7  lg:pt-24 py-5 flex flex-row  justify-between md:items-center">
        <div>
          <h3 class='text-sm  text-primary font-bold'>Bunker Shop Items</h3>
          <small class="text-secondary-100 italic text-xs">20 products</small>
        </div>
        <div class="md:flex-row lg:flex flex-col justify-start  hidden ">
          <div class="flex flex-row justify-center items-center">
            <span class="text-primary text-xs font-bold">Per Page:</span>

            <select class="w-4 form-select text-secondary-100 border-0 h-4">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <div class="flex flex-row justify-center items-center">
            <span class="text-primary text-xs font-bold">Sort By:</span>

            <select class="w-4 form-select focus:text-secondary-100 text-secondary-100 border-0 h-4">
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
              <option>Date</option>
            </select>
          </div>
        </div>

        <div class="block lg:hidden">
          <button class="bg-secondary-100 hover:bg-green-400 text-base text-secondary p-2" v-on:click="toggleFilter()">
            <i class="bi bi-filter"></i>Filter
          </button>
          <div v-if="ShowFilter"
            class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-md md:h-auto">
              <!--content-->
              <div class="relative bg-white rounded-lg shadow ">
                <!--header-->
                <button type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  @click="toggleFilter()">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <section class="grid p-7  justify-between  ">
                  <div class="">
                    <div class="mb-4">

                      <h3 class=" font-semibold text-primary  text-sm underline-secondary-100">Categories</h3>
                      <p class="mb-4 ">
                        <svg width="70" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="0.5" x2="134" y2="0.5" stroke="black" />
                        </svg>
                      </p>
                      <ul class="w-48 text-sm font-medium text-gray-900 bg-white  rounded-lg ">
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="vue-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="vue-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Milk</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="react-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="react-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Beverages</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="Snacks-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="Snacks-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Snacks</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="Eggs-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="Eggs-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Eggs</label>
                          </div>
                        </li>
                      </ul>




                    </div>
                    <div class="mb-4">

                      <h3 class=" font-semibold pl-5 text-primary  text-sm underline-secondary-100">Price Filter</h3>
                      <p class="mb-4 ">
                        <svg width="70" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="0.5" x2="134" y2="0.5" stroke="black" />
                        </svg>
                      </p>
                      <ul class="w-48 text-sm font-medium text-gray-900 bg-white  rounded-lg ">
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="vue-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="vue-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;0.00 -
                              &#8358;1000</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="react-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="react-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;1000 -
                              &#8358;10000</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="Snacks-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="Snacks-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;10000
                              - &#8358;50000</label>
                          </div>
                        </li>
                        <li class="w-full  rounded-t-lg ">
                          <div class="flex items-center">
                            <input id="Eggs-checkbox" type="checkbox" value=""
                              class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                            <label for="Eggs-checkbox"
                              class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;50000+</label>
                          </div>
                        </li>
                      </ul>




                    </div>

                    <div class="mb-4">


                      <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </div>
                        <input type="search" id="default-search"
                          class="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-primary focus:border-primary ">
                      </div>

                    </div>



                  </div>












                </section>



                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="toggleFilter()">
                    Close
                  </button>
                  <button
                    class="text-primary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" v-on:click="toggleFilter()">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="ShowFilter" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </div>

      </div>







    </section>









    <section class="lg:grid p-7 my-7 lg:grid-cols-4 justify-between  ">
      <div class="lg:col-span-1  lg:block hidden">
        <div class="mb-4">

          <h3 class=" font-semibold text-primary  text-sm underline-secondary-100">Categories</h3>
          <p class="mb-4 ">
            <svg width="70" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="134" y2="0.5" stroke="black" />
            </svg>
          </p>
          <ul class="w-48 text-sm font-medium text-gray-900 bg-white  rounded-lg ">
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="vue-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="vue-checkbox" class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Milk</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="react-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="react-checkbox"
                  class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Beverages</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="Snacks-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="Snacks-checkbox"
                  class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Snacks</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="Eggs-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="Eggs-checkbox" class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">Eggs</label>
              </div>
            </li>
          </ul>




        </div>
        <div class="mb-4">

          <h3 class=" font-semibold pl-5 text-primary  text-sm underline-secondary-100">Price Filter</h3>
          <p class="mb-4 ">
            <svg width="70" height="1" viewBox="0 0 134 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="134" y2="0.5" stroke="black" />
            </svg>
          </p>
          <ul class="w-48 text-sm font-medium text-gray-900 bg-white  rounded-lg ">
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="vue-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="vue-checkbox" class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;0.00 -
                  &#8358;1000</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="react-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="react-checkbox" class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;1000 -
                  &#8358;10000</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="Snacks-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="Snacks-checkbox" class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;10000
                  - &#8358;50000</label>
              </div>
            </li>
            <li class="w-full  rounded-t-lg ">
              <div class="flex items-center">
                <input id="Eggs-checkbox" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-secondary-100 border-primary rounded focus:ring-primary">
                <label for="Eggs-checkbox"
                  class="w-full py-3 ml-2 text-xs font-medium text-secondary-100">&#8358;50000+</label>
              </div>
            </li>
          </ul>




        </div>

        <div class="mb-4">


          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" id="default-search"
              class="block w-3/4 p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-primary focus:border-primary ">
          </div>

        </div>



      </div>





      <div
        class="lg:col-span-3  grid md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-10  lg:mx-0 mx-auto md:mx-0 ">
       
        <div v-for="prod in products.product" :key="prod.id" class="w-52 mx-auto bg-secondary  drop-shadow-md rounded-lg">
          <router-link :to="{ name: 'Product', params: { id: prod.id } }">
            <img class="object-cover rounded-tl-lg rounded-tr-lg" :src="BaseUrl + prod.product_image" alt="Product" />
          </router-link>
          <div class="px-0 py-1 space-y-2">
            <h3 class="text-sm">{{ prod.product_name }}</h3>
            <div class="space-x-2">
              <span class="px-3 py-0.5 border border-blue-500 text-xs text-blue-500">Free Ship</span>
              <span class="px-3 py-0.5 border border-primary text-xs text-primary" v-if="prod.quantity > 0">In
                Stock</span>
              <span class="px-3 py-0.5 border border-danger text-xs text-danger" v-if="prod.quantity < 1">Out Of
                Stock</span>
            </div>
            <p class="space-x-2">
              <span class="text-lg font-semibold"> &#8358;{{ prod.normal_price }}</span>
              <!-- <span class="text-sm line-through text-gray-500">$1000</span> -->
              <!-- <span class="text-sm text-red-700">40% off</span> -->
            </p>
            <div class="flex justify-between items-center pt-3 pb-2">
              <a href="#"
              v-if="prod.quantity > 0"
                class="px-3 py-2 bg-primary hover:bg-amber-600 text-center text-xs text-white rounded duration-300"
                @click="addToCart(prod.id)">
                Add to Cart</a>

              <a href="#" @click="openModal(prod.id)"
                class="px-3 py-2 bg-secondary-100 hover:bg-amber-600 text-center text-xs text-white rounded duration-300"
                v-if="prod.quantity > 0">
                Quantity</a>
              <a href="#"
                class="px-3 py-2 bg-danger hover:bg-amber-600 text-center text-xs text-white rounded duration-300"
                v-if="prod.quantity < 1">
                Out of stock</a>
            </div>
          </div>
        </div>
        <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
          <div
            class="modal-content flex lg:w-80 w-40 container justify-items-center flex-col items-center rounded-lg shadow-lg p-4">

            <img :src="BaseUrl + product.product_image" alt="Product" class="h-50 w-40 object-cover rounded-t-xl" />
            <h2 class="text-3xl font-bold mb-2">
              {{ product.product_name }}
            </h2>

            <p class="text-lg mb-2">NGN {{ product.normal_price * counter }}</p>
            <p v-if="product.wholesale_price" class="text-lg mb-2 text-danger">
              NGN {{ product.wholesale_price }}
            </p>

            <div class="flex items-center mb-2 justify-between">
              <div class="flex">
                <button @click="increase" class="bg-green-500 text-secondary p-2">
                  +
                </button>
                <button @click="decrease" class="bg-green-500 text-secondary p-2">
                  -
                </button>
                <input class="border text-center p-2 w-10" readonly type="number" min="1" :value="counter" />
              </div>
            </div>
            <button type="button" @click="popupAddToCart(product.id, counter)"
              class="inline-block  mb-3 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out">Add
              to cart</button>

            <button class="bg-danger text-white px-4 py-2 rounded-full hover:bg-green-600" @click="closeModal">
              Close
            </button>
          </div>
        </div>
      </div>





    </section>

  </main>
</template>

<script>
// import axios from 'axios';
import Swal from "sweetalert2";
import ProdService from "@/services/product.service";
export default {
  // components: { Footer },
  data() {
    return {
      products: [],
      product: [],
      counter: 1,
      showModal: false,
      BaseUrl: "https://bunker-api.hellobunker.com/product/",
      loading: true,
      errored: false,
      message: [],
      ShowFilter: false,
    };
  },

  created() {
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

    increase() {
      this.counter++;

      console.log(this.counter);
    },
    decrease() {
      if (this.counter < 1) {
        this.counter--;
      } else {
        this.counter = 1;
      }
    },

    addToCart(item) {
      this.$store
        .dispatch("add_cart", item)
        .then((response) => {
          console.log(response.data);
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: '#7DAB2E'
          }).then(() => {
            window.location.reload();
          });
          // location.reload();
        })
        .catch((error) => {
          console.log(error.response.data.message);
          Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
          });
        });
    },
    popupAddToCart(items, qty) {
      // let item = [

      // {id:items,qty:qty}
      // ];
      ProdService.add_to_cart(items, qty).then(
        (response) => {
          console.log(response.data)
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success'
          }).then(() => {
            window.location.reload();
          });;
          // location.reload()
        }).catch((error) => {
          console.log(error.response);
          if (error.response.data.message == "Unauthenticated.") {


            Swal.fire({
              title: 'Error!',
              text: "LOGIN TO ADD TO CART",
              icon: 'error',
              confirmButtonColor: '#7DAB2E',

            });
          }
        })
      // console.log(load)

    },

    toggleFilter() {
      this.ShowFilter = !this.ShowFilter
    },

    openModal(id) {
      // let param = this.id

      ProdService.get_single_product(id)
        .then((response) => {
          console.log(response.data);
          this.product = response.data.message;
          console.log(this.product);
          this.showModal = true;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },

    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
// import Footer from "@/components/layouts/Footer.vue";
const open = ref(false);
</script>
<style lang="scss" scoped>
.dash {
  border-bottom-width: 4px;
  border-bottom-color: #7dab2e;
  width: 15%;
}

.text-black {
  color: black;
}

.semi-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/banner1.jpg");
  background-size: cover;
  background-position: center;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 240px;
  padding: 20px;
}
</style>
