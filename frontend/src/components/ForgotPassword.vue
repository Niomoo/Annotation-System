<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="bg-white p-10 rounded-lg">
        <h1 class="font-sans font-bold text-6xl text-black-100">Forgot</h1>
        <h1 class="font-sans font-bold text-6xl text-black-100">Password</h1>
        <h3 class="font-sans font-bold mt-12 text-2xl">Enter your Email to receive the new password!</h3>
        <!-- <div v-if='error'>{{ error }}</div> -->
        <form>
    <div class="flex flex-col items-center">
      <input class="border p-4 h-10 mt-6 bg-gray-100 rounded-lg w-5/6" type='text' name='email' placeholder="Email" v-model="email" /><br>
      <div class="flex flex-row space-x-2 w-5/6">
        <button class="bg-gray-500 text-white p-2 flex rounded-lg flex-2" @click="goback()">
          <svg class="h-5 w-5 mr-2 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L11.586 10l-4.293-4.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0z" clip-rule="evenodd" />
          </svg>
          Back
        </button>
        <button class="border h-10 bg-blue-300 rounded-lg shadow-md flex-1" @click="confirm()" type="button">Confirm</button>
      </div>
    </div>
</form>
      </div>
    </div>
</template>

<script>
import router from '../router'
export default
{
  data () {
    return {
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    confirm () {
      var data = {
        email: this.email
      }
      console.log(data)
    },
    goback () {
      router.push('/')
    }
  }
}
</script>
