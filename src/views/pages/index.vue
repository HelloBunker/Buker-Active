<template>
    <div class="">
        <!-- nav bar component -->
        <NavBar />

        <!-- header component -->
        <Header />
        <!-- body -->
        <main class="mb-0 ">
            <div class="flex flex-col justify-between mt-5 mb-0">
                <!-- about us section -->
                <div id="about" class="flex md:flex-row flex-col justify-between mb-14 py-5 pb-8 px-5 mx-auto">
                    <div class="md:w-1/2 w-full  md:h-[300px] md:mx-4 pl-8 mx-auto">
                        <img src="@/assets/about-img.jpeg" class="h-[300px]" alt="" srcset="">
                    </div>
                    <div class="md:w-1/2 w-full md:h-[500px] md:mx-6 ml-6 mx-auto  my-3 md:my-0">
                        <h1 class="md:text-6xl text-3xl font-extrabold pl-7">About Us</h1>
                        <hr class="dash text-primary w-1/4 my-2 mr-6 mb-10" />
                        <p class="text-xl text-black-100 mb-8 text-bold  px-4 text-justify">
                            We see how you are paying more and more for less and less when you go buy foodstuff in the
                            market.
                        </p>

                        <p class="text-xl text-black-100 mb-10 text-bold px-4 text-justify">
                            We see how the onslaught of rising food prices is severely affecting your budget… And in
                            response we are offering you the opportunity to take cover in our bunker an online community
                            where many like you will be saving as much as 30% of what you spend on foodstuff and other
                            essential commodities.
                        </p>

                        <router-link to="/shop"><button class="banner mx-4"> Place Order</button></router-link>

                    </div>
                </div>
                <!-- how we operate section -->
                <div class="flex flex-col md:justify-between justify-between gap-2 md:mb-12 mx-8 mb-2 mt-10 px-4  lg:flex-row ">
                    <div class="md:flex md:items-center lg:w-1/6">
                        <div>
                            <h3 class="text-3xl md:text-4xl font-bold md:text-center text-left pl-7">How Bunker Works
                            </h3>
                            <hr class="dash text-primary w-1/6 my-2 md:mx-auto " />
                        </div>


                    </div>
                    <div class="md:mt-20  lg:mb-3 mt-2 how-to lg:w-[34%] w-full mb-7  flex md:items-center">
                        <img src="@/assets/how-3.jpg" alt="" class="object-cover object-center h-full">
                    </div>

                    <div class=" flex flex-col md:w-[50%] w-full justify-center md:justify-between ">
                        <div class="flex md:flex-row flex-col w-full justify-center">
                            <div class=" flex  icon h-1/2 md:mx-4 bg-secondary 
                             mx-auto p-6 mb-3 md:mb-2">
                                <i class="bi bi-house  text-primary md:text-7xl text-5xl "></i>
                                <!-- <img src="../../assets/home2.png" alt="" class="md:h-[auto] h-[70px] w-50% md:w-full"> -->
                            </div>
                            <div>
                                <h3 class="text-xl font-bold ml-4 mb-3 text-left md:text-left"> Subscribe To Our Store</h3>
                                <p class="text-lg text-secondary-100 leading-8 ml-4 mb-6 md:px-0  text-justify md:text-left">
                                    Begin by paying a Quarterly Membership Fee of just N5,000 (or Annual Membership fee of N15,000) and become a Bunker Wholesale Club member with exclusive access to so many cost-cutting, time saving and stress-reducing benefits.</p>
                            </div>
                        </div>
                        <div class="flex md:flex-row flex-col w-full justify-center">
                            <div class=" flex icon h-3/5 bg-secondary mb-3 md:mb-2
                            md:mx-4 mx-auto p-6">
                                <i class="bi bi-laptop text-primary md:text-7xl text-5xl "></i>
                                <!-- <img src="../../assets/home2.png" alt="" class="md:h-[auto] h-[70px] w-50% md:w-full"> -->
                            </div>
                            <div>
                                <h3 class="text-xl font-extrabold ml-4 mb-3 text-left md:text-left"> Order Online</h3>
                                <p class="text-lg text-secondary-100 leading-8 ml-4 mb-6 md:px-0 text-justify md:text-left">
                                    Place your order from the comfort of your home by simply visiting our online warehouse or by calling any of our hotlines 07010287897, 08099224421 or 08099224425.
                                </p>
                            </div>
                        </div>
                        <div class="flex md:flex-row flex-col w-full justify-center">
                            <div class=" flex h-1/2 mb-3 icon bg-secondary md:mx-4 
                             mx-auto p-6">
                                <i class="bi bi-truck text-primary  md:text-7xl text-5xl "></i>
                                <!-- <img src="../../assets/home2.png" alt="" class="md:h-[auto] h-[70px] w-50% md:w-full"> -->
                            </div>
                            <div>
                                <h3 class="text-xl font-extrabold ml-4 mb-3 md:mb-2 text-left md:text-left"> Quality Free Delivery</h3>
                                <p class="text-lg text-secondary-100 leading-8 ml-4 mb-6 md:px-0  text-justify md:text-left">
                                    Once order has been confirmed, expect delivery within 3 hours for FREE. We deliver between 7am to 7pm, 7 Days/Week (Yes, including Sundays and public holidays...you thought we were joking when we said we've got you covered? 😀</p>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- plans section -->
                <div class="flex md:flex-col flex-col  mb-12 py-5 mx-auto px-4" id="plan">
                    <div class="md:flex md:items-center  items-start">
                        <div>
                            <h3 class="text-3xl md:text-4xl font-bold md:text-center text-left pl-7">Join the Warehouse Club
                            </h3>
                            <hr class="dash text-primary w-1/6 mt-2 md:mx-auto mb-3" />
                        </div>


                    </div>
                    <div class="flex flex-col gap-14 md:flex-row">
                        <!-- card1 -->
                        <div class="">
                            <div class="flip-card ">
                                <div class="flip-card-inner p-2 relative w-full h-full ">
                                    <div
                                        class="flip-card-front p-8 absolute flex-col bg-secondary flex items-center  justify-center text-secondary-100 w-full h-full ">
                                        <i class="bi bi-credit-card text-7xl text-primary mx-auto mb-2"></i>
                                        <h1 class="text-3xl font-bolder text-secondary-100 mb-2 text-center"> Quarterly
                                            Memebership
                                            Plan</h1>
                                        <h2 class="text-2xl font-bolder text-primary mb-2 text-center">Pay &#8358;12,000
                                            for 3
                                            Months</h2>

                                    </div>
                                    <div class="flip-card-back bg-secondary text-secondary-100 p-8">
                                        <h2 class="text-4xl font-bolder text-primary-100 mb-2 text-center">Benefits</h2>
                                        <ul class="list-disk">
                                            <li class="text-sm text-secondary-100 mb-3 ">
                                                <p>Buy up to N100k worth of groceries at wholesale prices and save at
                                                    least N30, 000.
                                                </p>
                                            </li>
                                            <li class="text-sm text-secondary-100 mb-3">
                                                <p>Get free express delivery on your order which will be delivered
                                                    within 3 hours.
                                                </p>
                                            </li>
                                            <li class="text-sm text-secondary-100 mb-3">
                                                <p>
                                                    Enjoy the option to pay flexibly after
                                                    receiving your order
                                                </p>
                                            </li>
                                        </ul>
                                        <router-link to="/shop" class="mx-auto"><Button content="Subscribe Now"
                                                theme="primary" /></router-link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card2
                        <div class="">
                            <div class="flip-card ">
                                <div class="flip-card-inner p-2 relative w-full h-full ">
                                    <div
                                        class="flip-card-front p-8 absolute flex-col bg-secondary flex items-center  justify-center text-secondary-100 w-full h-full ">
                                        <i class="bi bi-credit-card text-7xl text-primary mx-auto mb-2"></i>
                                        <h1 class="text-3xl font-bolder text-secondary-100 mb-2 text-center"> Aunnual
                                            Memebership
                                            Plan</h1>
                                        <h2 class="text-2xl font-bolder text-primary mb-2 text-center">Pay &#8358;35,000
                                            for 12
                                            Months</h2>

                                    </div>
                                    <div class="flip-card-back bg-secondary text-secondary-100 p-8">
                                        <h2 class="text-4xl font-bolder text-primary-100 mb-2 text-center">Benefits</h2>
                                        <ul class="list-disk">
                                            <li class="text-sm text-secondary-100 mb-3 ">
                                                <p>Buy up to N100k worth of groceries at wholesale prices and save at
                                                    least N30, 000.
                                                </p>
                                            </li>
                                            <li class="text-sm text-secondary-100 mb-3">
                                                <p>Get free express delivery on your order which will be delivered
                                                    within 3 hours.
                                                </p>
                                            </li>
                                            <li class="text-sm text-secondary-100 mb-3">
                                                <p>
                                                    Enjoy the option to pay flexibly after
                                                    receiving your order
                                                </p>
                                            </li>
                                        </ul>
                                        <router-link to="/shop" class="mx-auto"><Button content="Subscribe Now"
                                                theme="primary" /></router-link>

                                    </div>
                                </div>
                            </div>
                        </div>-->
                        
                    </div>
                </div>

                <!-- credit section -->

                <div>
                    <div class="credit-bg bg-cover mx-0 w-full mb-0 ">
                        <div class="flex  flex-col   md:p-20 p-7">
                            <i class="bi bi-cash text-secondary text-5xl md:text-6xl"></i>
                            <h1 class="text-xl text-secondary font-bolder mb-3">
                                Buy Now And Pay Later Conveniently
                                .</h1>
                            <h1 class="text-5xl mb-3 text-secondary font-extrabold ">Get Bunker Foodstuff On Credit</h1>
                            <p class="text-lg text-secondary-100 mb-3 font-bold">
                                Now you can get your foodstuff delivered to your doorstep and pay later conveniently.

                            </p>
                            <router-link to="/shop"> <Button content="See More.." theme="banner" /></router-link>
                        </div>
                    </div>

                </div>
            </div>

        </main>


        <Footer />
    </div>




</template>

<script>
import Button from '@/components/utilities/Button.vue'

import Footer from '@/components/layouts/Footer.vue'
import NavBar from '@/components/layouts/NavBar.vue'
import Header from '@/components/layouts/Header.vue'
export default {
    name: 'Home',
    components: { Header, Button, NavBar, Footer }
}

</script>

<style lang="scss" scoped>
// $primary-color : #7DAB2E;

.dash {
    border-bottom-width: 4px;
    border-bottom-color: #7DAB2E;

}

.how-to {

    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;

}

.flip-card {
    width: 100%;
    height: 400px;
    background: transparent;
    perspective: 1000px;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;





    /* Style the back side */


}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

.flip-card-back {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    height: 100%;
    // width:300px;
    transform: rotateY(180deg);
}

.flip-card-inner {

    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card-front {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

}

.credit-bg {
    background:
        linear-gradient(rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),
        url('~@/assets/how-to.jpg');
    min-height: 600px;

    height: auto;
    background-position: top center;
    background-size: cover;


}

.icon {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 50%;
}
</style>