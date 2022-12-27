<template>
  <!-- <Header /> -->
  <main class="">
    <!-- banner -->

    <!-- body -->
    <div class="flex flex-col">
      <!--product section -->
      <section class="">
        <div class="">
          <div class="flex flex-col justify-center items-center mb-3">
            <div
              class="flex px-2 flex-row flex-wrap items-center justify-items-center py-3 justify-center"
            >
              <h3
                class="text-secondary-100 lg:text-2xl text-xl font-bold uppercase my-3"
              >
                Categories
              </h3>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary border border-secondary-100"
              >
                Cereals
              </button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary border border-secondary-100"
              >
                Drinks
              </button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary border border-secondary-100"
              >
                Breverages
              </button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary border border-secondary-100"
              >
                Others
              </button>
            </div>
          </div>
          <h3
            class="text-secondary-100 lg:text-2xl text-xl text-center font-bold uppercase"
          >
            Products
          </h3>

          <section
            class="w-fit container my-3 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <div
              v-for="prod in products.product"
              :key="prod.id"
              class="w-fit border shadow-xl text-center flex flex-col justify-between items-center rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
              <router-link :to="{ name: 'Product', params: { id: prod.id } }">
                <img
                  :src="BaseUrl + prod.product_image"
                  alt="Product"
                  class="h-50 w-80 object-cover rounded-t-xl"
                />
              </router-link>
              <div
                class="flex justify-center pb-1 justify-items-center items-center text-center">
                <p class="bold text-primary font-bold" v-if="prod.quantity > 0">
                  In Stock
                </p>
                <p class="bold text-danger" v-else>Out Of Stock</p>
              </div>
              <div class="px-4 py-2 w-72">
                <span class="text-gray-400 text-center uppercase text-xs">{{
                  prod.category
                }}</span>
                <p
                  class="text-lg font-bold text-black truncate block capitalize">
                  {{ prod.product_name }}
                </p>
                <div class="flex flex-row justify-center items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                    &#8358;{{ prod.normal_price }}
                  </p>
                  <del>
                    <p
                      class="text-sm cursor-auto ml-2 text-danger"
                      v-if="prod.wholesale_price"
                    >
                      &#8358;{{ prod.wholesale_price }}
                    </p>
                  </del>
                </div>

                <div class="grid ">
                 

                  <button
                  v-if="prod.quantity > 0"
                    class="text-secondary text-sm bg-primary p-2 rounded-xl"
                    @click="openModal(prod.id)"
                  >
                    Add To Cart
                  </button>
                  <button
                  v-else
                    disabled
                    class="text-secondary text-sm bg-danger p-2 rounded"
                    @click="openModal(prod.id)"
                  >
                    out of stock
                  </button>

                  <div
                    class="modal-overlay"
                    v-if="showModal"
                    @click.self="closeModal"
                  >
                    <div class="modal-content flex justify-items-center flex-col items-center rounded-lg shadow-lg p-4">
                      <!-- Modal content goes here -->
                      <img
                        :src="BaseUrl + product.product_image"
                        alt="Product"
                        class="h-50 w-40 object-cover rounded-t-xl"
                      />
                      <h2 class="text-2xl font-bold mb-2">
                        {{ product.product_name }}
                      </h2>

                      <p class="text-lg mb-2">NGN {{ product.normal_price * counter}}</p>
                      <p
                        v-if="product.wholesale_price"
                        class="text-lg mb-2 text-danger"
                      >
                        NGN {{ product.wholesale_price }}
                      </p>

                      <div class="flex items-center mb-2 justify-between">
                        <div class="flex">
                          <button
                            @click="increase"
                            class="bg-green-500 text-secondary p-1"
                          >
                            +
                          </button>
                          <button
                            @click="decrease"
                            class="bg-green-500 text-secondary p-1"
                          >
                            -
                          </button>
                          <input
                            class="border text-center p-1 w-10"
                            readonly
                            type="number"
                            min="1"
                            :value="counter"
                          />
                        </div>
                      </div>
     <button type="button" @click="popupAddToCart(product.id,counter)" class="inline-block  mb-3 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out">Add to cart</button>

                      <button
                        class="bg-danger text-white px-4 py-2 rounded-full hover:bg-green-600"
                        @click="closeModal"
                      >
                        Close
                      </button>
                    </div>
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
  <!-- <Footer /> -->
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
      BaseUrl: "https://test-api.hellobunker.xyz/product/",
      loading: true,
      errored: false,
      message: [],
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

    increase(){
    this.counter++;
    
    console.log(this.counter);
   },
   decrease(){
    if(this.counter  < 1){
    this.counter--;
    }else{
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
   popupAddToCart(items,qty){
// let item = [

// {id:items,qty:qty}
// ];
ProdService.add_to_cart(items,qty).then( 
        (response) =>{
        console.log(response.data)
        Swal.fire({
      title: 'Success!',
      text: response.data.message,
      icon: 'success'
    }).then(() => {
            window.location.reload();
          });;
        // location.reload()
      } ).catch((error) => {
        console.log(error.response);
        if(error.response.data.message == "Unauthenticated."){

        
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
  max-width: 640px;
  padding: 20px;
}
</style>
