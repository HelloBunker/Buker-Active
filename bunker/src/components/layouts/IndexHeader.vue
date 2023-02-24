<template>

  <main>
    <div class="container grid lg:grid-cols-6 grid-cols-1 gap-1  max-w-full my-20 lg:mt-40  mx-auto lg:mx-0">
      <div class="flex text-center lg:col-span-3 lg:text-left flex-col justify-center lg:justify-center items-center lg:items-start">
        <h3 class="   lg:text-5xl font-bold tracking-tight text-2xl  md:text-3xl  ">RETAILING FOODSTUFF AT <span class="text-primary-100">WHOLESALE PRICES</span></h3>

        <p class=" my-3 text-sm lg:text-2xl font-bold capitalize text-secondary-100 tracking-tight">
          Bunker Helps Household Save money,time and stress by providing a membership for the  purpose of non-perisable foodstuff.
          At the lowest wholesale price delivered to your Doorstep for free. 
        </p>
        <div class="mt-2  ">
          <router-link to="/shop"
            class="inline-block rounded-lg bg-primary-100 px-7 py-2 text-base font-semibold leading-10 text-white shadow-sm ring-1 ring-primary-100 hover:bg-indigo-700 hover:ring-indigo-700">
            Shop Now
            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
          </router-link>

        </div>
      </div>


      <div class="flex justify-center lg:col-span-3 items-start lg:shadow-2xl">
        <img src="../../assets/combo.png" alt="header image" class="object-cover"/>
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

