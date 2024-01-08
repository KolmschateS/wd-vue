<template>
  <div class="container p-5 max-w-screen fixed bottom-0 bg-black mx-auto">
    <div class="flex justify-center space-x-12">
      <router-link to="/about" class="text-white">
        <img src="@/assets/info.svg" alt="About" style="height: 35px;"/>
      </router-link>
      <router-link to="/profile" class="text-white">
        <img src="@/assets/profile.svg" alt="About" style="height: 35px;"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
}
</script>
