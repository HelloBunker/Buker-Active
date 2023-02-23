<template>
  <main>
    <div class="container grid lg:grid-cols-2 grid-cols-1 gap-1 items-center max-w-100 lg:mt-40 my-20 lg:px-20">
      <div class="flex  text-center  lg:text-left flex-col justify-center  my-2 px-10 md:mx-6">
        <h3 class="text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl ">RETAILING FOODSTUFF AT <span
            class="text-primary-100">WHOLESALE PRICES</span></h3>

        <p class=" my-3 text-base md:text-base lg:text-lg font-bold capitalize text-secondary-100 tracking-tight">
          Bunker Helps Household Save money,time and stress by providing a membership for the purpose of non-perisable
          foodstuff.
          At the lowest wholesale price delivered to your Doorstep for free.
        </p>
        <div class=" ">
          <router-link to="/shop"
            class="inline-block rounded-lg bg-primary-100 px-7 py-4 text-base font-semibold leading-10 text-white shadow-sm ring-1 ring-primary-100 hover:bg-indigo-700 hover:ring-indigo-700">
            Shop Now
            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
          </router-link>

        </div>
      </div>


      <div class="flex justify-center">
        <img src="@/assets/combo.png" class="object-cover " alt="header img" />
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
div.center-item {
  text-align: center;
}

@media (min-width: 1024px) {
  div.center-item {
    text-align: left;
  }
}
</style>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";




</script>