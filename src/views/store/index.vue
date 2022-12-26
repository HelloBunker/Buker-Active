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


            <div class="flex px-2  flex-row flex-wrap items-center justify-items-center py-3 justify-center">
              <h3 class="text-secondary-100 lg:text-2xl text-xl  font-bold uppercase my-3">categories</h3>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary  border border-secondary-100">Cereals</button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary  border border-secondary-100">Drinks</button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary  border border-secondary-100">Breverages
              </button>
              <button
                class="rounded-lg bg-white text-secondary-100 mx-3 px-4 py-2 my-3 hover:border-primary  border border-secondary-100">Others</button>
            </div>
          </div>
          <h3 class="text-secondary-100 lg:text-2xl text-xl  text-center font-bold uppercase">Products</h3>

          <section
            class="w-fit my-3 mx-auto grid grid-cols-1  lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

            <div v-for="prod in products.product" :key="prod.id"
              class="w-72 border shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
              <router-link :to="{ name: 'Product', params: { id: prod.id } }">
                <img :src="BaseUrl + prod.product_image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
              </router-link>
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">{{
                    prod.category
                }}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">
                  {{ prod.product_name }}
                </p>
                <div class="flex items-center">
                  <p class="text-lg font-semibold text-black cursor-auto my-3">
                    &#8358;{{ prod.normal_price }}
                  </p>
                  <del>
                    <p class="text-sm text-gray-600 cursor-auto ml-2 text-danger">
                      &#8358;{{ prod.wholesale_price }}
                    </p>
                  </del>

                  <div class="ml-auto">
                    <button class="hover:shadow-2xl hover:text-green-500" @click="addToCart(prod.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
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
            class="cursor-pointer pr-5 font-hk font-semibold text-grey-darkest transition-colors hover:text-black">Previous</span>
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">1</span>
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">2</span>
          <span
            class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">3</span>
          <span
            class="cursor-pointer pl-2 font-hk font-semibold text-grey-darkest transition-colors hover:text-black">Next</span>
        </div>
      </section>
    </div>
  </main>
  <Footer />

</template>

<script>
// import axios from 'axios';
import Swal from 'sweetalert2';
import ProdService from "@/services/product.service";
export default {
  // components: { Footer },
  data() {
    return {
      products: [],
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
    addToCart(item) {
      this.$store
        .dispatch("add_cart", item)
        .then((response) => {
          console.log(response.data);
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success'
          }).then(() => {
            window.location.reload();
          });
          // location.reload();
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error'
          });
        })
    },
  }

}
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
</style>
