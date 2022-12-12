<template>
  <main class="pt-20 -mt-2">
    <div class="mx-3 p-2">
      <!-- row -->
      <div class="flex flex-wrap flex-row">
        <div class="flex-shrink max-w-full px-4 w-full">
          <p class="text-xl font-bold mt-3 mb-5">Manage Products</p>
        </div>
        <div class="flex-shrink max-w-full px-4 w-full mb-6">
          <div
            class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full"
          >
            <div class="flex flex-wrap flex-row -mx-4">
              <div class="flex-shrink max-w-full px-4 w-full">
                <div class="md:flex md:justify-between">
                  <div>
                    <router-link
                      to="create_product"
                      class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                      >Add new product
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        class="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
                        ></path></svg
                    ></router-link>

                    <router-link
                      to="admin_products_category"
                      class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-green-300 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                      >View All Category
                    </router-link>
                  </div>

                  <div>
                    <div id="bulk-actions">
                      <label class="flex flex-wrap flex-row">
                        <select
                          id="bulk_actions"
                          name="bulk_actions"
                          class="inline-block leading-5 relative py-2 ltr:pl-3 ltr:pr-8 rtl:pr-3 rtl:pl-8 mb-3 rounded bg-gray-100 border border-gray-200 overflow-x-auto focus:outline-none focus:border-gray-300 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none"
                        >
                          <option>Action</option>
                          <option value="activate">In stock</option>
                          <option value="deactivate">Deactivate</option>
                          <option value="out">Out stock</option>
                          <option value="delete">Delete</option>
                        </select>
                        <input
                          type="submit"
                          id="bulk_apply"
                          class="ltr:ml-2 rtl:mr-2 py-2 px-4 inline-block text-center mb-3 rounded leading-5 border hover:bg-gray-300 dark:bg-gray-900 dark:bg-opacity-40 dark:border-gray-800 dark:hover:bg-gray-900 focus:outline-none focus:ring-0 cursor-pointer"
                          value="Apply"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="text-primary font-bold text-xl  p-3 ">
          <th class="md:px-3 capitalize px-4">name</th>
          <th class="md:px-3 capitalize px-4">category</th>
          <th class="md:px-3 capitalize px-4">qty</th>
          <th class="md:px-3 capitalize px-4">price</th>
          <th class="md:px-3 capitalize px-4">whosale price</th>
          <th class="md:px-3 capitalize px-4">actions</th>
        </thead>
        <tbody>
          <tr class="text-lg text-center py-3 " v-for="prod in products.Product" :key="prod.id">
            <td class="md:px-3  px-4 capitalize py-5 ">{{prod.product_name}}</td> 
            <td class="md:px-3  px-4 capitalize py-5">{{prod.category}}</td> 
            <td class="md:px-3  px-4 capitalize py-5">{{prod.quantity}}</td> 
            <td class="md:px-3  px-4 capitalize py-5 line-through">{{prod.normal_price}}</td> 
            <td class="md:px-3  px-4 capitalize py-5">{{prod.wholesale_price}}</td> 
            <td class="md:px-3  px-3 capitalize py-5">
              <button class="" @click="DeleteProduct(prod.id)">
              <i class="bi bi-trash text-danger hover:text-green-500"></i>
              </button>
            </td> 
            <td class="md:px-3  px-3 capitalize py-5">
            <router-link :to="{name:'AdminEditProduct',params:{id:prod.id} }">  <i class="bi bi-pen text-green-500"></i></router-link>
            </td> 
            <td class="md:px-3  px-3 capitalize py-5"><i class="bi bi-eye text-green-500"></i></td> 
          </tr>


        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import Button from "@/components/utilities/Button.vue";
import ProdService from "@/services/product.service";
export default {
  components: { Button },
  data() {
    return {
      products: [],
      loading: true,
      errored: false,
    };
  },

  mounted() {
    ProdService.adminGetAllProduct()
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

  methods:{
    DeleteProduct(id){
      ProdService.delete_product(id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      }).finally(() => (location.reload()));
    }
  }
};

// }
</script>

<style></style>
