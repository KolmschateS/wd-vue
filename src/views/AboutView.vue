<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="flex flex-col items-center h-screen bg-black p-4">
      <h1 class="text-4xl font-bold mb-4 text-white">About</h1>
      <p class="text-white">
        Over The Board is a chess app that allows you to find people to play chess over the board with.
      </p>
      <p class="text-white">
        Not only can you find people to play with, but you can also register the games using chess notation and a chess clock.
      </p>

      <h1 class="text-4xl font-bold mb-4 text-white">Developer</h1>
      <img src="../assets/dev.JPG" alt="Sebastiaan Kolmschate" class="h-40 w-40 object-cover object-center mb-4 text-white"/>
      <p class="text-white">
        Over The Board is developed by Sebastiaan Kolmschate for a school project. If you want to contact him, click on the contact button below to go to the contact page.
      </p>
      <RouterLink to="/contact" class="p-4 items-center">
        <button class="bg-white text-black font-bold p-3">Contact</button>
      </RouterLink>

      <p class="text-white">
        The developer is a student at the University of Applied Sciences Windesheim. He is currently in his fourth year of the study Information Communication and Technology (HBO-ICT).
        During his studies and his life he has learned the following skills regarding software development.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-white">Skills</h2>
      <p class="text-white">Programming languages</p>
      <p class="text-white">Programming languages</p>
      <p class="text-white">Programming languages</p>
      <p class="text-white">Programming languages</p>
  </div>
</template>
