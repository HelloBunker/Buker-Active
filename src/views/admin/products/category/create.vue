<template>
    <Navbar />

    <main class="pt-20 -mt-2">
        <div class="mx-auto p-2">
            <!-- row -->
            <div class="flex flex-wrap flex-row">
               
                <div class="flex-shrink max-w-full px-4 w-full">
                   <router-link to="admin_products_category"><button class="text-xl bg-green-500  p-4 rounded-xl text-secondary font-bold mt-3 mb-5">All Category</button></router-link>
                </div> 
                <div class="flex-shrink max-w-full px-4 w-full">
                    <p class="text-xl font-bold mt-3 mb-5">Create new Category</p>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full mb-6">
                    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                        <form class="flex flex-wrap flex-row -mx-4">
                            <div class="flex-shrink max-w-full px-4 w-full mb-4">
                                <label for="inputtitle" class="inline-block mb-2">Category Name</label>
                                <input type="text"
                                    class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                                    id="inputtitle">
                            </div>
                            
                            <div class="flex-shrink max-w-full px-4 w-full mb-4">
                                <label for="imageSingle" class="inline-block mb-2">Thumbnail (80x80 png, gif, svg or
                                    jpg)</label>
                                <div id="imageSingle" class="dropzone single-dropzone mb-4">
                                    <div class="dz-message" data-dz-message>
                                        <div class="pre-upload flex flex-col justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                class="mx-auto text-gray-500 inline-block w-10 h-10 bi bi-cloud-arrow-up"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z">
                                                </path>
                                                <path
                                                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z">
                                                </path>
                                            </svg>
                                            <div class="py-3"><span>Drag & drop images here</span></div>
                                        </div>
                                        <div class="pre-upload text-center">
                                            <button
                                                class="py-1.5 px-3 inline-block text-center rounded leading-normal text-gray-800 bg-gray-100 border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 mr-2 dark:bg-gray-300">Browse
                                                file</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           

                            <div class="flex-shrink max-w-full px-4 w-full">
                                <button type="submit"
                                    class="py-2 px-4 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">Add
                                Category <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                        fill="currentColor" class="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z">
                                        </path>
                                    </svg></button>
                            </div>
                        </form>
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