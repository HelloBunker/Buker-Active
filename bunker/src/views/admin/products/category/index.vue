<template>
  <main class="pt-15 -mt-2">
    <div class="container">
      <!-- breadcrum -->
      <nav class="flex justify-start space-x-3 mb-6">
        <b class="uppercase text-secondary-100 lg:text-xl text-sm border border-secondary-100 font-extrabold lg:p-6 p-2">
          &#60; products</b>
        <b class="uppercase text-primary lg:text-xl text-sm lg:p-6 p-2">
          Categories</b>
      </nav>
      <!-- search section -->
      <section class="flex justify-betwween space-x-3 items-center">
        <div class="relative w-full px-2 container">
          <div class="flex absolute inset-y-0 px-6 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <input type="text" v-model="searchTerm"
            class="block p-2 py-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-secondary-100 border-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..." />
        </div>
        <div class="">
          <router-link to="create_product_category">
            <button class="border rounded-full bg-primary hover:bg-primary-100 px-3 py-2 text-secondary">
              <i class="bi bi-plus text-2xl"></i>
            </button>
          </router-link>
        </div>
      </section>
      <!-- products section -->

      <section class="grid md:grid-cols-2 mx-5  lg:mx-2 my-9 gap-2" v-for="prod in category" :key="prod.id">
        <div class="flex  space-x-2 items-center">
          <!-- <div class=""> -->
          <!-- <img
                :src="BaseUrl + prod.product_image"
                class="w-20 h-20 object-fit"
                alt="prod img"
              />
            </div> -->
          <div>
            <p class="text-secondary-100 font-bold text-lg lg:text-xl">
              {{ prod.category }}
            </p>
            <p class="text-secondary-100 text-sm lg:text-lg text-bold">
              {{ prod.quantity }} in stock
            </p>

          </div>
        </div>
        <div class="flex lg:justify-end md:justify-start sm:justify-start space-x-3 items-center">

          <router-link :to="{ name: 'AdminEditProductCategory', params: { id: prod.id } }" class="bg-primary lg:h-12 h-10 sm:h-8 hover:bg-primary-100
               text-secondary text-center px-2 py-2 lg:px-4 lg:py-3 lg:text-xl text-sm rounded uppercase">

            Update
          </router-link>
          <button @click="DeleteCategory(prod.id)"
            class="bg-danger lg:h-12 h-10 sm:h-8 hover:bg-primary-100 text-center text-secondary px-2 py-2 lg:px-4 lg:py-3 lg:text-xl text-sm rounded uppercase">
            Delete
          </button>
        </div>
      </section>
    </div>
  </main>
</template> 
  
<script>
import Button from '@/components/utilities/Button.vue'
import ProdService from "@/services/product.service";

export default {
  components: {  Button },

  data() {
    return {
      category: [],
      loading: false,
      errored: false,
    };
  },

  mounted() {
    this.loading = true;
    ProdService.get_all_category()
      .then((response) => {
        console.log(response.data);
        this.category = response.data.Category;
        console.log(this.category);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    DeleteCategory(id) {
      ProdService.delete_category(id)
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => location.reload());
    },
  },




}
</script>
  
<style></style>