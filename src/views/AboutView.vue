<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="flex items-center justify-center flex-col p-6">
    <h1 class="text-2xl text-white font-bold flex-row">About</h1>
    <h2 class="text-2xl text-zinc-500 flex-row">the app.</h2>
  </div>
  <div class="flex items-center justify-center p-6 flex-col bg-white">
    <div class="flex flex-row">
      <h1 class="text-2xl text-black font-bold">The origin</h1>
      <h2 class="text-2xl text-zinc-500 ml-1">story.</h2>
    </div>
    <p class="text-black mt-2">
      Over The Board started by a disoriented chess player stranded in Paris with only two hours on the clock.
      Looking for a place to play chess he could not find one and the idea of a meet up app for chess was born.
      With it came the idea of a chess app that wouldn't only unite players, but also to serve as a database for over the board games.
    </p>
    </div>
    <div class="flex items-center justify-center p-6 flex-col">
    <div class="flex flex-row">
      <h1 class="text-2xl text-white font-bold">The</h1>
      <h2 class="text-2xl text-zinc-500 ml-1">dev.</h2>
    </div>
    <img src="../assets/dev.JPG" alt="Sebastiaan Kolmschate" class=" max-h-96 mt-2"/>
    <p class="text-white mt-2">
      Over The Board started by a disoriented chess player stranded in Paris with only two hours on the clock.
      Looking for a place to play chess he could not find one and the idea of a meet up app for chess was born.
      With it came the idea of a chess app that wouldn't only unite players, but also to serve as a database for over the board games.
    </p>
    </div>
  <!-- <div class="flex"> 
    <ParagraphCard
      header="Origin"
      paragraph="Over The Board started by a disoriented chess player stranded in Paris with only two hours on the clock. "
    />
    <ParagraphCard
    header="Developed by..."
    paragraph="Over The Board is developed by Sebastiaan Kolmschate for a school project. The developer is a student at the University of Applied Sciences Windesheim. He is currently in his fourth year of the study Information Communication and Technology (HBO-ICT).
      During his studies and his life he has learned the following skills regarding software development."
    />
    <ParagraphButtonCard 
      header="Contact"
      paragraph="If you want to contact the developer, click on the button below to go to the contact page."
      buttonText="Contact"
      buttonLink="/contact"
    />
  </div> -->
</template>
