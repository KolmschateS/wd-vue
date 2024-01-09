<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <div v-if="!isGDPRAccepted" class="gdpr-overlay backdrop-blur-md p-12 justify-center items-center">
      <div class="flex items-center">
        <div class="flex-row text-white">
            <p>We use cookies to provide the best experience. By continuing to use our site, you agree to our privacy policy</p>
        </div>
        <button @click="acceptGDPR" class="flex-row text-black bg-white font-bold p-2 items-center">Accept</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isGDPRAccepted: false,
      };
    },
    methods: {
      acceptGDPR() {
        // Set a cookie indicating GDPR acceptance
        document.cookie = "gdpr_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        this.isGDPRAccepted = true;
      },
      checkGDPR() {
        // Check if the GDPR cookie exists
        this.isGDPRAccepted = document.cookie.includes("gdpr_accepted=true");
      },
    },
    created() {
      // Check for GDPR acceptance when the component is created
      this.checkGDPR();
    },
  };
  </script>
  
  <style scoped>
  .gdpr-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    z-index: 1000;
  }
  
  /* Add more styles as needed */
  </style>
  