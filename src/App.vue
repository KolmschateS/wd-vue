<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
import Gdpr from '@/components/Gdpr.vue'
</script>

<template>
  <div>
    <Gdpr />

    <div class="flex flex-col min-h-screen">
      <!-- Top Navbar -->
      <TopNav />

      <BottomNav />

      <!-- Router View (Main Content) -->
      <div class="flex-grow pt-10 bg-black">
      <RouterView />
      </div>

      <!-- Make a div with a set height, the same as the bottom nav, with a black background -->
      <div class="bg-black h-24"></div>
    </div>
  </div>
</template>
