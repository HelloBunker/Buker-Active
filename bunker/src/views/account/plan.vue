<template>
    <Header />
  
    <div class="container  my-12">
    <div
      class="flex flex-col justify-between pt-10 pb-16 sm:pt-12 sm:pb-20 lg:flex-row lg:pb-24">
      <div class="lg:w-1/4">
        <div class="flex flex-col pl-3">
          <router-link
            to="orders_history"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary font-hk text-grey-darkest"
          >
            History</router-link
          >
          <router-link
            to="changePassword"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary font-hk text-grey-darkest"
            >Password</router-link
          >

          <router-link
            to="plan"
            class="text-primary border-primary transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary font-hk text-grey-darkest"
            >Membership Plan</router-link
          >

          <router-link
            to="profile"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary font-hk font-bold  "
            >Edit Profile
          </router-link>
        </div>
        <router-link
          to=""
          class="mt-8 inline-block rounded border border-primary px-8 py-3 font-hk font-bold text-primary transition-all hover:bg-primary hover:text-white"
          >Log Out</router-link
        >
      </div>
  <!-- content -->
  <div class="mt-12 lg:mt-0 lg:w-3/4">
      <div class="bg-grey-light py-10 px-6 sm:px-10">
        <h1 class=" mb-12 text-2xl text-secondary-100 sm:text-left">
          Membership Plan
        </h1>
        <div class="mb-12">
        <h1 class=" mb-4 text-3xl sm:text-xl text-secondary-100 capitalize sm:text-left">
          Current membership Plan
         </h1>
        <p class="mb-12 text-xl sm:text-lg text-secondary-100 underline sm:text-left">
         Standard
        </p>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="mb-5">
              <h1 class=" text-3xl mb-3 sm:text-xl sm:text-left text-secondary-100">Change Membership Plan</h1>
              <form>
                
          <div class="inline  mb-3  text-xl sm:text-xl uppercase ">
          Select membership plan:
           </div>

        <div class="flex justify-start my-3">
            
  <div class="form-check form-check-inline ">
 
    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="standard">
    <label class="form-check-label inline-block  font-bold px-2 text-gray-800" for="inlineRadio10">Standard</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input form-check-input appearance-none  ml-2 rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="advance">
    <label class="form-check-label inline-block text-gray-800 font-bold px-2" for="inlineRadio20">Advance</label>
  </div>
  
</div>
               

             
              </form>

            </div>
           
          </div>
         
          <div>
            <button type="button" class="text-secondary bg-green-400 p-9 hover:bg-primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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