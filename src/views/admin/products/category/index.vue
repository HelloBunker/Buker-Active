<template>
    <Navbar />
    <main class="pt-20 -mt-2">
        <div class="mx-auto p-2">
            <!-- row -->
            <div class="flex flex-wrap flex-row">
                <div class="flex-shrink max-w-full px-4 w-full">
                    <p class="text-xl font-bold mt-3 mb-5">Manage products categories</p>
                </div>
                <div class="flex-shrink max-w-full px-4 w-full mb-6">
                    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
                        <div class="flex flex-wrap flex-row -mx-4">
                            <div class="flex-shrink max-w-full px-4 w-full">
                                <div class="md:flex md:justify-between">
                                    <div>
                                        <router-link to="create_product_category"
                                            class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">
                                            Add new product category <svg xmlns="http://www.w3.org/2000/svg" width="12"
                                                height="12" fill="currentColor"
                                                class="inline-block ltr:ml-1 rtl:mr-1 bi bi-plus-lg"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z">
                                                </path>
                                            </svg></router-link>


                                        <router-link to="admin_products"
                                            class="py-2 px-4 mb-3 block lg:inline-block text-center rounded leading-5 text-gray-100 bg-green-300 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">
                                            View All Products </router-link>
                                    </div>


                                </div>
                            </div>

                            <div class="w-full mb-6 overflow-x-auto">
                                <form action="#">
                                    <table
                                        class="table-sorter table-bordered w-full ltr:text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                        <thead>
                                            <tr class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
                                                <th data-sortable="false"><input id="check_all" type="checkbox"
                                                        class="form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700">
                                                </th>
                                                <th>category</th>
                                                <th class="hidden lg:table-cell">Update</th>
                                                
                                                <th data-sortable="false">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"
                                                        class="checkedall form-checkbox w-4 h-4 text-indigo-500 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-700">
                                                </td>
                                                <td>
                                                    <router-link to="#">
                                                        <div class="flex flex-wrap flex-row items-center">
                                                            <div class="self-center"><img class="h-8 w-8"
                                                                    src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                                                            </div>
                                                            <div
                                                                class="leading-5 dark:text-gray-300 flex-1 ltr:ml-2 rtl:mr-2 mb-1">
                                                                Category Name

                                                            </div>
                                                        </div>
                                                    </router-link>
                                                </td>
                                                <td class="text-center">
                                                    <router-link to="javascript:;"
                                                        class="inline-block ltr:mr-2 rtl:ml-2 hover:text-red-500"
                                                        title="Delete">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                            <path
                                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
                                                            </path>
                                                            <path fill-rule="evenodd"
                                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
                                                            </path>
                                                        </svg>
                                                    </router-link>
                                                    <router-link to="edit_product_category"
                                                        class="inline-block ltr:mr-2 rtl:ml-2 hover:text-green-500"
                                                        title="Edit">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-pencil-square"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
                                                            </path>
                                                            <path fill-rule="evenodd"
                                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
                                                            </path>
                                                        </svg>
                                                    </router-link>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </main>
    <Footer />
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