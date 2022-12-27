<template>
    <Header />
    <section class="bg-white-500 shadow-2xl">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:mx-2 md:w-full  lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-secondary-100 ">
                <img class="w-full h-full mr-2" src="@/assets/logo1.png" alt="logo">

            </a>
            <div class="w-full bg-secondary rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-secondary-100 md:text-2xl">
                        Create an Account
                    </h1>


                    <div class="">
                                <div
                                v-if="message"
                                 class="bg-red-400 text-secondary  p-2 m-3  rounded-xl " role="alert">
                                {{message}}
                                </div>
                            </div> 
                    <Form class="space-y-4 md:space-y-6" @submit="handleRegister" :validation-schema="schema">
                        <div v-if="!successful">
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                    First name</label>
                                <Field type="text" name="first_name"
                                    class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                <ErrorMessage name="first_name" class="text-danger text-sm" />
                            </div>
                            <div>
                                <label for="last_name" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                    Last name</label>
                                <Field type="text" name="last_name"
                                    class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                <ErrorMessage name="last_name" class="text-danger text-sm" />
                            </div>
                           
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                    Email Address</label>
                                <Field type="email" name="email"
                                    class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                <ErrorMessage name="email" class="text-danger text-sm" />
                            </div>
                           
                          
                            <div>
                                <label for="phone_no" class="block mb-2 text-sm font-medium text-secondary-100 ">Your
                                    Phone </label>
                                <Field type="phone" name="phone_no"
                                    class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                                   />
                                <ErrorMessage name="phone_no" class="text-danger text-sm" />

                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-secondary-100 ">Password</label>
                                <Field type="password"  name="password"
                                    class="bg-gray-50 border border-gray-300 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                <ErrorMessage name="password" class="text-danger text-sm" />

                            </div>
                            <div>
                                <label for="password_confirmation"
                                    class="block mb-2 text-sm font-medium text-secondary-100 ">Password Confimation</label>
                                <Field type="password"  name="password_confirmation"
                                    class="bg-gray-50 border border-gray-300 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    />
                                <ErrorMessage name="password_confirmation" class="text-danger text-sm" />

                            </div>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  "
                                                required="">
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="terms" class="text-secondary-100">I agree to terms and condition
                                                me</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <button 
                            type="submit"
                            :disable="loading"
                             class="w-full text-secondary bg-green-400 hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            <span
                            v-show="loading"></span>
                            <span>Sign Up</span>


                            </button>
                            <p class="text-sm font-light text-secondary-100 ">
                                already have an account? <router-link to="/login"
                                    class="font-medium text-primary hover:underline ">Sign In
                                </router-link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </section>

    <Footer />
</template>

<script>

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
    name: "Signup",
    components: { Form, Field, ErrorMessage },
    data() {
        const schema = yup.object().shape({
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
            password: yup
                .string()
                .required('password is required!')
                .max(40, 'Must be Maximum of 40 characters!')
                .min(6, 'Must be at least 6 characters!'),

            password_confirmation: yup
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
        currentUser(){   
return this.$store.state.auth.user ;

}

},


mounted(){
    
    if(this.currentUser){
        this.$router.push('/');
    }
},


    created() {
        if (this.loggedIn) {
            this.$router.push('/');

        }
    },

    methods: {
        handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;
            this.$store.dispatch('auth/register', user).then(
                (data) => {
                    this.message = data.message;
                    this.succesful = true;
                    this.loading = false;
                    // this.$router.push()
                },

                (error) => {
                    // this.loading = false; 
                    this.message = (error.response &&
                        error.response.data &&
                        error.response.data.message) || error.message || error.toString();
                    this.successful = false;
                    this.loading = false;
                    // console.log(this.message);
                }
            ).finally(() => {this.$router.push({name: 'Login'})});
        },
    },


}; 
</script>

<style>

</style>