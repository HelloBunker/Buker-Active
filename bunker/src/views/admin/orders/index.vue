<template>

    <main class=" container ">
        <div class="flex justify-center items-center pb-4 bg-white dark:bg-gray-900">
        
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative w-full px-2 container">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" v-model="searchTerm" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for orders(orderid or status or paymentstatus or Email)">
        </div>
    </div>


    <div v-if="errored">
<p class="text-danger text-2xl font-bold capitalize">Product Fetch Error</p>
    </div>
        <div class="grid md:grid-cols-2 grid-cols-1 mb-2">
            <div class="flex  md:justify-start justify-center">
                <h3 class="text-xl text-secondary-100 text-left font-bold">ORDERS</h3>

            </div>
            <div class="md:flex md:justify-end hidden">
                <h3 class="text-xl text-secondary-100 text-right font-bold">STATUS</h3>

            </div>
            
        </div>


        <div class="flex md:flex-row flex-col  justify-between items-center border-b mb-3 hover:bg-grey-300" v-for="order in ordersFilter" :key="order.email">
           
           
            <div class="flex justify-start flex-col">
                <h4 class="text-lg text-bold text-secondary-100">{{order.email}}</h4>
                <h4 class="text-lg text-bold text-secondary-100">{{order.name}}</h4>
                <p class="text-sm text-secondary-100">#{{order.order_id}}</p>
                <p class="text-sm text-secondary-100">{{order.created_at}}</p>
                <p class="text-sm text-secondary-100">{{order.products }}</p>
                <p class="text-sm text-primary"> {{order.payment_status}}({{order.payment_method}})</p>
                <p class="text-sm text-secondary-100">NGN {{order.total_price }}</p>


            </div>
            <div class="flex md:justify-end justify-start">
                <div :class="{'bg-green-500': order.status == 'paid', 'bg-danger': order.status == 'failed', 'bg-yellow-400':order.status == 'pending'}" class="rounded px-2 py-2 text-center mb-3 max-h-9 text-secondary">{{order.status}}</div>
            </div>
        </div>
<!-- 
        <div class="flex md:flex-row flex-col  justify-between items-center border-b mb-3 hover:bg-grey-300" v-for="order in orders" :key="order.id">
           
           
            <div class="flex justify-start flex-col">
                <h4 class="text-lg text-bold text-secondary-100">{{order.email}}</h4>
                <h4 class="text-lg text-bold text-secondary-100">{{order.name}}</h4>
                <p class="text-sm text-secondary-100">#{{order.order_id}}</p>
                <p class="text-sm text-secondary-100">format({{order.created_at}}, 'longDate')</p>
                <p class="text-sm text-secondary-100">{{order.products }}</p>
                <p class="text-sm text-primary"> {{order.payment_status}}({{order.payment_method}})</p>
                <p class="text-sm text-secondary-100">NGN {{order.total_price }}</p>


            </div>
            <div class="flex md:justify-end justify-start">
                <div :class="{'bg-green-500': order.status == 'paid', 'bg-danger': order.status == 'failed', 'bg-yellow-400':order.status == 'pending'}" class="rounded px-2 py-2 text-center mb-3 max-h-9 text-secondary">{{order.status}}</div>
            </div>
        </div> -->



    </main>
</template>

<script>

import Button from '@/components/utilities/Button.vue'
import ProdService from "@/services/product.service";

export default {
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


        ProdService.get_all_orders().then(
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

// }

</script>

<style>

</style>