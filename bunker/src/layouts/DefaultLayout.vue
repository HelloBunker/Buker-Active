<template>
 <div>
  <NavBar />

  <router-view></router-view>
  <Footer />
 </div>
</template>


<script setup>
import NavBar from "@/layouts/NavBar.vue"
import Footer from "@/layouts/Footer.vue"
</script>

<style lang="scss" scoped>

</style>



