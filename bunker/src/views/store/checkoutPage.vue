<template>
    <Header />
    <section>
        <!-- <form @submit.prevent="Pay()">
            <div class="flex  md:flex-row flex-col justify-between px-2 mb-10 lg:space-x-2.5 gap-x-3 ">
                <div class="md:w-2/5 w-full">
                    <h2 class="font-bold text-primary-100  text-center text-2xl mb-4">Delivery Details</h2>



                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-secondary-100 ">Name</label>
                        <input type="text" v-model="name"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary-100  focus:border-primary-100  block w-full p-2.5"
                            placeholder="" required>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="block mb-2 text-sm font-medium text-secondary-100 ">Phone
                            number</label>
                        <input type="text" v-model="phone_no"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary-100  focus:border-primary-100  block w-full p-2.5"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="address" class="block mb-2 text-sm font-medium text-secondary-100 ">address</label>
                        <input type="address" v-model="address"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary-100  focus:border-primary-100  block w-full p-2.5"
                            required>
                    </div>




                </div>

                <div class="w-full md:w-2/5 flex flex-col md:my-16 overflow-x-auto">


                    <table v-if="cart.length > 0"
                        class="w-full shadow border- bg-gray-200 text-sm text-left text-secondary-100 ">
                        <thead class="text-xs text-secondary-100 uppercase bg-secondary ">
                            <tr>

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
                            <tr class="bg-secondary  " v-for="item in cart" :key="item.id">

                                <td class="py-4 px-6 font-semibold border-2">
                                    {{ item.product_name }}
                                </td>
                                <td class="py-4 px-6 font-semibold border-2">
                                    {{ item.quantity }}
                                </td>

                                <td class="py-4 px-6 font-semibold text-gray-900 border-2">
                                    {{ item.price }}
                                </td>
                                <td class="py-4 px-6 font-semibold text-gray-900 border-2">
                                    {{ item.quantity * item.price }}
                                </td>

                            </tr>







                        </tbody>


                    </table>

                    <span v-else class="flex justify-center items-center ">
                        <tr>
                            <p class="text-danger text-center text-xl center">Empty cart</p>
                        </tr>
                    </span>
                </div>

            </div>
            <div class="flex justify-end mx-5 flex-col my-6" v-if="cart.length > 0">


                <div class="flex justify-end">
                    <span class="p-3 text-primary-100  lg:text-lg text-sm"> Delivery Fee: <span class="text-secondary-100">
                            free</span>
                    </span><br>
                </div>
               
                <div class="flex justify-end">
                    <span class="p-3 text-primary-100  lg:text-lg text-sm"> Total: <span class="text-secondary-100">NGN
                            {{ total }}</span>
                    </span><br>
                </div>
                <div class="flex justify-end mb-3">

                  

                </div>
                <button
                    class="bg-primary-100   ml-auto border-secondary-100 p-3 rounded-lg lg:w-1/4 md:w-1/4 sm:w-2/4 text-secondary-50 hover:bg-primary-100 -100 ">Place Order </button>


            </div>
        </form> -->


        <div
            class="lg:bg-[url('@/assets/checkout.svg')] lg:bg-contain lg:flex lg:flex-col lg:justify-center lg:items-center  lg:bg-center lg:bg-scroll w-full lg:h-screen lg:bg-no-repeat">
            <div class="lg:shadow-2xl bg-secondary-50 lg:shadow-secondary-100   p-5">

                <nav class="flex px-5 py-3 justify-center items-center text-gray-70 bg-gray-50" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <router-link :to="{ name: 'Home' }"
                                class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-primary-100 ">
                                <svg aria-hidden="true" class="w-2 h-2 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                    </path>
                                </svg>
                                Home
                            </router-link>
                        </li>
                        <li class="inline-flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <router-link :to="{ name: 'Cart' }"
                                class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-primary-100 ">

                                Cart
                            </router-link>
                        </li>

                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-xs font-medium text-gray-500 md:ml-2 ">Checkout</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <h5 class="text-lg my-4 px-6">Checkout</h5>
                <div class="grid  lg:grid-col-2 gap-3 lg:grid-flow-col grid-flow-row  grid-col-1  ">

                    <div class="order-2 lg:order-1 px-6">

                        <h6 class="text-xs text-secondary-100  mb-2 uppercase">Shipping Details</h6>


                        <form @submit.prevent="pay()" class="">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="fullname" id="fullname" v-model="name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                                    placeholder=" " required />
                                <label for="fullname"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fullname</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" name="address" id="address" v-model="address"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                                    placeholder=" " required />
                                <label for="address"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="phone_number" id="phone_number" v-model="phone_no"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                                    placeholder=" " required />
                                <label for="phone_number"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                    number</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="Email" name="email" id="email" v-model="email"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary-100 peer"
                                    placeholder=" " required />
                                <label for="emaill"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-100  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <button type="Submit" @click="paynowClicked()"
                                class="text-white bg-blue-500 hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                <img class="w-5 h-3 mx-1" src="@/assets/paystack-2.svg" />
                                Pay Now
                            </button>
                            <button type="Submit" @click="paylaterClicked()"
                                class="text-white bg-primary-100 hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                <i class="bi bi-clock px-1 text-blue-900 font-bold "></i>
                                Pay later
                            </button>

                        </form>


                    </div>
                    <div class="order-1 lg:order-2 ">
                        <h6 class="text-xs font-semibold text-secondary-100 uppercase px-6">Your Order</h6>
                        <table class="w-full table-auto text-sm text-left text-gray-500 " v-if="cart.length > 0">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                                <tr>

                                    <th scope="col" class="px-6 py-0">

                                    </th>
                                    <th scope="col" class="px-6 py-0">

                                    </th>
                                    <th scope="col" class="px-6 py-0">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b  hover:bg-gray-50 " v-for="item in cart" :key="item.id">

                                    <th scope="row"
                                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="w-10 h-10" :src="BaseUrl + item.product_image" alt="Jese image">
                                        <div class="pl-3">
                                            <div class="text-base text-secondary-100 font-semibold"> {{ item.product_name }}
                                            </div>
                                            <div class="font-normal text-gray-500 lowercase">Product Category</div>
                                        </div>
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ item.quantity }}
                                    </td>

                                    <td class="px-6 py-4 text-right">
                                        {{ item.price }}
                                    </td>


                                </tr>



                                <tr class="bg-white font-bold hover:bg-gray-50 ">
                                    <td class="px-6 pt-2 pb-0">
                                        Subtotal
                                    </td>
                                    <td></td>
                                    <td class="px-6 pt-2 pb-0 text-right">
                                        {{ total }}
                                    </td>
                                </tr>
                                <tr class="bg-white font-bold   hover:bg-gray-50 ">
                                    <td class="px-6 pt-2 pb-0 ">
                                        Shipping
                                    </td>
                                    <td></td>
                                    <td class="px-6 pt-2 text-right pb-0">
                                        0.00N
                                    </td>
                                </tr>
                                <tr class="bg-white font-bold   hover:bg-gray-50 ">
                                    <td class="px-6 pt-2 pb-0">
                                        Total
                                    </td>
                                    <td></td>
                                    <td class="px-6 text-right pt-2 pb-0">
                                        {{ total }}
                                    </td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
        </div>






    </section>
