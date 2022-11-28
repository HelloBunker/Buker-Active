<template>
  <Navbar />
  <h3 class="text-2xl font-bold mt-16 text-center  text-primary">Customer Name</h3> 
    <div class="flex flex-col justify-between my-10">
        <div class="flex justify-between items-center gap-4 mb-3">
            <div class="">
            <h2 class="text-primary text-lg font-bold uppercase">Phone Number</h2>
            <span class="text-base text-secondary-100">+23412345678</span>
            </div>
            <div>
                <router-link to="#" class="font-medium  text-xl mx-3 hover:underline"><i class="bi bi-phone"></i></router-link>
                    <router-link to="#" class="font-medium text-xl mx-3 text-primary text-bold "><i class="bi bi-whatsapp"></i></router-link>
                    
            </div>
        </div>
        <div class="flex justify-between items-center mb-3">
            <div>
            <h2 class="text-primary text-lg font-bold uppercase">Email</h2>
            <span class="text-base text-secondary-100">mailtest@mail.com</span>
            </div>
            <div>
                    <router-link to="#" class="font-medium text-xl mx-3 text-secondary-100 text-bold "><i class="bi bi-envelope"></i></router-link>
                    
            </div>
        </div>
        <div class="flex justify-between items-center mb-3">
            <div>
            <h2 class="text-primary text-lg font-bold uppercase">Address</h2>
            <span class="text-base text-secondary-100">13 demo  strt,
                lagos,Nigeria
            </span>
            </div>
            <div>
                    <router-link to="#" class="font-medium text-xl mx-3 text-secondary-100 text-bold "><i class="bi bi-pin-map-fill"></i></router-link>
                    
            </div>
        </div>
        <div class="flex justify-between"></div>
    </div>

</template>

<script>
  import Sidebar from '@/components/layouts/admin/Sidebar.vue'   
  import Footer from '@/components/layouts/Footer.vue'
  import Navbar from '@/components/layouts/admin/Navbar.vue'
  import Button from '@/components/utilities/Button.vue'
  export default {
      components: { Sidebar, Footer, Button, Navbar }
  }
</script>

<style>

</style>