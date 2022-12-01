<template>
   <!-- Nav -->
  <NavBar/>
  <!-- carosel -->
  <section class="root relative">
        <!-- <div class="banner h-52 flex justify-center bg-cover  px-0 ">
            
        </div> -->
       
    </section>
</template>

<script>
import NavBar  from '@/components/layouts/shop/NavBar.vue'
import Button from "@/components/utilities/Button.vue"
export default {
components:{NavBar,Button}
}
</script>

<style lang="scss" scoped>

div.banner{
    background: 
    linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url('~@/assets/banner.jpg');
background-size:cover;
background-repeat:no-repeat;
background-position: center;
padding:0px !important; 
  
  
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