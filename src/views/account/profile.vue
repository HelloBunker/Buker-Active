<template>
  

  <div class="container  my-12">
    <div class="flex flex-col justify-between pt-10 pb-16 sm:pt-12 sm:pb-20 lg:flex-row lg:pb-24">
      <div class="lg:w-1/4">
        
        <div class="flex flex-col pl-3">

          <router-link to="changePassword"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Change
            Password</router-link>

          <router-link to="orders_history"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Orders
            History</router-link>

          <router-link to="plan"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Membership
            Plan</router-link>

          <router-link to="profile"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk font-bold text-primary border-primary ">Account
            Details</router-link>

        </div>
        <router-link to=""
          class="mt-8 inline-block rounded border border-primary px-8 py-3 font-hk font-bold text-primary transition-all hover:bg-primary hover:text-white">Log
          Out</router-link>
      </div>


      <div class="mt-12 lg:mt-0 lg:w-3/4">
        <div class="bg-grey-light py-10 px-6 sm:px-10">
          <h1 class="font-hkbold mb-12 text-2xl text-secondary-100 sm:text-left">
            Account Details
          </h1>
          <div class="mb-12">
            <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="user image" class="h-40 w-40 overflow-hidden rounded-full object-cover" />
          </div>
          <div v-if="message" class="bg-red-400 text-secondary  p-2 m-3  rounded-xl " role="alert">
            {{ message }}
          </div>
        </div>
        <Form @submit="handleUpdateProfile" :validation-schema="schema" class="container px-6">
          <div class="grid grid-cols-1 gap-5  md:grid-cols-2">
            <div class="">
              <label for="first_name" class="mb-2 block  text-secondary-100">First Name</label>
              <Field type="text" name="first_name"
                class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                :value="currentUser.useri.first_name" />
              <ErrorMessage name="first_name" class="text-danger text-sm" />
            </div>
            <div class="hidden">
              <label for="user_id" class="mb-2 block  text-secondary-100">First Name</label>
              <Field type="text" name="user_id"
                class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                :value="currentUser.useri.id" />
              <ErrorMessage name="user_id" class="text-danger text-sm" />
            </div>
            <div class="">
              <label for="last_name" class="mb-2 block  text-secondary-100">Last Name</label>
              <Field type="text" name="last_name"
                class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                :value="currentUser.useri.last_name" />
              <ErrorMessage name="last_name" class="text-danger text-sm" />
            </div>

          </div>
          <div class="my-5 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2">
            <!-- <div class="">
                <label for="name_displayed" class="mb-2 block font-hk text-secondary-100">Name Displayed</label>
                <input type="text"
                  class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3" value=""
                  id="name_displayed" />
              </div> -->
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                Email Address</label>
              <Field type="email" name="email"
                class=" w-full bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5"
                :value="currentUser.useri.email" />
              <ErrorMessage name="email" class="text-danger text-sm" />
            </div>


            <div>
              <label for="phone_no" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                phone </label>
              <Field type="phone" name="phone_no"
                class=" w-full bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5  "
                :value="currentUser.useri.phone_no" />
              <ErrorMessage name="phone_no" class="text-danger text-sm" />

            </div>
          </div>
          <!-- <div class="my-8">
              <div>
                <h4 class="font-hkbold mb-2 text-xl text-secondary-100 sm:text-left">
                  Shipping Address
                </h4>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div class="">
                    <label for="street" class="mb-2 block font-hk text-secondary-100">Street</label>
                    <input type="text"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="street" />
                  </div>
                  <div class="">
                    <label for="street2" class="mb-2 block font-hk text-secondary-100">Street 2</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="street2" />
                  </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div class="">
                    <label for="city" class="mb-2 block font-hk text-secondary-100">City</label>
                    <input type="text"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="city" />
                  </div>
                  <div class="">
                    <label for="state" class="mb-2 block font-hk text-secondary-100">State</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="state" />
                  </div>
                  <div class="">
                    <label for="zip" class="mb-2 block font-hk text-secondary-100">Zip Code</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="zip" />
                  </div>
                </div>
                <div class="mt-5">
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                  <select id="countries"
                    class="bg-secondary border border-primary text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected="">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              <div class="mt-8">
                <h4 class="font-hkbold mb-2 text-xl text-secondary-100 sm:text-left">
                  Billing Address
                </h4>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div class="">
                    <label for="bstreet" class="mb-2 block font-hk text-secondary-100">Street</label>
                    <input type="text"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="bstreet" />
                  </div>
                  <div class="">
                    <label for="bstreet2" class="mb-2 block font-hk text-secondary-100">Street 2</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="bstreet2" />
                  </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                  <div class="">
                    <label for="bcity" class="mb-2 block font-hk text-secondary-100">City</label>
                    <input type="text"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="bcity" />
                  </div>
                  <div class="">
                    <label for="bstate" class="mb-2 block font-hk text-secondary-100">State</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="bstate" />
                  </div>
                  <div class="">
                    <label for="bzip" class="mb-2 block font-hk text-secondary-100">Zip Code</label>
                    <input type="email"
                      class="w-full px-3 bg-secondary text-secondary-100 border border-primary text-xs py-3 mb-3"
                      id="bzip" />
                  </div>
                </div>
                <div class="mt-5">

                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                  <select id="countries"
                    class="bg-secondary border border-primary text-secondary-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected="">Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>

                </div>
              </div>
            </div> -->

          <div>
            <button type="submit"
              class="text-secondary bg-green-400 hover:bg-primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Update
              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>

          </div>
        </Form>
      </div>
    </div>
  </div>


  <Footer />
</template>

<script>
import Header from '@/components/layouts/shop/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Button from '@/components/utilities/Button.vue'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: { Header, Footer, Button, Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      user_id: yup
        .string()
        .required('id is required!'),
        
      first_name: yup
        .string()
        .required('first name is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be Maximum of 20 characters!'),
      last_name: yup
        .string()
        .required('Last name is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be Maximum of 20 characters!'),
      email: yup
        .string()
        .required('Email is required!')
        .max(50, 'Must be Maximum of 50 characters!')
        .email('Email is invalid !'),
      phone_no: yup
        .string()
        .required('Phone number is required!')
        .max(11, 'Must be Maximum of 11 characters!')
        .min(11, 'Must be at least 11 characters!'),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    console.log(this.currentUser.useri.id);
  },


  methods: {
    handleUpdateProfile(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch('auth/user_profile_update', user).then(
        (data) => {
          this.message = data.message;
          this.succesful = true;
          this.loading = false;

        },

        (error) => {
          // this.loading = false; 
          this.message = (error.response &&
            error.response.data &&
            error.response.data.message) || error.message || error.toString();
          this.successful = false;
          this.loading = false;

        }
      );
    },
  },
}
</script>

<style>

</style>