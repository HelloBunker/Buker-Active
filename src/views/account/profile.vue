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
     
    <router-link to="changePassword"
           class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Change Password</router-link>
     
    <router-link to="orders_history"
           class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Orders History</router-link>
     
    <router-link 
    to="plan"
           class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Membership Plan</router-link>
     
    <router-link to="profile"
           class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk font-bold text-primary border-primary ">Account Details</router-link>
    
  </div>
  <router-link
    to=""
    class="mt-8 inline-block rounded border border-primary px-8 py-3 font-hk font-bold text-primary transition-all hover:bg-primary hover:text-white">Log Out</router-link>
</div>


    <div class="mt-12 lg:mt-0 lg:w-3/4">
      <div class="bg-grey-light py-10 px-6 sm:px-10">
        <h1 class="font-hkbold mb-12 text-2xl text-secondary-100 sm:text-left">
          Account Details
        </h1>
        <div class="mb-12">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="user image"
            class="h-40 w-40 overflow-hidden rounded-full object-cover"/>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div class="">
              <label for="first_name" class="mb-2 block  text-secondary-100">First Name</label>
              <input
                type="text"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                value=""
                id="first_name"/>
            </div>
            <div class="">
              <label for="last_name" class="mb-2 block font-hk text-secondary-100">Last Name</label>
              <input
                type="text"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                value=""
                id="last_name"/>
            </div>
          </div>
          <div class="mt-5 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2">
            <div class="">
              <label
                for="name_displayed"
                class="mb-2 block font-hk text-secondary-100">Name Displayed</label>
              <input
                type="text"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                value=""
                id="name_displayed"/>
            </div>
            <div class="">
              <label for="email" class="mb-2 block font-hk text-secondary-100">Email Address</label>
              <input
                type="email"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                value=""
                id="email"/>
            </div>
          </div>

          <div class="mt-5 w-full sm:w-1/2 md:pr-5">
            <label for="password" class="mb-2 block font-hk text-secondary-100">Password</label>
            <input
              type="password"
              class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
              value="password"
              id="password"/>
          </div>

          <div class="my-8">
            <div>
              <h4 class="font-hkbold mb-2 text-xl text-secondary-100 sm:text-left">
                Shipping Address
              </h4>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div class="w-full">
                  <label for="street" class="mb-2 block font-hk text-secondary-100">Street</label>
                  <input type="text" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="street"/>
                </div>
                <div class="w-full">
                  <label for="street2" class="mb-2 block font-hk text-secondary-100">Street 2</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="street2"/>
                </div>
              </div>
              <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                <div class="">
                  <label for="city" class="mb-2 block font-hk text-secondary-100">City</label>
                  <input type="text" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="city"/>
                </div>
                <div class="">
                  <label for="state" class="mb-2 block font-hk text-secondary-100">State</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="state"/>
                </div>
                <div class="">
                  <label for="zip" class="mb-2 block font-hk text-secondary-100">Zip Code</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="zip"/>
                </div>
              </div>
              <div class="mt-5">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
<select id="countries" class="bg-secondary border border-primary text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected="">Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
              </div>
            </div>
            <div class="mt-8">
              <h4 class="font-hkbold mb-2 text-xl text-secondary-100 sm:text-left">
                Billing Address
              </h4>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div class="w-full">
                  <label for="bstreet" class="mb-2 block font-hk text-secondary-100">Street</label>
                  <input type="text" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="bstreet"/>
                </div>
                <div class="w-full">
                  <label
                    for="bstreet2"
                    class="mb-2 block font-hk text-secondary-100">Street 2</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="bstreet2"/>
                </div>
              </div>
              <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                <div class="">
                  <label for="bcity" class="mb-2 block font-hk text-secondary-100">City</label>
                  <input type="text" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="bcity"/>
                </div>
                <div class="">
                  <label for="bstate" class="mb-2 block font-hk text-secondary-100">State</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="bstate"/>
                </div>
                <div class="">
                  <label for="bzip" class="mb-2 block font-hk text-secondary-100">Zip Code</label>
                  <input type="email" class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3" id="bzip"/>
                </div>
              </div>
              <div class="mt-5">
               
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
<select id="countries" class="bg-secondary border border-primary text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected="">Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

              </div>
            </div>
          </div>

          <div>
            <button type="button" class="text-secondary bg-primary hover:bg-primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Save
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