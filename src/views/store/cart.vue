<template>
  <div class="h-screen bg-gray-300">
    <div class="py-0">
      <div
        class="max-w-full h-screen bg-gray-100 shadow-lg rounded-lg md:max-w-full"
      >
        <div class="md:flex">
          <div class="w-full p-4 px-5 py-5">
            <div class="md:grid gap-2">
              <div class="col-span-2 p-5">
                <h1 class="text-xl font-medium">Shopping Cart</h1>

                <div
              v-for="item in cart"
              :key="item.id"
              class="flex px-2 justify-between md:items-center my-2 py-6 flex-col md:flex-row"
            >
              <div class="flex items-center">
                <img
                  :src="BaseUrl + item.product_image"
                  width="60"
                  class="rounded-full"
                />

                <div class="flex flex-col ml-3">
                  <span class="md:text-md font-medium">{{
                    item.product_name
                  }}</span>
                  <span class="text-lg font-light text-gray-400"
                    >NGN{{ item.price }}</span
                  >
                </div>
              </div>
              <div class="text-2xl">X</div>

              <div class="flex justify-center space-x-2 items-center">
                <div class="pr-8 flex">
                  <button @click="updateQuantity(item.id, 1)" class="bg-green-500 text-secondary p-2">+</button>
        <button @click="updateQuantity(item.id, -1)" class="bg-green-500 text-secondary p-2">-</button>
                  <input
                    class="border text-center p-1 w-10"
                 readonly
                    type="number"
                    :min="1"
                    :value="item.quantity"
                  
                  >
                  <input
                  
                    class="border hidden text-center p-1 w-10"
                 readonly
                    type="number"
                    :min="1"
                    v-model="item.quantity"
                  
                  >
                
                  
                </div>
                <div>=</div>
                <div class="pr-8">
                  <span class="text-lg font-medium">{{ item.price * item.quantity }}</span>
                </div>

                <div class="pr-8">
                  <span class="text-lg font-medium text-danger text-bold"
                    ><i class="bi bi-trash"></i
                  ></span>
                </div>
              </div>
</div>

                <div
                  class="flex justify-between items-center mt-6 pt-6 border border-y-2"
                >
                  <div class="flex items-center">
                    <i class="fa fa-arrow-left text-sm pr-2"></i>
                    <span class="text-md font-medium text-blue-500"
                      >Continue Shopping</span
                    >
                  </div>

                  <div class="flex justify-center items-end">
                    <span class="text-sm font-medium text-gray-400 mr-1"
                      >Subtotal:</span
                    >
                    <span class="text-lg font-bold text-gray-800"> {{totalprice}}</span>
                  </div>
                </div>
                <button
                  class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref , computed} from "vue";
import ProdService from "@/services/product.service";
export default {
  setup() {
    const cart = ref(null);
    const values = ref({});
    const BaseUrl = ref("https://test-api.hellobunker.xyz/product/");
    const totalprice = ref(null);

   ;

    

    const updateQuantity = (id, delta) => {
      const item = cart.value.find(i => i.id === id);
      console.log(item);
      if (item) {
        
       
        const quant = parseInt(item.quantity);
        item.quantity = quant + delta;
        const qty = Math.max(item.quantity,1)
        console.log(qty);
        // cart.set(cart.value);
        const val = qty.toString();
        console.log(val);
      ProdService.update_cart(id,val).then(response => {
        // cart.value = response.data.data;
      //  totalprice.value =  item.quantity *  item.price;
       
      }) .catch(error => {
        console.log(error);
      })
      // .finally( () => location.reload());
      }
    };

    // Initialize the "cart" and "values" state variables
    ProdService.view_cart().then(response => {
      
        cart.value = response.data.data;
        totalprice.value = cart.value.quantity;
        localStorage.setItem("cart", JSON.stringify(response.data.data))
        console.log(totalprice.value);
      }).catch(error => {
        console.log(error);
      })
  

      
    return { cart, values, BaseUrl, updateQuantity, totalprice,};
  }
};
</script>







