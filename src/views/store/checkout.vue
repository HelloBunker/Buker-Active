<template>
<Header />
<section>
<div class="flex  md:flex-row flex-col justify-between m-2 mb-10 ">
<div class="md:w-2/5 w-full">
<h2 class="font-bold text-primary text-2xl mb-4">Delivery Details</h2>


<form>
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-secondary-100 ">Name</label>
    <input type="text" id="name" class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="" required="">
  </div>
  <div class="mb-6">
    <label for="phone" class="block mb-2 text-sm font-medium text-secondary-100 ">Phone number</label>
    <input type="phone" id="phone" class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" required="">
  </div>
 
</form>


</div>
<div class="w-full md:w-2/5">
   
   
    <table class="w-full overflow-x-auto text-sm text-left text-secondary-100 o">
        <thead class="text-xs text-secondary-100 uppercase bg-seondary ">
            <tr>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    Product
                </th>
                <th scope="col" class="py-3 px-6">
                    Qty
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
                <th scope="col" class="py-3 px-6">
                   Total
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-secondary border-b ">
                <td class="p-4 w-16">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Apple Watch">
                </td>
                <td class="py-4 px-6 font-semibold ">
                    Apple Watch
                </td>
                <td class="py-4 px-6 font-semibold ">
                   1psc
                </td>
               
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
               
            </tr>
            <tr class="bg-secondary border-b ">
                <td class="p-4 w-16">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Apple Watch">
                </td>
                <td class="py-4 px-6 font-semibold ">
                    Apple Watch
                </td>
                <td class="py-4 px-6 font-semibold ">
                   1psc
                </td>
               
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
               
            </tr>
            <tr class="bg-secondary border-b ">
                <td class="p-4 w-16">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Apple Watch">
                </td>
                <td class="py-4 px-6 font-semibold ">
                    Apple Watch
                </td>
                <td class="py-4 px-6 font-semibold ">
                   1psc
                </td>
               
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    $599
                </td>
               
            </tr>




           
           
        </tbody>
     </table>
     <div class="flex justify-end mx-5 flex-col"> 


<div class="flex justify-end">
<span class="p-3 text-primary text-lg"> Delivery Fee: <span class="text-secondary-100"> 5000</span> </span><br>
</div>
<div class="flex justify-end">
<span class="p-3 text-primary text-lg"> Sub Total: <span class="text-secondary-100"> 5000</span> </span><br>
</div>
<div class="flex justify-end">
<span class="p-3 text-primary text-lg"> Total: <span class="text-secondary-100"> 10000</span> </span><br>
</div>
<h2 class="text-secondary-100 text-lg underlined text-right text-bold mb-3">payment method</h2>  
<div class="flex justify-end mb-3">
 
<div class="flex items-center px-4 rounded border border-primary-100 mx-3">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-primary  bg-secondary border-primary-100 focus:ring-secondary-100  focus:ring-2 ">
    <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-secondary-100 ">Pay Now</label>
</div>
<div class="flex items-center px-4 rounded border border-primary-100 mx-3">
    <input checked="" id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-primary  bg-secondary border-primary-100 focus:ring-secondary-100  focus:ring-2 ">
    <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-secondary-100 ">Pay Later</label>
</div>

    
</div>
<button class="bg-primary border border-secondary-100 p-3 rounded-lg text-secondary hover:bg-primary-100 ">Proceed To Pay</button>

</div>
</div>
</div>

</section>

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