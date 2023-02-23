<template>
  <main class="pt-20 -mt-2">
    <div class="mx-auto p-2">
      <!-- row -->
      <div class="flex flex-wrap flex-row">
        <div class="flex-shrink max-w-full px-4 w-full">
          <router-link to="admin_products"
            ><button
              class="text-xl bg-green-500 p-4 rounded-xl text-secondary font-bold mt-3 mb-5"
            >
              All Product
            </button></router-link
          >
        </div>
        <div class="flex-shrink max-w-full px-4 w-full">
          <p class="text-xl font-bold mt-3 mb-5">Create new product</p>
        </div>
        <div class="flex-shrink max-w-full px-4 w-full mb-6">
          <div
            class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full"
          >


          <div class="message bg-green-500 p-3 rounded-xl shadow-xl text-secondary " v-if="message">
             <p>{{message}}</p>

          </div>
          <div class="errored bg-red-500 p-3 rounded-xl shadow-xl text-secondary " v-if="errored">
             <p>{{errored}}</p>

          </div>
            <form
              class="flex flex-wrap flex-row -mx-4"
              @submit.prevent="CreateProduct"
            >
              <div class="flex-shrink max-w-full px-4 w-full mb-4">
                <label for="product_name" class="inline-block mb-2"
                  >Product Name</label
                >
                <input
                  type="text"
  required                 class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="product_name"
                />
              </div>
              <div class="flex-shrink max-w-full px-4 w-1/2 mb-4">
                <label for="wholesale_price" class="inline-block mb-2"
                  >Product discount price</label
                >
                <input
                  type="number" required
                  class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="wholesale_price"
                />
              </div>
              <div class="flex-shrink max-w-full px-4 w-1/2 mb-4">
                <label for="normal_price" class="inline-block mb-2"
                  >Product Normal Price</label
                >
                <input
                  type="number" required
                  class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="normal_price"
                />
              </div>
              <div class="flex-shrink max-w-full px-4 w-full mb-4">
                <label for="desc" class="inline-block mb-2"
                  >Product description</label
                >
                <textarea
                  type="text"
  required                 class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="desc"
                ></textarea>
              </div>
              <div class="flex-shrink max-w-full px-4 w-full md:w-3/4 mb-4">
                <label for="qty" class="inline-block mb-2"
                  >Product Quantity</label
                >
                <input
                  type="number" required
                  class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="qty"
                />
              </div>
              <div class="flex-shrink max-w-full px-4 w-full md:w-1/4 mb-4">
                <label for="product_unit" class="inline-block mb-2"
                  >Product Unit</label
                >
                <input
                  type="text"
  required                 class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                  v-model="product_unit"
                />
              </div>
              <div class="flex-shrink max-w-full px-4 w-full md:w-1/4 mb-4">
                <label for="category" class="inline-block mb-2"
                  >Product Category</label
                >
                <select
                  v-model="category"
                  class=" border border-gray-300   text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option :value="cate.category" v-for ="cate in category" :key="cate.id">{{cate.category}}</option>
                 
                </select>
              </div>
              <div class="flex-shrink max-w-full px-4 w-full mb-4">
                <label for="imageSingle" class="inline-block mb-2"
                  >Thumbnail (80x80 png, gif, svg or jpg)</label
                >
                <input
                  type="file"
  required                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  @change="filesChange"
                />
              </div>

              <div class="flex-shrink flex justify-center items-center max-w-full px-4 w-full">
                <button
                  type="submit" required
                  class="py-2 px-4 block lg:inline-block text-center rounded-xl leading-5 bg-gray-500 border border-secondary-100 hover:text-primary hover:bg-secondary hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                >
                  Add Product
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
// import {VFileInput} from 'v-file-input';
// import { VFileInput } from 'vue-sfc-rollup';
import ProdService from "@/services/product.service";


export default {
  name: "CreateProduct",
  components: {
    Button,
    // VFileInput,
  },
  data() {
    return {
      loading: false,
      message: "",
      category: [],
      product_name: "",
      wholesale_price: "",
      normal_price: "",
      desc: "",
      qty: "",
      product_unit: "",
      category: "",
      image: "",
      errored: null,
    };
  },

 mounted(){
  ProdService.get_all_category()
          .then((response) => {
            console.log(response.data);
            this.category = response.data.Category;
            console.log(this.category);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (this.loading = false))
 },

  methods :{
    filesChange(event){
      
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.image = reader.result;
      };

      reader.readAsDataURL(file);
    },
  


  

    CreateProduct(){
    // console.log(this.image); 


 const prods = {
'name':this.product_name,          
'nprice':this.normal_price.toString(),         
'wprice': this.wholesale_price.toString(),  
'description':this.desc ,    
'unit':this.product_unit,      
'cate':this.category ,  
'quantity': this.qty.toString() ,
'img': this.image ,
 }

 console.log(prods);
    ProdService.add_product(prods).then((response) => {

      if(response.data.status_code >= 300 ){
        this.errored = response.data.message;
       
        console.log(this.errored);
      }else{
        this.message = response.data.message;
        console.log(this.message)
      }

       }).catch((error) => {
        this.errored = error;
        console.log(this.errored);
       })
    }
  }



};
</script>
<style></style>
