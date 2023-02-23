<template>
  <Header />
  <section class="bg-white-500">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-secondary-100"
      >
        <img class="w-full h-full mr-2" src="@/assets/logobig.png" alt="logo" />
      </a>
      <div
        class="w-full bg-secondary rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-secondary-100 md:text-2xl"
          >
            Sign in to your account
          </h1>

          <!-- error msg -->
          <div class="">
            <div
              v-if="message"
              class="bg-red-400 text-secondary p-2 m-3 rounded-xl"
              role="alert"
            >
              {{ message }}
            </div>
          </div>

          <Form
            class="space-y-4 md:space-y-6"
            @submit="HandleLogin"
            :validation-schema="schema"
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-secondary-100"
                >Your email</label
              >
              <Field
                type="email"
                name="email"
                placeholder="name@company.com"
                class="bg-gray-50 border border-secondary-100 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
              <ErrorMessage name="email" class="text-danger text-sm" />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-secondary-100"
                >Password</label
              >
              <Field
                type="password"
                name="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-secondary-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
              <ErrorMessage name="password" class="text-danger text-sm" />

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500"
                      >Remember me</label
                    >
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary hover:underline"
                  >Forgot password?</a
                >
              </div>
              <button
                type="submit"
                :disable="loading"
                class="w-full text-secondary bg-green-400 hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <span v-show="loading"></span>
                <span>Login</span>
              </button>

              
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
  name: "AdminLogin",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email("emaill is invalid")
        .required("Email is Required"),
      password: yup.string().required("Password is Required"),
    });

    return {
      loading: false,
      message: "",
      schema,
    };
  },
  // computed: {
  //   loggedIn() {
  //     return this.$store.state.auth.status.loggedIn;
  //   },
   

  //   AdminLoggedIn() {
  //     return this.$store.state.AdminAuth.status.loggedIn;
  //   },
  //   currentUser() {
  //     return this.$store.state.auth.user;
  //   },
  //   currentAdmin() {
  //     return this.$store.state.AdminAuth.user;
  //   },
  // },
  computed: {
    loggedIn() {
      return this.$store.state.AdminAuth.status.loggedIn;
    },
    currentAdmin() {
      return this.$store.state.AdminAuth.admin;

    }

  },
  mounted() {
    if(this.currentAdmin){
   
       
    
      this.$router.push("/admin");
    

}
  },

  created() {

    // if (this.AdminLoggedIn) {
    //   if ((this.AdminLoggedIn.status_code = 200)) {
    //     console.log(this.AdminLoggedIn);
    //     // this.$router.push('/admin')
    //   }
      
    // }
  },

  methods: {
    HandleLogin(user) {
      // console.log(user);
      this.loading = true;
      this.$store.dispatch("AdminAuth/adminlogin", user).then(
        (res) => {
          if(res.status_code == 200){
            this.$router.push("/admin");
            // console.log(res.status_code)
          }
        },

        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style></style>
