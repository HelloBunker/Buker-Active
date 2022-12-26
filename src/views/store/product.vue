<template>
  




  
<div class="container">
  


  <div class="mx-5 flex flex-col justify-between pt-16 pb-6 lg:flex-row">
    <div
      class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row"
      x-data="{ selectedImage: '/assets/img/unlicensed/backpack-2.png' }">
     <div class="relative  w-full pb-5 sm:pb-0">
        <div
          class=" h relative flex items-center justify-center rounded ">
          <img class="object-contain  w-full  max-h-96" alt="product image" :src="(BaseUrl + product.product_image)"/>
        </div>  
      </div>
    </div>

    <div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
      <div class="mb-8 border-b border-grey-dark">
        <div class="flex items-center">
          <h2 class="font-butler text-3xl md:text-4xl lg:text-4.5xl">
          {{product.product_name}}  {{product.category}}
          </h2>
          <p
            class="ml-8 rounded-full bg-primary px-5 py-2  text-sm font-bold uppercase leading-none text-secondary-100">
            <!-- 20% off -->
          </p>
        </div>
        <div class="flex items-center pt-3">
          <span class=" text-2xl text-secondary-100">NGN{{product.normal_price}}</span>
          <!-- <span class="pl-5  text-xl text-grey-darker line-through">NGN{{product.normal_price}}</span> -->
        </div>
        <div class="flex items-center pt-3 pb-8">
         
          <span class="ml-2  text-sm text-secondary-100">( {{product.quantity}} )</span>
        </div>
      </div>
      <div class="flex pb-5">
        <p class=" text-secondary-100">Availability:</p>
        <p class="bold pl-3 text-primary font-bold" v-if="product.quantity > 0">
          In Stock
        </p>
        <p class="bold pl-3 text-danger" v-else>
         Out Of Stock
        </p>
      </div>
      <div class="flex justify-between pb-4">
        <!-- <div class="w-1/3 sm:w-1/5">
          <p class=" text-secondary-100">Color</p>
        </div> -->
        <!-- <div class="flex w-2/3 items-center sm:w-5/6">
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-primary px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-secondary-light px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-v-green px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="cursor-pointer rounded-full border-2 border-transparent bg-v-blue px-2 py-2 transition-colors hover:border-black"></div>
        </div> -->
      </div>
      <!-- <div class="flex items-center justify-between pb-4">
        <div class="w-1/3 sm:w-1/5">
          <p class=" text-secondary-100">Size</p>
        </div>
        <div class="w-2/3 sm:w-5/6">
          <select class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5 rounded-xl border-primary w-2/3">
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">Large</option>
          </select>
        </div>
      </div> -->
      <div class="flex items-center justify-between pb-8">
        <div class="w-1/3 sm:w-1/5">
          <p class=" font-bold">Quantity</p>
        </div>
        <div class="flex w-2/3 sm:w-5/6" >
          <label
            for="quantity-form"
            class="relative block h-0 w-0 overflow-hidden">Quantity form</label>
          <!-- <input
            type="number"
            id="quantity-form"
            class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5  w-2/3 rounded-xl border-primary"
            :max="product.quantity"
            min="1"
            value="1"/> -->
            <div class="flex items-center justify-between">
              <div class="pr-8 flex">
                        <button @click="increase" class="bg-green-500 text-secondary p-2">+</button>
                        <button @click="decrease" class="bg-green-500 text-secondary p-2">-</button>
                        <input class="border text-center p-1 w-10" readonly type="number" min="1"
                          :value="counter">
                       


                      </div>
        </div>
       
        </div>
      </div>
      <div class="space-x-2 flex pb-8 ">
     <button type="button" @click="addToCart(product.id,counter)" class="inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out">Add to cart</button>

          <!-- <button type="button" @click="checkOut"  class="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy now</button> -->
        <!-- <a href="cart/index.html" class="btn btn-outline bg-primary text-secondary mr-4 md:mr-6">Add to cart</a> -->
        <!-- <a href="cart/index.html" class="btn btn-primary">BUY NOW</a> -->
      </div>
     
      <p class=" text-secondary-100">
        <span class="pr-2">Categories:</span>{{product.category}}    </p>
    </div>
  </div>

 <div class="my-12 container">
    <h3 class="text-center text-3xl font-bold">Description</h3>
    <p class="text-gray-600 md:text-xl text-sm  text-center text-wrap max-w-100">
       {{product.description}}
    </p>
 </div>



 
</div>
<!-- <Footer /> -->
</template>

<script>
import Header from '@/components/layouts/shop/Header.vue';  
import Footer from '@/components/layouts/Footer.vue';
import ProdService from "@/services/product.service";
import Button from '@/components/utilities/Button.vue';
import Swal from 'sweetalert2';
export default {
      components: {  Button,Footer },
        props: ['id'],
        
        data() {
      return {
       product: [],
       loading:true,
       errored:false,
       counter: 1,
       BaseUrl: "https://test-api.hellobunker.xyz/product/",
      }
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
  
    addToCart(items,qty){
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
    });
        // location.reload()
      } ).catch((error) => {
        console.log(error.response.data.message);
         Swal.fire({
      title: 'Error!',
      text: error.response.data.message,
      icon: 'error'
    });
      })
      // console.log(load)
    
  },
  //  checkOut() {
  //     this.$store.dispatch('checkOut').then(res => {
  //       console.log(res.data);
        
  //     }).catch(err => {
  //       console.log(err)
  //     }).finally(() => {this.$router.push({name: 'Checkout'})}) 
       
  // }


   },
  mounted()  {
   
 let param = this.id
  ProdService.get_single_product(param).then(
response => {
    console.log(response.data);
    this.product = response.data.message;
    console.log(this.product);
} 
      ).catch(error => {
        console.log(error)
        this.errored = true
    }).finally( () => this.loading = false)

    
    
    },
  

  }
</script>

<style lang="scss">


.semi-banner {
  background: 
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url('~@/assets/banner1.jpg');
background-size:cover;
background-position:center;
}



</style>