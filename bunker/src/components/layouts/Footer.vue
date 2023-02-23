<template>
  <footer class="flex flex-col mt-0">
    <div class="contact flex md:flex-row flex-col   py-10 px-10 ">
      <div class="md:w-1/2 my-auto">
        <h1 class="md:text-4xl text-2xl font-extrabold pl-7 text-secondary">Interested In Partnership?</h1>
        <hr class="dash text-primary w-1/4 my-2 mr-6" />
        <p class="text-base md:text-xl font-light  text-secondary px-6">

          Interested In Partnership?
          If you are an importer or manufacturer of high quality, NAFDAC-approved non-perishable foodstuff and you are
          looking to partner with us to reach thousands of consumers,
          kindly send us a mail on
          <a href="mailto:partners@hellobunker.com."
            class="text-primary hover:text-primary-100 ">partners@hellobunker.com.</a>
        </p>
      </div>
      <div class="md:w-1/2">
        <h3 class="text-secondary text-xl font-bold text-center">Request Call Back</h3>
        <ContactForm @on-submit="createUser" />
      </div>
    </div>
    <div class="flex md:flex-row  contact flex-col justify-between">
      <div class="md:w-1/3 w-full p-10">
        <img src="@/assets/logobig.png" alt="" class="">
        <p class="text-lg font-light text-secondary ">Join us today and you get covered against
          the rising prices and other issues related to purchasing foodstuff. #WGCDDE
        </p>
        <span class=" ">
          <a href="#"> <i class="bi bi-facebook  text-secondary text-lg mr-6"></i></a>
          <a href="#"><i class="bi bi-twitter  text-secondary text-lg mr-6"></i></a>
          <a href="#"><i class="bi bi-youtube  text-secondary text-lg mr-6"></i></a>
          <a href="#"><i class="bi bi-linkedin  text-secondary text-lg mr-6"></i></a>
        </span>
      </div>
      <!-- contact -->
      <div class="md:w-1/3 w-full p-11" id="contact">
        <h3 class="text-2xl font-semibold underline text-secondary">Contact Info</h3>
        <p class="text-lg font-light text-secondary mb-3">
          <span class="text-secondary-100 font-semibold">BunkerHQ :</span> 11 Adetoun Close, Off College Road, Ogba, Lagos state
        </p>
        <p class="text-lg font-light text-secondary mb-3">
         <span class="text-secondary-100 font-semibold">Call Us:</span>  +234 701-0287-897
          +234-80-992244-21
        </p>
        <p class="text-lg font-light text-secondary mb-3">
          <span class="text-secondary-100 font-semibold">E-mail:</span>  info@hellobunker.com
        </p>


      </div>
      <div class="md:w-1/3 w-full p-11">
        <h3 class="text-2xl font-semibold underline text-secondary">Delivery Hours</h3>
        <p class="text-lg font-light text-secondary mb-3">
          <span class="text-secondary-100 font-semibold">Monday to Saturday:</span> 6am - 10pm<br>
          <span class="text-secondary-100 font-semibold">Sunday:</span> 12pm - 10pm</p>
      </div>
     </div>
      <div class="bg-secondary flex flex-col md:flex-row md:justify-between py-4 px-10 justify-center ">

        <div class="text-lg font-bold text-center">Copyright © 2022 Bunker</div>
        <div class="text-primary text-lg font-bold text-center">Powered by Bunker</div>

      </div>
  </footer>
</template>

<script>
import ContactForm from '@/components/utilities/ContactForm.vue'
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
      console.log('creating', ContactForm);
      // call an API to Send Mail
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
}
</style>