<template>
  <!-- <Navbar /> -->

  <main class="pt-20 -mt-2">
    <div class="mx-auto p-2">
      <!-- row -->
      <div class="flex flex-wrap flex-row">
        <div class="flex-shrink max-w-full px-4 w-full">
          <router-link to="admin_products_category"
            ><button
              class="text-xl bg-green-500 p-4 rounded-xl text-secondary font-bold mt-3 mb-5"
            >
              All Category
            </button></router-link
          >
        </div>
        <div class="flex-shrink max-w-full px-4 w-full">
          <p class="text-xl font-bold mt-3 mb-5">Edit Category</p>
        </div>
        <div class="flex-shrink max-w-full px-4 w-full mb-6">
          <div
            class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full"
          >
            <form class="flex flex-wrap flex-row -mx-4">
              <div class="flex-shrink max-w-full px-4 w-full mb-4">
                <label for="inputtitle" class="inline-block mb-2"
                  >Category Name</label
                >
                <input
                  type="text"
                  value=""
                  class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  id="inputtitle"
                />
              </div>

              <div class="flex-shrink max-w-full px-4 w-full">
                <button
                  type="submit"
                  class="py-2 px-4 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                >
                  update Category
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
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/utilities/Button.vue";
import ProdService from "@/services/product.service";

export default {
  components: {  Button },
  props: ["id"],
  data() {
    return {
      category: [],
    };
  },
  created() {
    let category_id = this.id;
    
    }
       
      
  }

</script>
<style></style>
