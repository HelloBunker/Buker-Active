<template>
    <header>
        

<section class="root relative">
        <div class="banner h-screen flex justify-center bg-cover  px-0 ">
            <div class="content m-auto  text-secondary text-center uppercase leading-5 whitespace-pre-wrap w-9/12">
            <h1 class="md:text-6xl  text-6xl  mb-3 pb-6 font-extrabold text-secondary  ">Retailing Foodstuff At Wholesale Prices</h1>
            <p class="mb-2 mx-5 pb-6 md:text-xl text-sm">Bunker helps households save money,
                time & stress by providing a membership <br>for the purpose
                of non-perishable foodstuff,
                at the lowest wholesale price, delivered to your doorstep for free.</p>
            <router-link to="/shop"><Button content="Shop Now " theme="primary" /> </router-link>
            
        </div>
        </div>
        <div class="banner-curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path class="banner-curve-fill b" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"/>
</svg>	
        </div>
    </section>
    </header>


</template>

<script>

import Button from "@/components/utilities/Button.vue"
export default {
    components: { Button }
}
</script>

<style lang="scss" scoped >


div.banner{
    background: 
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url('~@/assets/banner1.jpg');
background-size:cover;
background-position:center;
padding:0px !important; 
  div.content{

  h1 {
  
//   margin: 0;
//   line-height:1.1;
//   white-space:pre-wrap;

//   font-wrap: wrap;
//   font-size: 3rem;

}


  }
  
}
  div.banner-curve{
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
    // z-index: -1;
    pointer-events: none;
    bottom: 0;
    // background: transparent;
  
    .banner-curve-fill{
        fill:white ;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    }
}
</style>

