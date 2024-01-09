<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="flex-col">
    <div class="items-center justify-center flex-col p-6">
      <h1 class="text-2xl text-zinc-200 font-bold flex-row">About</h1>
      <h2 class="text-xl text-zinc-500 flex-row">the app.</h2>
    </div>
  </div>

  <!-- Row 1 -->

  <div class="flex flex-col lg:flex-row">
    <div class="p-6 bg-zinc-100 basis-1/4">
      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-900 font-bold">The origin</h1>
        <h2 class="text-2xl text-zinc-500 ml-1">story.</h2>
      </div>
      <p class="text-zinc-900 mt-2">
        Over The Board started by a disoriented chess player stranded in Paris
        with only two hours on the clock. Looking for a place to play chess he
        could not find one and the idea of a meet up app for chess was born.
        With it came the idea of a chess app that wouldn't only unite players,
        but also to serve as a database for over the board games.
      </p>
    </div>

    <div class="p-6 basis-1/2">
      <div class="flex flex-row">
        <img
          class="max-h-64"
          src="../assets/dev.JPG"
          alt="Sebastiaan Kolmschate"
        />
        <div class="flex flex-col pl-3">
          <div class="flex flex-row">
            <h1 class="text-2xl text-zinc-200 font-bold">Skills</h1>
            <h2 class="text-2xl text-zinc-500 ml-1">on the menu.</h2>
          </div>
          <p class="text-zinc-400 text-sm mt-2">Python C# Java Javascript Typescript</p>
          <p class="text-zinc-400 text-sm mt-2">Vuejs, Laravel, Node.js</p>
        </div>
      </div>

      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-200 font-bold mt-2">The</h1>
        <h2 class="text-2xl text-zinc-500 ml-1 mt-2">dev.</h2>
      </div>
      <p class="text-zinc-200 mt-2">
        Over The Board started by a disoriented chess player stranded in Paris
        with only two hours on the clock. Looking for a place to play chess he
        could not find one and the idea of a meet up app for chess was born.
        With it came the idea of a chess app that wouldn't only unite players,
        but also to serve as a database for over the board games.
      </p>
    </div>

    <div class="p-6 bg-zinc-100 basis-1/4">
      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-900 font-bold">Say,</h1>
        <h2 class="text-2xl text-zinc-500 ml-1">Hi.</h2>
      </div>
      <p class="text-zinc-900 mt-2">
        To get in touch with the developer press the button below to proceed to
        the contact page. We are happy to help.
      </p>
      <div class="mt-5">
        <RouterLink
          to="/contact"
          class="text-zinc-200 font-bold bg-zinc-900 p-3"
        >
          Contact
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- Row 2 -->
  <div class="flex flex-col md:flex-row">
    <div class="p-6 basis-1/4">
      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-200 font-bold">Join,</h1>
        <h2 class="text-2xl text-zinc-500 ml-1">the fun.</h2>
      </div>
      <p class="text-zinc-200 mt-2">
        Over The Board is currently open source and everyone can contribute.
        Find the repositories below to have a look for your self.
      </p>
      <div class="flex flex-row items-center justify-center mt-6">
        <div class="basis-1/2 hover:bg-zinc-900 rounded-lg flex-col p-3">
          <a
            href="https://github.com/KolmschateS/wd-vue"
            class="items-center flex flex-col"
          >
            <img
              src="../assets/github-mark-white.svg"
              alt="github logo"
              class="max-h-16 p-3"
            />
            <h1 class="text-zinc-500 text-sm">Frontend</h1>
            <h2 class="text-zinc-200 text-md font-bold">Vue.js</h2>
          </a>
        </div>
        <div class="basis-1/2 hover:bg-zinc-900 rounded-lg flex-col p-3">
          <a
            href="https://github.com/KolmschateS/wd-laravel"
            class="items-center flex flex-col"
          >
            <img
              src="../assets/github-mark-white.svg"
              alt="github logo"
              class="max-h-16 p-3"
            />
            <h1 class="text-zinc-500 text-sm">Backend</h1>
            <h2 class="text-zinc-200 text-md font-bold">Laravel</h2>
          </a>
        </div>
      </div>
    </div>

    <div class="p-6 bg-zinc-100 basis-1/2">
      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-900 font-bold">The</h1>
        <h2 class="text-2xl text-zinc-500 ml-1">dev.</h2>
      </div>
      <p class="text-zinc-900 mt-2">
        Over The Board started by a disoriented chess player stranded in Paris
        with only two hours on the clock. Looking for a place to play chess he
        could not find one and the idea of a meet up app for chess was born.
        With it came the idea of a chess app that wouldn't only unite players,
        but also to serve as a database for over the board games.
      </p>
    </div>

    <div class="p-6 bg-zinc-900 basis-1/4">
      <div class="flex flex-row">
        <h1 class="text-2xl text-zinc-100 font-bold">Say,</h1>
        <h2 class="text-2xl text-zinc-500 ml-1">Hi.</h2>
      </div>
      <p class="text-zinc-200 mt-2">
        To get in touch with the developer press the button below to proceed to
        the contact page. We are happy to help.
      </p>
    </div>
  </div>
</template>
