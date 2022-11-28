<template>
  <Header />




  
<div class="container">
  


  <div class="mx-5 flex flex-col justify-between pt-16 pb-6 lg:flex-row">
    <div
      class="flex flex-col-reverse justify-between px-5 sm:flex-row-reverse lg:w-1/2 lg:flex-row"
      x-data="{ selectedImage: '/assets/img/unlicensed/backpack-2.png' }">
     <div class="relative w-full pb-5 sm:pb-0">
        <div
          class=" relative flex items-center justify-center rounded border border-secondary bg-v-pink">
          <img class="object-contain w-full" alt="product image" src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
        </div>
      </div>
    </div>

    <div class="px-5 pt-8 lg:w-1/2 lg:pt-0">
      <div class="mb-8 border-b border-grey-dark">
        <div class="flex items-center">
          <h2 class="font-butler text-3xl md:text-4xl lg:text-4.5xl">
           Product Name
          </h2>
          <p
            class="ml-8 rounded-full bg-primary px-5 py-2 font-hk text-sm font-bold uppercase leading-none text-secondary-100">
            20% off
          </p>
        </div>
        <div class="flex items-center pt-3">
          <span class="font-hk text-2xl text-secondary-100">$110.0</span>
          <span class="pl-5 font-hk text-xl text-grey-darker line-through">$35.0</span>
        </div>
        <div class="flex items-center pt-3 pb-8">
         
          <span class="ml-2 font-hk text-sm text-secondary-100">(45)</span>
        </div>
      </div>
      <div class="flex pb-5">
        <p class="font-hk text-secondary-100">Availability:</p>
        <p class="font-hkbold pl-3 text-v-green">
          In Stock
        </p>
      </div>
      <div class="flex justify-between pb-4">
        <div class="w-1/3 sm:w-1/5">
          <p class="font-hk text-secondary-100">Color</p>
        </div>
        <div class="flex w-2/3 items-center sm:w-5/6">
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-primary px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-secondary-light px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="mr-2 cursor-pointer rounded-full border-2 border-transparent bg-v-green px-2 py-2 transition-colors hover:border-black"></div>
          <div
            class="cursor-pointer rounded-full border-2 border-transparent bg-v-blue px-2 py-2 transition-colors hover:border-black"></div>
        </div>
      </div>
      <div class="flex items-center justify-between pb-4">
        <div class="w-1/3 sm:w-1/5">
          <p class="font-hk text-secondary-100">Size</p>
        </div>
        <div class="w-2/3 sm:w-5/6">
          <select class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5 rounded-xl border-primary w-2/3">
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">Large</option>
          </select>
        </div>
      </div>
      <div class="flex items-center justify-between pb-8">
        <div class="w-1/3 sm:w-1/5">
          <p class="font-hk text-secondary-100">Quantity</p>
        </div>
        <div class="flex w-2/3 sm:w-5/6" x-data="{ productQuantity: 1 }">
          <label
            for="quantity-form"
            class="relative block h-0 w-0 overflow-hidden">Quantity form</label>
          <input
            type="number"
            id="quantity-form"
            class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5  w-2/3 rounded-xl border-primary"
            
            min="1"/>
       l
        </div>
      </div>
      <div class="group flex pb-8 ">
     <router-link to="cart">  <Button content="Add To Cart" theme="primary" class="mx-2 p-4"/></router-link>
     <router-link to="cart">  <Button content="BUY NOW" theme="outline" class="bg-secon" /></router-link>
        <!-- <a href="cart/index.html" class="btn btn-outline bg-primary text-secondary mr-4 md:mr-6">Add to cart</a> -->
        <!-- <a href="cart/index.html" class="btn btn-primary">BUY NOW</a> -->
      </div>
      <div class="flex pb-2">
        <p class="font-hk text-secondary-100">SKU:</p>
        <p class="font-hkbold pl-3 text-secondary-100">
          KH12345
        </p>
      </div>
      <p class="font-hk text-secondary-100">
        <span class="pr-2">Categories:</span>Bag, Hand bag, Travel bag, Black
      </p>
    </div>
  </div>

 <div class="mx-5 mb-">
    <h3 class="text-center text-3xl font-extrabold">Description</h3>
    <p class="text-secondary-100 font-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam natus obcaecati tempora, sapiente omnis dolorum possimus vitae, quae rerum ipsam odit ab dolores ullam perspiciatis. Quaerat illum sint sed aspernatur nihil quidem veritatis laboriosam voluptatibus! Error laudantium dolorem nulla ex aperiam, corrupti fugiat exercitationem ratione ipsa provident rem nobis, voluptatum quaerat, obcaecati ad dicta minima consequatur quas? Molestias, nam temporibus?

    </p>
 </div>



 
</div>
<Footer />
</template>

<script>
import Header from '@/components/layouts/shop/Header.vue'   
import Footer from '@/components/layouts/Footer.vue'
import Button from '@/components/utilities/Button.vue'
export default {
    components: { Header, Footer, Button }
}
</script>

<style>
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