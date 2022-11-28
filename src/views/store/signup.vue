<template>
  <Header />
  <section class="bg-white-500 shadow-2xl">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:w-full  lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-secondary-100 ">
                <img class="w-full h-full mr-2" src="@/assets/logo1.png" alt="logo">

            </a>
            <div class="w-full bg-secondary rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-secondary-100 md:text-2xl">
                        Create An Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="firstname" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                firstname</label>
                            <input type="text" name="firstname" id="firstname"
                                class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                placeholder="" required="">
                        </div>
                        <div>
                            <label for="lastname" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                lastname</label>
                            <input type="text" name="lastname" id="lastname"
                                class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                placeholder="" required="">
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                placeholder="name@company.com" required="">
                        </div>
                        <div>
                            <label for="phonenumber" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                phone </label>
                            <input type="phone" name="phonenumber" id="phonenumber"
                                class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                placeholder="" required="">
                        </div>

                        
<label for="countries" class="block mb-2 text-sm font-medium text-secondary-100">Select Membership Plan</label>
<select id="countries" class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ">
  <option>Anually Plan</option>
  <option>Quaterly</option>
 
</select>

                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-secondary-100 ">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                                            required="">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="terms" class="text-secondary-100">I agree to terms and codition                                            me</label>
                                    </div>
                                </div>
                               
                            </div>
                            <button type="submit"
                                class="w-full my-2 text-secondary bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                               Up</button>
                            <p class="text-sm font-light text-secondary-100 ">
                                already have an account? <router-link
                              to="shop/login"
                                class="font-medium text-primary hover:underline ">Sign In
                                   </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <Footer /> 
</template>

<script>
import Header from '@/components/layouts/shop/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
export default {
    components: { Header, Footer }
}
</script>

<style>

</style>