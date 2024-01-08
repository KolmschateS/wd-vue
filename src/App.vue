<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from '@/components/TopNav.vue'
import BottomNav from '@/components/BottomNav.vue'
</script>

<template>
  <div class="bg-black">
    <div class="flex flex-col min-h-screen">
    <!-- Top Navbar -->
    <TopNav />

    <!-- Router View (Main Content) -->
    <div class="flex-grow pb-16 mt-8">
     <RouterView />
    </div>

    <!-- Bottom Navbar -->
    <footer>
      <BottomNav />
    </footer>
    </div>
  </div>
</template>
