<template>
  <header>
    <div class="pt-2 pb-2 fixed bottom-0 w-full bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
      <!-- Home button -->
      <!-- Selected -->
      <router-link to="/" class="text-black rounded-lg hover:bg-zinc-800 p-3" v-if="isCurrentPage('/')">
        <img src="@/assets/home-selected.svg" alt="About" style="height: 40px;"/>
      </router-link>

      <!-- Unselected -->
      <router-link to="/" class="text-black rounded-lg hover:bg-zinc-800 p-3" v-if="!isCurrentPage('/')">
        <img class="p-1" src="@/assets/home-unselected.svg" alt="About" style="height: 40px;"/>
      </router-link>

      <!-- About button -->
      <!-- Selected -->
      <router-link to="/about" class="rounded-lg hover:bg-zinc-800  ml-8 p-3" v-if="isCurrentPage('/about')">
        <p class="flex justify-center items-center font-bold text-3xl text-black bg-white rounded-lg" style="height: 40px; width: 40px;">i</p>
      </router-link>

      <!-- Unselected -->
      <router-link to="/about" class="text-white hover:bg-zinc-800 rounded-lg ml-8 p-3" v-if="!isCurrentPage('/about')">
        <p class="flex justify-center items-center font-bold text-3xl" style="height: 40px; width: 40px;">i</p>
      </router-link>

      <!-- Profile button -->
      <!-- Selected -->
      <!-- <router-link to="/profile" class="text-white hover:bg-zinc-800 ml-8 p-3 rounded-lg" v-if="isCurrentPage('/profile')">
        <img src="@/assets/profile-selected.svg" alt="About" style="height: 40px;"/>
      </router-link> -->

      <!-- Unselected -->
      <!-- <router-link to="/profile" class="text-white hover:bg-zinc-800 ml-8 p-3 rounded-lg" v-if="!isCurrentPage('/profile')">
        <img src="@/assets/profile-unselected.svg" alt="About" style="height: 40px;"/>
      </router-link> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'BottomNav',
  methods: {
    isCurrentPage(page) {
      return this.$route.path === page
    }
  }
}
</script>
