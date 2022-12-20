<template>
   
   <main class="pt-15 -mt-2">
    <div class="container">
      <!-- breadcrum -->
      <nav class="flex justify-start space-x-3 mb-6">
        <b
          class="uppercase text-secondary-100 lg:text-xl text-sm border border-secondary-100 font-extrabold lg:p-6 p-2"
        >
          &#60; products</b
        >
        <b class="uppercase text-primary lg:text-xl text-sm lg:p-6 p-2">
           Categories</b
        >
      </nav>
      <!-- search section -->
      <section class="flex justify-betwween space-x-3 items-center">
        <div class="relative w-full px-2 container">
          <div
            class="flex absolute inset-y-0 px-6 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            v-model="searchTerm"
            class="block p-2 py-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-secondary-100 border-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <div class="">
          <router-link to="create_product_category">
            <button
              class="border rounded-full bg-primary hover:bg-primary-100 px-3 py-2 text-secondary"
            >
              <i class="bi bi-plus text-2xl"></i>
            </button>
          </router-link>
        </div>
      </section>
      <!-- products section -->

      <section
        class="grid md:grid-cols-2 mx-5  lg:mx-2 my-9 gap-2"
        v-for="prod in category"
        :key="prod.id"
      >
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
        <div
          class="flex lg:justify-end md:justify-start sm:justify-start space-x-3 items-center"
        >
          <button
            @click="DeleteProduct(prod.id)"
            class="bg-primary lg:h-12 h-10 sm:h-8 hover:bg-primary-100 text-secondary text-center px-2 py-2 lg:px-4 lg:py-3 lg:text-xl text-sm rounded uppercase"
          >
            Update
          </button>
          <button
            class="bg-danger lg:h-12 h-10 sm:h-8 hover:bg-primary-100 text-center text-secondary px-2 py-2 lg:px-4 lg:py-3 lg:text-xl text-sm rounded uppercase"
          >
            Delete
          </button>
        </div>
      </section>
      </div>
  </main>

    <!-- <main class="pt-20 -mt-2">
        <div class="mx-auto p-2"> -->
            <!-- row -->
            <!-- <div class="flex flex-wrap flex-row">
                <div class="flex-shrink max-w-full px-4 w-full">
                    <p class="text-xl font-bold mt-3 mb-5">Manage products categories</p>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full mb-0">
                    <div class="p-6 bg-white  ">
                        <div class="flex flex-wrap flex-row -mx-4">
                            <div class="flex-shrink max-w-full px-4 w-full">
                                <div class="md:flex md:justify-between">
                                    <div>
                                        <router-link to="create_product_category"
                                            class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">
                                            Add new product category <svg xmlns="http://www.w3.org/2000/svg" width="12"
                                                height="12" fill="currentColor"
                                                class="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z">
                                                </path>
                                            </svg></router-link>


                                        <router-link to="admin_products"
                                            class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-green-300 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">
                                            View All Products </router-link>
                                    </div>


                                </div>
                            </div>

                            <div class="w-full mb-6 overflow-x-auto">
                                
                            </div>
                        </div>
                    </div>


                    <div class="overflow-x-auto my-2">
      <table class="w-full">
        <thead class="text-primary font-bold text-xl  p-3 ">
          <th class="md:px-3 capitalize px-4">#</th>
          <th class="md:px-3 capitalize px-4">Name</th>
          <th class="md:px-3 capitalize px-4">Action</th>
          
        </thead>
        <tbody>
          <tr class="text-lg text-center py-3 " v-for="cate in category " :key="cate.id" >
            <td class="md:px-3  px-4 capitalize py-5 ">{{cate.id}}</td> 
            <td class="md:px-3  px-4 capitalize py-5">{{cate.category}}</td> 
             <td class="md:px-3  px-3 capitalize py-5"><i class="bi bi-trash text-danger"></i></td> 
            <td class="md:px-3  px-3 capitalize py-5"><i class="bi bi-pen text-green-500"></i></td> 
            <td class="md:px-3  px-3 capitalize py-5"><i class="bi bi-eye text-green-500"></i></td> 
          </tr>


        </tbody>
      </table>
    </div>
                </div>
            </div> -->
        <!-- </div>
       
    </main>-->
    
</template> 
  
<script>
import Sidebar from '@/components/layouts/admin/Sidebar.vue'
import Footer from '@/components/layouts/Footer.vue'
import Navbar from '@/components/layouts/admin/Navbar.vue'
import Button from '@/components/utilities/Button.vue'
import ProdService from "@/services/product.service";

export default {
    components: { Sidebar, Footer, Button, Navbar },

    data(){
        return{
            category:[],
            loading:false,
            errored:false,
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
    




}
</script>
  
<style>

</style>