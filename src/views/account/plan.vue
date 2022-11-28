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
       
      <router-link to="orders"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary   text-grey-darkest ">Orders History</router-link>
       
      <router-link to="plan"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary   text-primary">Membership Plan</router-link>
       
      <router-link to="profile"
             class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  text-grey-darkest font-bold  border-primary ">Account Details</router-link>
      
    </div>
    <a
      href="../index.html"
      class="mt-8 inline-block rounded border border-primary px-8 py-3  font-bold text-y transition-all hover:bg-primary hover:text-white">Log Out</a>
  </div>
  <!-- content -->
  <div class="mt-12 lg:mt-0 lg:w-3/4">
      <div class="bg-grey-light py-10 px-6 sm:px-10">
        <h1 class="font-hkbold mb-12 text-2xl text-secondary-100 sm:text-left">
          Membership Plan
        </h1>
        <div class="mb-12">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="user image"
            class="h-40 w-40 overflow-hidden rounded-full object-cover"/>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="mb-5">
              <label for="plan" class="mb-2 block  text-secondary-100">Membership Plan</label>
<select id="plan" class="bg-secondary border border-primary text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option value="1" selected>Annual plan</option>
  <option value="2">Quarterly plan</option>
  
</select>

            </div>
           
          </div>
         
          <div>
            <button type="button" class="text-secondary bg-primary hover:bg-primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Submit
    <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
             
          </div>
        </form>
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
  export default {
      components: { Header, Footer, Button }
  }
  </script>
  
  <style>
  
  </style>