<template>

  <main>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4  max-w-100 my-8  ">
      <div class="flex  center-item flex-col justify-center  my-2 px-6 lg:mx-6">
        <p class="   text-5xl font-bold tracking-tight   lg:text-5xl  ">RETAILING FOODSTUFF AT <span class="text-primary">WHOLESALE PRICES</span></p>

        <p class=" my-3 text-xl lg:text-3xl font-bold capitalize text-secondary-100 tracking-tight">
          Bunker Helps Household Save money,time and stress by providing a membership for the  purpose of non-perisable foodstuff.
          At the lowest wholesale price delivered to your Doorstep for free. 
        </p>
        <div class="my-8 ">
          <router-link to="/shop"
            class="inline-block rounded-lg bg-primary px-7 py-4 text-base font-semibold leading-10 text-white shadow-sm ring-1 ring-primary hover:bg-indigo-700 hover:ring-indigo-700">
            Shop Now
            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
          </router-link>

        </div>
      </div>


      <div>
        <img src="../../assets/heroimg.svg" />
      </div>
    </div>
  </main>

</template>


<style lang="scss" scoped>
div.center-item{
  text-align:center;
}
@media (min-width: 1024px) {
  div.center-item{
  text-align:left;
}
}

</style>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";




</script>