<template>
  <main class="lg:grid-cols-2 grid gap-2 bg-gray-100 mb-6 border-t-2">
    <div class="grid lg:grid-cols-2  my-6">
      
      <div class="flex flex-col justify-center items-center px-2 py-3 text-center">
        <img src="@/assets/phoneicon.svg" class="w-10 h-10" />
        <p class="text-center font-bold text-xl">Phone</p>
        <p class="text-center text-sm text-secondary-100">
          +234 701-0287-897 <br />
          +234-80-992244-21
        </p>
      </div>

      <div class="flex flex-col justify-center items-center px-2 py-3 text-center">
        <img src="@/assets/mailicons.svg" class="w-10 h-10" />
        <p class="text-center text-secondary-100 font-bold text-xl">Mail Us</p>
        <p class="text-center text-sm text-secondary-100">
          info@hellobunker.com
        </p>
      </div>

      <div class="flex flex-col justify-center items-center px-3 py-3 text-center">
        <img src="@/assets/location.svg" class="w-10 h-10" />
        <p class="text-center text-primart-100 font-bold text-xl">Address</p>
        <p class="text-center text-sm text-secondary-100">
          11 Adetoun Close, Off College Road, Ogba, Lagos state
        </p>
      </div>

      <div class="flex flex-col justify-center items-center px-3 py-3 text-center">
        <img src="@/assets/fastdelivery.svg" class="w-10 h-10" />
        <p class="text-center text-secondary-100 font-bold text-xl">
          Delivery Hours
        </p>
        <p class="text-center text-sm text-secondary-100">Monday to Saturday: 6am - 10pm <br>
        Sunday: 12pm - 10pm</p>
      </div>
    </div>

    <div class="px-3 shadow-2xl">
      <h3 class="text-secondary-100 text-xl font-bold text-center">
        contact us
      </h3>
      <ContactForm @on-submit="createUser" />
    </div>
  </main>
</template>

<script>
import ContactForm from "@/components/utilities/ContactForm";
export default {
  components: { ContactForm },
  data() {
    return {
      user: {
        email: "",
        name: "",
        phone: "",
        text: "",
      },
    };
  },
  mounted() {
    // Scroll to the section with the specified ID
    // this.$refs[this.$route.params.sectionID].scrollIntoView();
  },
  methods: {
    createUser(ContactForm) {
      console.log("creating", ContactForm);
      // call an API to Send Mail
    },
  },
};
</script>

<style lang="scss" scoped></style>
