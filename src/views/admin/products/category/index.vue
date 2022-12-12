<template>
   
    <main class="pt-20 -mt-2">
        <div class="mx-auto p-2">
            <!-- row -->
            <div class="flex flex-wrap flex-row">
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
            </div>
        </div>
       
    </main>
    
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