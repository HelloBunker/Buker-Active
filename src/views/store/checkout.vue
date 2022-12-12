<template>
    <Header />
    <section>
        <form @submit.prevent="Pay">
            <div class="flex  md:flex-row flex-col justify-between m-2 mb-10 ">
                <div class="md:w-2/5 w-full">
                    <h2 class="font-bold text-primary text-2xl mb-4">Delivery Details</h2>



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

                <div class="w-full md:w-2/5 overflow-x-auto">


                    <table class="w-full  text-sm text-left text-secondary-100 o">
                        <thead class="text-xs text-secondary-100 uppercase bg-seondary ">
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
                            <tr class="bg-secondary border-b " v-for="item in cart" :key="item.id">

                                <td class="py-4 px-6 font-semibold ">
                                    {{ item.product_name }}
                                </td>
                                <td class="py-4 px-6 font-semibold ">
                                    {{ item.quantity }}
                                </td>

                                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                    {{ item.price }}
                                </td>
                                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                    {{ item.quantity * item.price }}
                                </td>

                            </tr>







                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end mx-5 flex-col">


                    <div class="flex justify-end">
                        <span class="p-3 text-primary text-lg"> Delivery Fee: <span class="text-secondary-100">
                                free</span>
                        </span><br>
                    </div>
                    <!-- <div class="flex justify-end">
                    <span class="p-3 text-primary text-lg"> Sub Total: <span class="text-secondary-100"> 5000</span>
                    </span><br>
                </div> -->
                    <div class="flex justify-end">
                        <span class="p-3 text-primary text-lg"> Total: <span class="text-secondary-100">NGN
                                {{ total }}</span>
                        </span><br>
                    </div>
                    <h2 class="text-secondary-100 text-lg underlined text-right text-bold mb-3">payment method</h2>
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
                        class="bg-primary border border-secondary-100 p-3 rounded-lg text-secondary hover:bg-primary-100 ">Make
                        Order</button>


                </div>
            </div>
        </form>

    </section>

    <Footer />


</template>

<script>
import Header from '@/components/layouts/shop/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Button from '@/components/utilities/Button.vue'
export default {
    components: { Header, Footer, Button },

    data() {
        return {
            cart: [],
            name: "",
            phone_no: "",
            address: "",
            payment_type: "pay_later",

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
            const details = [
                { name: this.name, address: this.address, phone_no: this.phone_no, payment_method: this.payment_type },
            ];

            // console.log(details)
            this.$store.dispatch('Pay',details)
                    .then(response => {
                        console.log(response.data.data);
                        this.cart = response.data.data;
                        console.log(this.cart)
                    }).catch(error => {
                        console.log(error);
                    });
        }

    }
}
</script>

<style>

</style>