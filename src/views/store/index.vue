  <template>
  <Header />
  <main class="bg-gray-100 ">
    <div class="">
      <div class="relative flex my-4">
        <!-- semi  bannner -->
        <div class=" semi-banner h-60 w-full lg:w-full bg-cover bg-center bg-no-repeat lg:h-70 "></div>

        <div class="c-hero-gradient-bg absolute top-0 left-0 h-60 w-full bg-cover bg-no-repeat lg:h-70">
          <div class="py-20 px-6 sm:px-12 lg:px-20">
            <h1 class=" md:text-6xl text-3xl font-extrabold text-secondary  ">
             Bunker Shop           </h1>
            <div class="flex pt-2">
              <router-link to="/" class=" text-base text-primary transition-colors hover:text-secondary">Home</router-link>
              <span class="px-2  text-base text-white">> </span>
              <span class=" text-base text-gray-300">Collection Grid</span>
            </div>
          </div>
        </div>
      </div>


<!--  -->


      

<!-- title -->
<div class="text-center p-10">
  <h1 class="font-bold text-4xl mb-4">All Bunker  Products </h1>
  <h1 class="text-3xl">Happy Shoping</h1>
</div>

<div class=" relative flex flex-col md:flex-row justify-between py-6  px-2">
<div> 
<form>
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-secondary bg-primary border border-secondary-100 rounded-l-lg hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary">All categories <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 264px);">
            <ul class="py-1 text-sm text-secondary-100" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex py-2 px-4 w-full hover:bg-gray-100 ">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Product.." required="">
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-primary bg-secondary rounded-r-lg border border-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-100">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
</div>

<div class="flex flex-col md:flex-row justify-evenly ">
<div class="mt-6 flex w-full mx-3 items-center justify-start sm:mt-0 sm:justify-end">
  <span class="mr-2 -mt-2 inline-block  text-primary md:text-lg">Sort by:</span>

  <select class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5  md:w-full w-2/3 rounded-xl border-primary">
    <option value="0">Best Match</option>
    <option value="1">Price: Low - High</option>
    <option value="2">Price: High - Low</option>\
  </select>
</div>

<div class="mt-6 flex w-full mx-3 items-center justify-start sm:mt-0 sm:justify-end">
  <span class="mr-2 -mt-2 inline-block  text-primary md:text-lg">Show:</span>

  <select class="bg-gray-50 border  text-secondary-100 sm:text-sm  focus:ring-primary-100 focus:border-primary-600 block  p-2.5  md:w-full w-2/3 rounded-xl border-primary">
    <option value="0">1-12</option>
    <option value="1">12-50</option>
    <option value="2">50-100</option>
  </select>
</div>
</div>
</div>
<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

 
  <div v-for="prod in products.product"  :key="prod.id"
  class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <router-link :to="{name:'Product', params:{id: prod.id }}">
      <img :src="BaseUrl + prod.product_image" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
     </router-link>
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">{{prod.category}}</span>
        <p class="text-lg font-bold text-black truncate block capitalize">{{prod.product_name}}</p>
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




    <div class="mx-auto flex justify-center py-16">
      <span
        class="cursor-pointer pr-5 font-hk font-semibold text-grey-darkest transition-colors hover:text-black">Previous</span>
      <span
        class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">1</span>
      <span
        class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">2</span>
      <span
        class="mr-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full font-hk text-sm font-semibold text-black transition-colors hover:bg-primary hover:text-white">3</span>
      <span
        class="cursor-pointer pl-2 font-hk font-semibold text-grey-darkest transition-colors hover:text-black">Next</span>

    </div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import Header from '@/components/layouts/shop/Header.vue'
import Footer from '@/components/layouts/Footer.vue'

    
    

// const Products = [
// {id:'1', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// {id:'2', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// {id:'3', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// {id:'4', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// {id:'5', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// {id:'6', Link:'singleproduct',Brand:'Brand', Img:'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', Price:'500',Discount:'400'},
// ]




    

</script>


<script>
// import axios from 'axios';
import ProdService from "@/services/product.service";
export default {
  // components: {  },
  data() {
    return {
      products: [],
     BaseUrl: "https://test-api.hellobunker.xyz/product/",
      loading: true,
      errored: false,
      message:[],
    };
  },

  mounted() {
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
        console.log(response.data)
      } ).catch((error) => {
        console.log(error);
      })
    }
  }
};

// }
  
  
</script>

<style lang="scss" scoped>
.dash {
    border-bottom-width: 4px;
    border-bottom-color: #7DAB2E;
  width:15%;
}

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