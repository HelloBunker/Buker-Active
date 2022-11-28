<template>
  <Navbar />
  <main class="pt-20 -mt-2">
        <div class="mx-auto p-2">
          <!-- row -->
          <div class="flex flex-wrap flex-row">
            <div class="flex-shrink max-w-full px-4 w-full">   
              <h1 class="text-xl font-bold mt-3 mb-5">Order Detail</h1>
            </div>                                                 
            <div class="flex-shrink max-w-full px-4 w-full md:w-2/3 mb-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
                <h4 class="font-semibold mb-4">ID: INV006</h4>
                <div class="w-full mb-6 overflow-x-auto">
                  <table class="table-auto w-full ltr:text-left rtl:text-right text-gray-600">
                    <thead class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                      <tr>
                        <th class="p-4 font-normal">Products</th>
                        <th class="p-4 font-normal">Quantity</th>
                        <th class="p-4 font-normal">Pricing</th>
                        <th class="p-4 font-normal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-gray-700">
                        <td class="p-4 font-normal">
                          <a href="#">
                            <div class="flex flex-wrap flex-row items-center">
                              <div class="self-center"><img class="h-8 w-8" src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></div>
                              <div class="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">  
                                Nike Unisex-Child Free Rn (Big Kid)
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="p-4 font-normal text-center">1</td>
                        <td class="p-4 font-normal text-center">80$</td>
                        <td class="p-4 font-normal text-center">80$</td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td class="p-4 font-normal">
                          <a href="#">
                            <div class="flex flex-wrap flex-row items-center">
                              <div class="self-center"><img class="h-8 w-8" src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></div>
                              <div class="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">  
                                Nike in-Season TR 9 Womens Running Shoe
                              </div>
                            </div>
                          </a>
                        </td>
                        <td class="p-4 font-normal text-center">3</td>
                        <td class="p-4 font-normal text-center">70$</td>
                        <td class="p-4 font-normal text-center">210$</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="border-b dark:border-gray-700">
                        <td></td>
                        <td colspan="2" class="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Sub-Total</b></td>
                        <td class="p-4 font-normal text-center ltr:text-right rtl:text-left totals">$290</td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td></td>
                        <td colspan="2" class="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Discount</b></td>
                        <td class="p-4 font-normal text-center ltr:text-right rtl:text-left totals">15%</td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td></td>
                        <td colspan="2" class="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Tax</b></td>
                        <td class="p-4 font-normal text-center ltr:text-right rtl:text-left totals">5%</td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td></td>
                        <td colspan="2" class="p-4 font-normal text-center ltr:text-right rtl:text-left"><b>Total</b></td>
                        <td class="p-4 font-normal text-center ltr:text-right rtl:text-left totals">$258,8</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>  
              </div>
              <div class="flex flex-wrap flex-row -mx-4">
                <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6 md:h-full">
                    <h4 class="font-semibold mb-4">Billing Details</h4>
                    <h5 class="mb-1 font-semibold">John Doe</h5>
                    <address class="text-gray-500">
                      Mountain view, Joice 12<br>
                      San Francisco, CA 82987, USA<br>
                      <abbr title="Phone">Phone:</abbr> 123 456 789
                    </address>
                  </div>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6 md:h-full">
                    <h4 class="font-semibold mb-4">Payment and Shipping</h4>
                    <div class="text-gray-500">
                      <p class="mb-1"><span class="font-semibold">Payment:</span> Paypal</p>
                      <p class="mb-1"><span class="font-semibold">Delivered:</span> Ninja Express</p>
                      <p class="mb-1"><span class="font-semibold">Tracking:</span> INV102-98998</p>
                      <a href="#" class="hover:text-blue-500 underline">Tracking Now >></a> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-shrink max-w-full px-4 w-full md:w-1/3 mb-6">
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
                <h4 class="font-semibold mb-4">Order Status</h4>
                <div class="relative">
                  <ol class="mb-6">
                    <li class="bg-green-100 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded">
                      <div class="relative flex-shrink-0 w-12 text-center">
                        <span class="absolute ltr:left-1/2 ltr:-ml-1 top-10 -bottom-6 ltr:border-l-2 rtl:right-1/2 rtl:-mr-1 rtl:border-r-2 border-dashed border-gray-200 dark:border-gray-700"></span>
                        <div class="mr-auto">
                          <div class="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-bag" viewBox="0 0 16 16">
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="ml-4">
                        <div class="flex flex-row justify-between pb-2">
                          <div class="text-xs text-gray-500 self-center mr-3">
                            Aug 17, 2025 02.21 am
                          </div>
                        </div>
                        <p class="text-sm font-semibold">Order placed</p>
                      </div>
                    </li>
                    <li class="bg-green-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded">
                      <div class="relative flex-shrink-0 w-12 text-center">
                        <span class="absolute ltr:left-1/2 ltr:-ml-1 top-10 -bottom-6 ltr:border-l-2 rtl:right-1/2 rtl:-mr-1 rtl:border-r-2 border-dashed border-gray-200 dark:border-gray-700"></span>
                        <div class="mr-auto">
                          <div class="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-box" viewBox="0 0 16 16">
                              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="ml-4">
                        <div class="flex flex-row justify-between pb-2">
                          <div class="text-xs text-gray-500 self-center mr-3">
                            Aug 19, 2025 02.21 am
                          </div>
                        </div>
                        <p class="text-sm font-semibold">Packing</p>
                      </div>
                    </li>
                    <li class="flex p-3 rounded">
                      <div class="relative flex-shrink-0 w-12 text-center">
                        <span class="absolute ltr:left-1/2 ltr:-ml-1 top-10 -bottom-6 ltr:border-l-2 rtl:right-1/2 rtl:-mr-1 rtl:border-r-2 border-dashed border-gray-200 dark:border-gray-700"></span>
                        <div class="mr-auto">
                          <div class="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-truck" viewBox="0 0 16 16">
                              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="ml-4">
                        <div class="flex flex-row justify-between pb-2">
                          <div class="text-xs text-gray-500 self-center mr-3">
                            coming soon
                          </div>
                        </div>
                        <p class="text-sm font-semibold">Shipped</p>
                      </div>
                    </li>
                    <li class="flex p-3 rounded">
                      <div class="relative flex-shrink-0 w-12 text-center">
                        <span class="absolute ltr:left-1/2 ltr:-ml-1 top-10 -bottom-6 ltr:border-l-2 rtl:right-1/2 rtl:-mr-1 rtl:border-r-2 border-dashed border-gray-200 dark:border-gray-700"></span>
                        <div class="mr-auto">
                          <div class="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-check" viewBox="0 0 16 16">
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="flex flex-row justify-between pb-2">
                          <div class="text-xs text-gray-500 self-center mr-3">
                            coming soon
                          </div>
                        </div>
                        <p class="text-sm font-semibold">Delivered</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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