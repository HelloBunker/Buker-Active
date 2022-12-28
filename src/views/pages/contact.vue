<template>
  <main class=" grid  bg-gray-100 mb-6 container">
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.252278391283!2d3.3146443963050922!3d6.639090301909926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b915bca683fff%3A0x260ff568c8ea166c!2sBunker!5e0!3m2!1sen!2sng!4v1672213871363!5m2!1sen!2sng" 
     width="100%"
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
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
