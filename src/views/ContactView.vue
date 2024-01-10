<!-- ContactForm.vue -->

<template>
  <div class="">
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
      <form v-if="!this.formSent" @submit.prevent="handleForm" class="bg-black">
        <div class="mb-4">
          <label for="name" class="text-zinc-200 font-normal">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="appearance-none rounded-lg w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
          />
          <p v-if="errorData.name != ''" class="text-red-500 text-xs italic">
            {{ errorData.name }}
          </p>
        </div>

        <div class="mb-4">
          <label for="email" class="text-zinc-200 font-normal">Email</label>
          <input
            id="email"
            v-model="formData.email"
            class="appearance-none rounded-lg w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
          />
          <p v-if="errorData.email != ''" class="text-red-500 text-xs italic">
            {{ errorData.email }}
          </p>
        </div>

        <div class="mb-4">
          <label for="subject" class="text-zinc-200 font-normal">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            class="appearance-none rounded-lg w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
          />
          <p v-if="errorData.subject != ''" class="text-red-500 text-xs italic">
            {{ errorData.subject }}
          </p>
        </div>

        <div class="mb-4">
          <label for="message" class="text-zinc-200 font-normal">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            class="appearance-none rounded-lg w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
          ></textarea>
          <p v-if="errorData.message != ''" class="text-red-500 text-xs italic">
            {{ errorData.message }}
          </p>
          <p
            v-if="errorData.serverError != ''"
            class="text-red-500 text-xs italic"
          >
            {{ errorData.serverError }}
          </p>
        </div>

        <div class="bg-zinc-200 rounded-lg p-3 mb-4">
          <label for="captcha" class="text-zinc-900 font-bold">Captcha</label>
          <p class="text-zinc-900 text-sm">Please prove you are human.</p>

          <button
            type="button"
            v-if="this.captcha.text == ''"
            @click="setCaptcha"
            class="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold py-2 px-4 mt-2 focus:outline-none focus:shadow-outline"
          >
            Generate captcha
          </button>

          <div v-if="!captcha.validated && captcha.text != ''" class="mt-6">
            <p class="text-zinc-900 text-sm font-bold">
              {{ this.captcha.text }}
            </p>
            <p class="text-zinc-900 text-sm">
              Please enter the
              <span class="font-bold">{{
                this.captchaText[this.captcha.index]
              }}</span>
              character for the above combination.
            </p>
            <input
              type="text"
              id="captcha"
              v-model="formData.captcha"
              class="appearance-none rounded-lg w-full py-3 px-3 mt-1 text-zinc-200 leading-tight bg-zinc-900 border border-transparent focus:border focus:border-zinc-800 focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              @click="submitCaptcha"
              class="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold py-2 px-4 mt-2 focus:outline-none focus:shadow-outline"
            >
              Validate
            </button>
          </div>

          <div v-if="captcha.validated" class="flex flex-col items-center">
            <div class="flex flex-row p-4">
              <h1 class="text-xl text-zinc-500">You are</h1>
              <h2 class="text-xl text-zinc-900 ml-1.5 font-bold">human.</h2>
            </div>
            <p class="text-xs text-zinc-600">You can submit the form now.</p>
          </div>

          <p v-if="errorData.captcha != ''" class="text-red-500 text-xs italic">
            {{ errorData.captcha }}
          </p>
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
      <div v-if="this.formSent" class="flex flex-col items-center p-6">
        <h2 class="text-zinc-300 text-sm">We have received your message.</h2>
        <div class="flex flex-row">
          <h2 class="text-zinc-200 text-2xl font-bold">We will</h2>
          <h2 class="text-zinc-500 text-2xl ml-1.5">get in touch.</h2>
        </div>
        <div class="flex flex-col items-center justify-center mt-6">
          <div>
            <h1 class="text-zinc-200 font-xl font-semibold">What's next?</h1>
          </div>
          <div class="flex flex-row items-center justify-center">
            <div
              class="hover:bg-zinc-800 bg-zinc-900 rounded-lg flex-col p-3 m-2"
            >
              <router-link to="/" class="items-center flex flex-col">
                <img
                  src="../assets/logo.svg"
                  alt="github logo"
                  class="max-h-16 p-3"
                />
                <h1 class="text-zinc-500 text-sm">Play a game</h1>
                <h2 class="text-zinc-200 text-md font-bold">Home</h2>
              </router-link>
            </div>
            <div
              class="hover:bg-zinc-800 bg-zinc-900 rounded-lg flex-col p-3 m-2"
            >
              <router-link to="/about" class="items-center flex flex-col">
                <img
                  src="../assets/info-unselected.svg"
                  alt="github logo"
                  class="max-h-16 p-3"
                />
                <h1 class="text-zinc-500 text-sm">Read more</h1>
                <h2 class="text-zinc-200 text-md font-bold">About</h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
        captcha: "",
      },
      errorData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
        serverError: "",
      },
      formSent: false,
      captcha: {
        text: "",
        index: null,
        validated: false,
      },
      captchaText: ["first", "second", "third", "fourth", "fifth"],
    };
  },
  methods: {
    handleForm() {
      this.errorData.name = this.validateTextInput(
        this.formData.name,
        200,
        true
      );
      this.errorData.email = this.validateEmailInput(this.formData.email, true);

      this.errorData.subject = this.validateTextInput(
        this.formData.subject,
        200,
        true
      );
      this.errorData.message = this.validateTextInput(
        this.formData.message,
        600,
        true
      );

      if (this.captcha.validated == false) {
        this.errorData.captcha = "Please validate the captcha.";
      } else {
        this.errorData.captcha = "";
      }

      // check if there are no errors
      if (
        this.errorData.name == "" &&
        this.errorData.email == "" &&
        this.errorData.subject == "" &&
        this.errorData.message == "" &&
        this.captcha.validated == true
      ) {
        this.submitForm();
      }
    },
    submitForm() {
      axios
        .post("http://localhost:8000/api/contact", this.formData)
        .then((response) => {
          this.formSent = true;
          console.log(response.data.message);
          this.errorData.serverError = "";
        })
        .catch((error) => {
          // show error message
          this.errorData.serverError =
            "Server couldn't handle request, try again later.";
          console.error(error.response);
        });
    },
    validateTextInput(formDataInput, maxCharacters, required) {
      var errorData = "";
      if (required && formDataInput == "") {
        errorData = "This field is required.";
      } else if (formDataInput.length > maxCharacters) {
        errorData =
          "This field can't be longer than " + maxCharacters + " characters.";
      }
      return errorData;
    },
    validateEmailInput(data, required) {
      // use regex to check if email is valid
      var errorData = "";
      var regex = /\S+@\S+\.\S+/;
      if (required && data == "") {
        errorData = "This field is required.";
      } else if (!regex.test(data)) {
        errorData = "This field must be a valid email address.";
      }
      return errorData;
    },
    setCaptcha() {
      this.captcha.text = this.generateCaptcha();
      this.captcha.index = this.setCaptchaIndex(this.captcha.text);
      this.captcha.result = this.captcha.text[this.captcha.index];
    },
    // generate a random captcha
    generateCaptcha() {
      var result = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++)
        result += possible.charAt(Math.floor(Math.random() * possible.length));

      return result;
    },
    setCaptchaIndex(captcha) {
      var index = Math.floor(Math.random() * captcha.length);
      return index;
    },
    submitCaptcha() {
      if (this.formData.captcha == this.captcha.result) {
        this.captcha.validated = true;
      } else {
        this.captcha.validated = false;
        this.errorData.captcha = "The captcha is incorrect.";
      }
    },
  },
};
</script>
