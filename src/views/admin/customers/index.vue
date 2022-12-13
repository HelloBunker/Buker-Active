<template>
   
    <h3 class="text-2xl font-bold mt-16 text-center  text-primary">Customers</h3>          


    <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-20">
      
        <div class="flex justify-center items-center pb-4 bg-white dark:bg-gray-900">
        
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative w-full px-2 container">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" v-model="searchTerm" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Customer">
        </div>
    </div>


    <div v-if="errored">
<p class="text-danger text-2xl font-bold capitalize">Product Fetch Error</p>
    </div>


    <table v-else class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                
               
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>

        
        <tbody>
          <!-- <div v-for="cus in customers.data" :key="cus.id"> {{cus.first_name}} </div> -->
            <tr  
             v-for="customer in CustomersFilter"  :key="customer.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="pl-3">
                        <div class="text-base text-primary font-semibold">{{customer.first_name}} {{customer.last_name}}</div>
                        <div class="font-normal text-gray-500">{{customer.phone_no}}</div>
                        <div class="font-normal text-gray-500">{{customer.email}}</div>
                    </div>  
                </th>
                
                
                <td class="py-4 px-6">
                    <a href="" class="font-medium  text-xl mx-3 hover:underline"><i class="bi bi-phone"></i></a>
                    <router-link to="#" class="font-medium text-xl mx-3 text-primary text-bold "><i class="bi bi-whatsapp"></i></router-link>
                    <!-- <router-link :to="{name:'ViewAdminCustomers', params: {id: customer.id }}" class="font-medium text-xl mx-3 text-secondary-100 "><i class="bi bi-eye"></i></router-link> -->
                </td>
            </tr>
           
                        
        </tbody>
    </table>
</div>

  
   
  </template>
  
  <script setup>
  import Sidebar from '@/components/layouts/admin/Sidebar.vue'   
  import Footer from '@/components/layouts/Footer.vue'
  import Navbar from '@/components/layouts/admin/Navbar.vue'
  import Button from '@/components/utilities/Button.vue'
  
  </script>
  
  <script>
  import ProdService from "@/services/product.service";
export default {
  data() {
      return {
       customers: [],
       loading:true,
       errored:false,
       searchTerm: '',
      }
    },
    
    computed: {
        CustomersFilter() {
    
    
    // Process search input
    if (this.searchTerm != '' && this.searchTerm) {
        // console.log(tempRecipes);
       
          return  this.customers.filter(item => { 
            return  item.first_name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.last_name
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.email
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()) ||
            item.phone_no
            .toUpperCase()
            .includes(this.searchTerm.toUpperCase()) 
          
        // return console.log(item.email, this.customers);
       
       } )
      }else{
        return this.customers;
      }
  }
},



created()  {
   
 
  ProdService.get_all_customers().then(
response => {
    console.log(response.data);
    this.customers = response.data.data;
    console.log(this.customers);
} 
      ).catch(error => {
        console.log(error)
        this.errored = true
    }).finally( () => this.loading = false)
    
    },
  
  }
    
// }

  </script>
  <style>
  
  </style>