<template>
  <Header />

  <div class="container  my-12">
    <div class="flex flex-col justify-between pt-10 pb-16 sm:pt-12 sm:pb-20 lg:flex-row lg:pb-24">
      <div class="lg:w-1/4">
        <p class="pb-6 font-butler text-2xl text-secondary-100 sm:text-3xl lg:text-4xl">
          My Account
        </p>
        <div class="flex flex-col pl-3">

          <router-link to="changePassword"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-primary ">Change
            Password</router-link>

          <router-link to="History"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Orders
            History</router-link>

          <router-link to="plan"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk text-grey-darkest ">Membership
            Plan</router-link>

          <router-link to="profile"
            class="transition-all hover:font-bold hover:text-primary px-4 py-3 border-l-2 border-primary-lighter hover:border-primary  font-hk font-bold text-grey-darkest  ">Account
            Details</router-link>

        </div>
        <router-link to=""
          class="mt-8 inline-block rounded border border-primary px-8 py-3 font-hk font-bold text-primary transition-all hover:bg-primary hover:text-white">Log
          Out</router-link>
      </div>


      <div class="mt-12 lg:mt-0 lg:w-3/4">
        <div class="bg-grey-light py-10 px-6 sm:px-10">
          <h1 class="font-hkbold mb-12 text-2xl text-secondary-100 sm:text-left">
            Change Password
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
        <Form @submit="handlePasswordUpdate" :validation-schema="schema">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-1">
            <div class="">
              <label for="OldPassword" class="mb-2 block  text-secondary-100">Current Password</label>
              <Field type="password"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                name="OldPassword" placeholder="" />
              <ErrorMessage name="OldPassword" class="text-danger text-sm" />

            </div>

          </div>
          <div class="mt-5 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2">
            <div class="">
              <label for="NewPassword" class="mb-2 block font-hk text-secondary-100">New Password</label>
              <Field type="password"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                name="NewPassword" placeholder="" />
              <ErrorMessage name="NewPassword" class="text-danger text-sm" />

            </div>
            <div class="">
              <label for="NewPassword_confirmation" class="mb-2 block font-hk text-secondary-100">Confirm New
                Password</label>
              <Field type="password"
                class="w-full bg-secondary text-secondary-100 border border-primary text-xs py-3 px-4 mb-3"
                name="NewPassword_confirmation" />
              <ErrorMessage name="NewPassword_confirmation" class="text-danger text-sm" />

            </div>
          </div>




          <div>
            <button type="submit"
              class="text-secondary bg-green-400 hover:bg-primary-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Channge
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

      OldPassword: yup
        .string()
        .required('password is required!')
        .max(40, 'Must be Maximum of 40 characters!')
        .min(6, 'Must be at least 6 characters!'),

      NewPassword: yup
        .string()
        .required('password is required!')
        .max(40, 'Must be Maximum of 40 characters!')
        .min(6, 'Must be at least 6 characters!'),
        
NewPassword_confirmation: yup
        .string()
        .required('password is required!')
        .max(40, 'Must be Maximum of 40 characters!')
        .min(6, 'Must be at least 6 characters!'),

    });
      


  

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;

    }

  },


  mounted() {

    if (!this.currentUser) {
      this.$router.push('/');
    }
  },
  methods: {
    handlePasswordUpdate(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch('auth/password_update', user).then(
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