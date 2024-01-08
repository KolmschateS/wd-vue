<template>
    <div v-if="!isGDPRAccepted" class="gdpr-overlay">
      <div class="gdpr-content">
        <!-- Your GDPR content goes here -->
        <p>We use cookies to provide the best experience. By continuing to use our site, you agree to our privacy policy.</p>
        <button @click="acceptGDPR">Accept</button>
      </div>
    </div>
    <div v-else>
      <!-- Your main application content goes here -->
      <router-view />
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
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .gdpr-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  
  /* Add more styles as needed */
  </style>
  