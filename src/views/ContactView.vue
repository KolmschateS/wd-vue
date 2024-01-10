<!-- ContactForm.vue -->

<template>
  <div class="h-screen">
    <div class="flex flex-col p-6">
      <div class="flex flex-row items-end">
        <h1 class="text-2xl text-zinc-200 font-bold">Get</h1>
        <h2 class="text-2xl text-zinc-500 ml-2">in touch.</h2>
      </div>
      <h2 class="text-zinc-300 flex-row text-sm">
        Fill in the form below to send an email to the developer Sebastiaan.
      </h2>
    </div>
    <div class="p-6 max-w-2xl mx-auto justify-center">
      <form @submit.prevent="submitForm" class="bg-black">
        <div class="mb-4">
          <label for="name" class="text-zinc-200 font-normal">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="appearance-none rounded w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div class="mb-4">
          <label for="email" class="text-zinc-200 font-normal">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="appearance-none rounded w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div class="mb-4">
          <label for="subject" class="text-zinc-200 font-normal">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            class="appearance-none rounded w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div class="mb-4">
          <label for="message" class="text-zinc-200 font-normal">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            class="appearance-none rounded w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-zinc-100 hover:bg-white text-zinc-900 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/api/contact/", this.formData)
        .then((response) => {
          console.log(response.data.message);
          // Handle success, e.g., show a success message
        })
        .catch((error) => {
          console.error(error.response.data.errors);
          // Handle errors, e.g., display validation errors
        });
    },
  },
};
</script>
