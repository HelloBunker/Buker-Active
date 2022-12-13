<template>
    <Header />
  
    <div class="container  my-12">
    <div
      class="flex flex-col justify-between pt-10 pb-16 sm:pt-12 sm:pb-20 lg:flex-row lg:pb-24">
      <div class="lg:w-1/4">
    <p class="pb-6 font-butler text-2xl text-secondary-100 sm:text-3xl lg:text-4xl">
      My Account
    </p>
    <div class="flex flex-col pl-3">
       
      <router-link to="dashboard"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary   text-grey-darkest ">Dashboard</router-link>
       
      <router-link to="orders_history"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary   text-primary ">Orders History</router-link>
       
      <router-link to="plan"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary   text-gray-darkest">Membership Plan</router-link>
       
      <router-link to="profile"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  text-grey-darkest font-bold  border-primary ">Account Details</router-link>
      
    </div>
    <a
      href="../index.html"
      class="mt-8 inline-block rounded border border-primary px-8 py-3  font-bold text-y transition-all hover:bg-primary hover:text-white">Log Out</a>
  </div>
  <!-- content -->


  <div class="mt-12 lg:mt-0 lg:w-3/4">
      <div class="bg-grey-light py-8 px-5 md:px-8">
        <h1
          class=" pb-6 text-center text-2xl text-secondary-100 sm:text-left">
          Order List
        </h1>
        <div class="hidden sm:block">
          <div class="flex justify-between pb-3">
            <div class="w-1/3 pl-4 md:w-2/5">
              <span class=" text-sm uppercase text-secondary-100">Order ID</span>
            </div>
            <div class="w-1/4 text-center xl:w-1/5">
              <span class=" text-sm uppercase text-secondary-100">Total Price</span>
            </div>
           
            <div class="w-3/10 text-center md:w-1/5">
              <span
                class=" pr-8 text-sm uppercase text-secondary-100 md:pr-16 xl:pr-8">Status</span>
            </div>
          </div>
        </div>
        
        <div
        v-for="order in orders" :key="order.id"
          class="mb-3 flex flex-col items-center justify-between rounded bg-white px-0 py-5 shadow sm:flex-row sm:py-4">
          
          <div
            class="w-full border-b border-grey-dark pb-4 text-center sm:w-1/5 sm:border-b-0 sm:pb-0">
            <span
              class="font-hkbold block pt-3 pb-2 text-center text-sm uppercase text-secondary-100 sm:hidden">{{}}</span>
            <span class="font-hk text-secondary-100">{{order.id}}</span>
          </div>
          <div
            class="w-full border-b border-grey-dark pb-4 text-center sm:w-1/6 sm:border-b-0 sm:pr-6 sm:pb-0 sm:text-right xl:w-1/5 xl:pr-16">
            <span
              class="font-hkbold block pt-3 pb-2 text-center text-sm uppercase text-secondary-100 sm:hidden">Price</span>
            <span class="font-hk text-secondary-100">{{order}}</span>
          </div>
          <div
            class="w-full text-center sm:w-3/10 sm:text-right md:w-1/4 xl:w-1/5">
            <div class="pt-3 sm:pt-0">
              <p
                class="font-hkbold block pb-2 text-center text-sm uppercase text-secondary-100 sm:hidden">
                Status
              </p>
              <span
                class="bg-primary-lightest border border-primary-light px-4 py-3 inline-block rounded font-hk text-primary">{{order.status}}</span>
            </div>
          </div>
        </div>
        
       
        
        
        <div class="flex justify-center pt-6 md:justify-end">
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
    </div>
     
    </div>
  </div>
  
    <Footer />
  </template>
  
  <script>
  import Header from '@/components/layouts/shop/Header.vue'   
  import Footer from '@/components/layouts/Footer.vue'
  import Button from '@/components/utilities/Button.vue'
  import ProdService from "@/services/product.service";
  export default {
      components: { Header, Footer, Button },
      data() {
        return {
            orders: [],
            loading: true,
            errored: false,
            searchTerm: '',
        }
    }, 
    computed: {
ordersFilter() {
    
    
    // Process search input
    if (this.searchTerm != '' && this.searchTerm) {
        // console.log(tempRecipes);
       
          return  this.orders.filter(item => { 
            return  item.email
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.status
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.order_id
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.payment_status
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        // return console.log(item.email, this.orders);
       
       } )
      }else{
        return this.orders;
      }
  }
},

 created() {


        ProdService.get_users_order().then(
            response => {
                // console.log(response.data);
                this.orders = response.data.data;
                console.log(this.orders);
            }
        ).catch(error => {
            console.log(error)
            this.errored = true
        }).finally(() => this.loading = false)

    },
      
  }
  </script>
  
  <style>
  
  </style>