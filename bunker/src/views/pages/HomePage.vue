<template>
  <div class="lg:px-[3.5rem] px-[1.5rem]">
   
    <!-- banner -->
    <IndexHeader />


    <!-- body -->



    <!-- Container for topcategory -->
    <div class=" my-24  lg:mx-0 mx-auto">

      <!-- Section: top category -->
      <section class="mb-32 text-gray-800">


        <h2 class="text-3xl font-bold mb-12 text-center">
          Our Top <u class="text-primary-100"> Categories</u>
        </h2>

        <div class="grid lg:grid-cols-3 gap-6">
          <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <img src="../../assets/drinks.jpg"
              class="w-full transition duration-300 ease-linear align-middle object-cover h-full" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.5)">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Breverages</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style="background-color: rgba(253, 253, 253, 0.15)"></div>
              </div>
            </a>
          </div>

          <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <img src="../../assets/cereals.jpg"
              class="w-full  transition duration-300 ease-linear align-middle object-cover h-full" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.5)">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Cereals</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style="background-color: rgba(253, 253, 253, 0.15)"></div>
              </div>
            </a>
          </div>

          <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
            style="background-position: 50%;" data-mdb-ripple="true" data-mdb-ripple-color="dark">
            <img src="../../assets/foodstuff.jpg"
              class="w-full transition duration-300 ease-linear align-middle object-cover h-full" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style="background-color: rgba(0, 0, 0, 0.5)">
                <div class="flex justify-start items-end h-full">
                  <h5 class="text-lg font-bold text-white m-6">Foodstuffs</h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style="background-color: rgba(253, 253, 253, 0.15)"></div>
              </div>
            </a>
          </div>


        </div>

      </section>
      <!-- End Section: top category -->

    </div>




    <!-- Container for about Us -->
    <div class=" my-24  mx-auto">

      <!-- Section: about  us-->
      <section class="mb-32 text-gray-800">
        <!-- Jumbotron -->
        <div class="  text-center lg:text-left" id="about">
          <div class="grid lg:grid-cols-2  items-center">
            <div class="mb-12 lg:mb-0">
              <div class="block rounded-lg lg:shadow-2xl lg:shadow-secondary-100 px-6 py-12 md:px-12 lg:-mr-14"
                style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)">
                <h2 class="text-3xl font-bold mb-6">About Us</h2>
                <p class="text-gray-500 mb-6 pb-2 lg:pb-0">
                  We see how you are paying more and more for less and less when you go buy foodstuff in the market.
                  We see how the onslaught of rising food prices is severely affecting your budget… And in response we are offering you the opportunity to take cover in our bunker an online community where many like you will be saving as much as 30% of what you spend on foodstuff and other essential commodities.
                </p>

                <div class="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                  <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                      <path fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                      </path>
                    </svg>
                    Fast Delivery
                  </p>

                  <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                      <path fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                      </path>
                    </svg>
                    Best quality
                  </p>

                  <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                      <path fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                      </path>
                    </svg>
                  Free shipping
                  </p>
                </div>

                <p class="text-gray-500 mb-0">
                 
                </p>
              </div>
            </div>

            <div>
              <img src="../../assets/Delivery.svg" class="w-full rounded-lg shadow-lg" alt="" />
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
      <!-- Section: Design Block -->

    </div>
    <!--End Container for about Us -->






    <!-- Top products:  co-->
    <div>
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Top <u class="text-primary-100"> Products </u></h1>
        <small class="text-lg font-bold font-italic  text-secondary-100">Happy Shoping</small>
      </div>
      <section
        class="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-2 mt-10 mb-5">


        <div v-for="prod in products.product" :key="prod.id"
          class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <router-link :to="{name:'Product', params:{id: prod.id }}">
      <img :src="BaseUrl + prod.product_image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
     </router-link>
     <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">{{prod.category}}</span>
        <h6 class="text-lg font-bold text-black  block capitalize">{{prod.product_name}}</h6>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">&#8358;{{prod.normal_price}}</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2  text-danger">&#8358;{{prod.wholesale_price}}</p>
          </del>
          
          <div class="ml-auto">
            <button class="hover:shadow-2xl hover:text-green-500" @click="addToCart(prod.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus"  viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </button>
          </div>
        </div>
      </div>
      </div>




      </section>
      <div class="container flex justify-center items-center m-4 mx-auto">
        
        

        <Pagination :itemsPerPage="10" :currentPage="2" :total="97" />
      
      </div>
    </div>
    <!-- End Top products:  co-->



    <!--  -->

    <!-- Container for How 2 -->
    <div class="container my-24 px-6 mx-auto">

      <!-- Section: How 2 -->
      <section class="mb-32 text-gray-800 text-center">
        <div class="flex justify-center">
          <div class="text-center max-w-[700px]">
            <h2 class="text-3xl font-bold mb-6 text-center">
              How does Bunker<u class="text-primary-100"> work?</u>
            </h2>
            <p class="text-gray-500 mb-12">
             Here is how Bunker works.Get quality product in just three steps
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 lg:grid-cols-3 lg:gap-x-12">
          <div class="mb-12 lg:mb-0">
            <div class="p-4 bg-primary-100 rounded-full shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Subscribe</h5>
            <p class="text-gray-500">
              Begin by paying a Quarterly Membership Fee of just N5,000 (or Annual Membership fee of N15,000) and become a Bunker Wholesale Club member with exclusive access to so many cost-cutting, time saving and stress-reducing benefits.
            </p>
          </div>

          <div class="mb-12 lg:mb-0">
            <div class="p-4 bg-primary-100 rounded-full shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z">
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Order Online</h5>
            <p class="text-gray-500">
              Place your order from the comfort of your home by simply visiting our online warehouse or by calling any of our hotlines 07010287897, 08099224421 or 08099224425.
            </p>
          </div>

          <div class="mb-12 md:mb-0">
            <div class="p-4 bg-primary-100 rounded-full shadow-lg inline-block mb-6">
              <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="currentColor"
                  d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z">
                </path>
              </svg>
            </div>
            <h5 class="text-lg font-bold mb-4">Quality Free Delivery</h5>
            <p class="text-gray-500">
              Once order has been confirmed, expect delivery within 3 hours for FREE. We deliver between 7am to 7pm, 7 Days/Week (Yes, including Sundays and public holidays...you thought we were joking when we said we've got you covered? 😀            </p>
          </div>

          
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for How 2 -->

<!-- <Footer /> -->
  </div>
</template>




<script>
// import axios from 'axios';
import Swal from 'sweetalert2';
import Pagination from '@/components/utilities/PaginationComponent.vue'
import ProdService from "@/services/product.service";
import IndexHeader from "@/components/layouts/IndexHeader.vue"
export default {
  components: {IndexHeader,Pagination},
  data() {
    return {
      products: [],
     BaseUrl: "https://bunker-api.hellobunker.com//product/",
      loading: true,
      errored: false,
      message:[],
    };
  },

  created() {
    ProdService.getAllProduct()
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

  methods: {
    addToCart(item){
      this.$store.dispatch("add_cart", item).then( 
        (response) =>{
        console.log(response.data);
        Swal.fire({
      title: 'Success!',
      text: response.data.message,
      icon: 'success'
    }).then(() => {
  window.location.reload();
});
        // location.reload();
      } ).catch((error) => {
        console.log(error.response.data.message);
        if(error.response.data.message == "Unauthenticated."){

        
Swal.fire({
title: 'Error!',
text: "LOGIN TO ADD TO CART",
icon: 'error',  
confirmButtonColor: '#7DAB2E',

});
}
      })
    }
  }
};

// }
  
  
</script>

<style>
.zoom:hover img {
  transform: scale(1.1);
}
</style>