</template>

<script>
import Swal from "sweetalert2";
export default {


    data() {
        return {
            msg: "",
            cart: [],
            name: "",
            phone_no: "",
            address: "",
            email: "",
            BaseUrl: "https://bunker-api.hellobunker.com/product/",
            payment_type: "null",

        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        total() {
            let total = 0;
            Object.values(this.cart).forEach((item) => (total += item.price * item.quantity));
            return total.toFixed(2)
        }
    },
    mounted() {
        this.$store.dispatch('view_cart')
            .then(response => {
                console.log(response.data.data);
                this.cart = response.data.data;
                console.log(this.cart)
            }).catch(error => {
                console.log(error);
            });

        this.name = this.currentUser.useri.first_name;

    },

    methods: {
        paynowClicked() {
            this.payment_type = "pay_now"
        },


        paylaterClicked() {
            this.payment_type = "pay_later"
        },

        pay() {

            if (this.payment_type === "pay_later") {
                let details = [
                    { reciever: this.name, address: this.address, phone_no: this.phone_no, payment_method: this.payment_type },
                ];


                this.$store.dispatch('Pay', details)
                    .then(response => {
                        console.log(response);

                        Swal.fire({
                            title: "Order Placed",
                            text: response.data.message,
                            icon: "success",
                            confirmButtonColor: '#7DAB2E'
                        }).then(() => {

                            Swal.fire({
                                title: 'See Orders History or Continue shopping',
                                showDenyButton: true,
                                confirmButtonText: `My Orders`,
                                confirmButtonColor: '#7DAB2E',
                                // denyButtonColor: '#7DAB2E',
                                denyButtonText: `Continue shopping`,
                            }).then((result) => {

                                if (result.isConfirmed) {
                                    console.log('true');
                                    this.$router.push({ name: 'OrderHistory' });
                                    
                                } else  {
                                    this.$router.push({ name: 'Shop' });
                                }
                            });
                        });
                    }).catch(error => {
                        console.log(error);
                    })
            } else if (this.payment_type === "pay_now") {
                // handle paystack logic
            } else {
                // if none of the buttons where clicked
            }

        }

    }
}
</script>

<style></style>