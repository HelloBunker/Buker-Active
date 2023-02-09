<template>
  <div class="grid lg:grid-cols-2 container max-w-full my-2">

    <div class="hidden lg:flex items-center justify-center bg-secondary-100">
      <img src="@/assets/cartbg.jpg" alt="cart bg" class="w-full h-full max-h-screen object-cover">
    </div>

    <div class="container bg-gray-500 lg:shadow-2xl">
      <div class="py-0">
        <div class="max-w-full min-h-screen bg-gray-100 shadow-lg rounded-lg md:max-w-full">
          <div class="md:flex">
            <div class="w-full ">
              <div class="md:grid gap-2">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-medium">Shopping Cart</h1>

                  <div v-if="cart.length > 0" v-for="item in cart" :key="item.id"
                    class="flex px-2 justify-between md:items-center my-2 py-6 flex-col md:flex-row">
                    <div class="flex items-center">
                      <img :src="BaseUrl + item.product_image" width="60" class="rounded-full" />

                      <div class="flex flex-col ml-3">
                        <span class="md:text-md font-medium">{{
                            item.product_name
                        }}</span>
                        <span class="text-lg font-light text-gray-400">NGN{{ item.price }}</span>
                      </div>
                    </div>
                    <div class="text-2xl">X</div>

                    <div class="flex justify-between space-x-2 items-center">
                      <div class="pr-8 flex">
                        <button @click="updateQuantity(item.id, 1)" class="bg-green-500 text-secondary p-2">+</button>
                        <button @click="updateQuantity(item.id, -1)" class="bg-green-500 text-secondary p-2">-</button>
                        <input class="border text-center p-1 w-10" readonly type="number" min="1"
                          :value="item.quantity">
                        <input class="border hidden text-center p-1 w-10" readonly type="number" :min="1"
                          v-model="item.quantity">


                      </div>
                      <div>=</div>
                      <div class="pr-8">
                        <span class="text-lg font-medium">{{ item.price * item.quantity }}</span>
                      </div>

                      <div class="pr-8">
                        <button class="text-lg font-medium text-danger text-bold  " @click="deleteCartItem(item.id)"><i
                            class="bi bi-trash"></i></button>
                      </div>
                    </div>
                  </div>
                  <div v-else class="flex justify-center items-center py-6 px-3">
                    <span class="text-2xl font-bold tetx-center text-danger">EMPTY CART!!</span>
                  </div>
                  <div class="flex justify-between items-center mt-6 pt-6 border border-y-2">
                    <router-link to="/shop">
                    <div class="flex items-center">
                      <i class="fa fa-arrow-left text-sm pr-2"></i>
                      <span class="text-md font-medium text-blue-500">Continue Shopping</span>
                    </div>
                  </router-link>
                    <div class="flex justify-center items-end">
                      <span class="text-sm font-medium text-gray-400 mr-1">Total:</span>
                      <span class="text-lg font-bold text-gray-800"> {{ total }}</span>
                    </div>
                  </div>
                  <button v-if="cart.length > 0" @click="checkOut" class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import { ref, onMounted, computed} from "vue";
import ProdService from "@/services/product.service";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const cart = ref({});

    const BaseUrl = ref("https://bunker-api.hellobunker.com//product/");


    const router = useRouter();
    const store = useStore();
    const updateQuantity = (id, delta) => {

      const item = cart.value.find(i => i.id === id);

      if (item) {


        let quant = parseInt(item.quantity);

        if (quant < 1) {
          quant = 1;
          console.log(quant);
        }
        item.quantity = quant + delta;
        const qty = Math.max(item.quantity, 0)
        console.log(qty);

        const val = qty.toString();
        console.log(val);
        ProdService.update_cart(id, val).then(response => {

          console.log(response.data);
        }).catch(error => {
          console.log(error);
        })
        // .finally( () => location.reload());
      }
    };


    const deleteCartItem = (id) => {
      // console.log(id);
      store.dispatch('delete_cart_item', id).then(res => {
        console.log(res.data)
        location.reload()

      }).catch(err => {
        console.log(err);
      }).finally(() => { })
    };

    const checkOut = () => {
      store.dispatch('checkOut').then(res => {
        console.log(res.data);
        
      }).catch(err => {
        console.log(err)
      })
       .finally(() => { router.push({name: 'Checkout'})}) 
    }

    onMounted(() => {
      // Code to run when the component is mounted
      store.dispatch('view_cart')
        .then(response => {
          console.log(response.data.data);
          cart.value = response.data.data;
        }).catch(error => {
          console.log(error);
        });
      console.log(cart.value)
    });

    // Initialize the "cart" and "values" state variables
    const cartCount = computed(() => {
      return store.state.cartCount

    });


    const total = computed(() => {
      let total = 0;
      Object.values(cart.value).forEach((item) => (total += item.price * item.quantity));
      return total.toFixed(2)

    })
    //   cart.value = response.data.data;
    //   totalprice.value = cart.value.quantity;
    //   localStorage.setItem("cart", JSON.stringify(response.data.data))
    //   console.log(totalprice.value);
    // }).catch(error => {
    //   console.log(error);
    // })



    return { cart, BaseUrl, updateQuantity, cartCount, deleteCartItem, total,checkOut };
  }
};
</script>







