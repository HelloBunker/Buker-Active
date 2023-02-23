<template>
    <Header />
    <section>
        <form @submit.prevent="Pay()">
            <div class="flex  md:flex-row flex-col justify-between px-2 mb-10 lg:space-x-2.5 gap-x-3 ">
                <div class="md:w-2/5 w-full">
                    <h2 class="font-bold text-primary text-center text-2xl mb-4">Delivery Details</h2>



                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-secondary-100 ">Name</label>
                        <input type="text" v-model="name"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="" required>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="block mb-2 text-sm font-medium text-secondary-100 ">Phone
                            number</label>
                        <input type="text" v-model="phone_no"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="address" class="block mb-2 text-sm font-medium text-secondary-100 ">address</label>
                        <input type="address" v-model="address"
                            class="bg-secondary border border-secondary-100 text-secondary-100 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            required>
                    </div>




                </div>

                <div class="w-full md:w-2/5 flex flex-col md:my-16 overflow-x-auto">

                    <!-- <h2 class="font-bold text-primary text-center text-2xl mb-4">product ordered</h2> -->

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
                    <span class="p-3 text-primary lg:text-lg text-sm"> Delivery Fee: <span class="text-secondary-100">
                            free</span>
                    </span><br>
                </div>
                <!-- <div class="flex justify-end">
                                    <span class="p-3 text-primary text-lg"> Sub Total: <span class="text-secondary-100"> 5000</span>
                                    </span><br>
                                </div> -->
                <div class="flex justify-end">
                    <span class="p-3 text-primary lg:text-lg text-sm"> Total: <span class="text-secondary-100">NGN
                            {{ total }}</span>
                    </span><br>
                </div>
                <!-- <h2 class="text-secondary-100 text-lg underlined text-right text-bold mb-3">payment method</h2> -->
                <div class="flex justify-end mb-3">

                    <!-- <div class="flex items-center px-4 rounded border border-primary-100 mx-3">
                                        <input v-model="payment_type" type="radio" value="paynow" name="bordered-radio"
                                            class="w-4 h-4 text-primary  bg-secondary border-primary-100 focus:ring-secondary-100  focus:ring-2 ">
                                        <label for="bordered-radio-1"
                                            class="py-4 ml-2 w-full text-sm font-medium text-secondary-100 ">make order</label>
                                    </div> -->
                    <!-- <div class="flex items-center px-4 rounded border border-primary-100 mx-3">
                                        <input checked="" disable v-model="payment_type" type="radio" value="paylater"
                                            name="bordered-radio"
                                            class="w-4 h-4 text-primary  bg-secondary border-primary-100 focus:ring-secondary-100  focus:ring-2 ">
                                        <label for="bordered-radio-2"
                                            class="py-4 ml-2 w-full text-sm font-medium text-secondary-100 ">Pay Later</label>
                                    </div> -->


                </div>
                <button
                    class="bg-primary  ml-auto border-secondary-100 p-3 rounded-lg lg:w-1/4 md:w-1/4 sm:w-2/4 text-secondary hover:bg-primary-100 ">Place Order </button>


            </div>
        </form>

    </section>
<!-- <Footer /> --></template>

<script>
import Header from '@/components/layouts/shop/Header.vue'
import Swal from "sweetalert2";
import Button from '@/components/utilities/Button.vue'
export default {
    components: { Header, Button,Swal},

    data() {
        return {
            msg: "",
            cart: [],
            name: "",
            phone_no: "",
            address: "",
            payment_type: "pay_now",

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
        Pay() {
            let details = [
                { reciever: this.name, address: this.address, phone_no: this.phone_no, payment_method: this.payment_type },
            ];

            // console.log(details)
            this.$store.dispatch('Pay', details)
                .then(response => {
                    console.log(response);
                    // this.cart = response.data.data;
                    // console.log(this.cart)
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
                            denyButtonText: `Continue shopping`,
                        }).then((result) => {

                        if (result.isConfirmed) {
                            // User clicked on Link 1, navigate to Link 1
                            console.log('true');
                            this.$router.push({ name: 'OrderHistory' });
                        } else if (result.isDenied) {
                            // User clicked on Link 2, navigate to Link 2
                            this.$router.push({ name: 'Shop' });
                        }
                    });
                    });
                }).catch(error => {
                    console.log(error);
                });
        }

    }
}
</script>

<style></style>