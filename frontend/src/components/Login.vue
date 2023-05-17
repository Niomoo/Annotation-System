<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="bg-white p-10 rounded-lg">
        <h1 class="font-sans font-bold text-6xl text-black-100">Sign in</h1>
        <h3 class="font-sans font-bold mt-12 text-2xl">Sign in and start your annotation!</h3>
        <!-- <div v-if='error'>{{ error }}</div> -->
        <form>
            <div class="flex flex-col items-center">
              <input class="border p-4 h-10 mt-6 bg-gray-100 rounded-lg w-5/6" type='text' name='email' placeholder="Email" v-model="email" /><br>
              <input class="border p-4 h-10 mt-1 bg-gray-100 rounded-lg w-5/6" type='password' name='password' placeholder="Password" v-model="password"/><br>
              <div class="flex items-center justify-between mb-2 mt-2 w-5/6">
                <label for="remember-me">
                  <input type="checkbox" name="remember-me" id="remember-me" class="mr-2">
                  <span class="text-sm">Remember me</span>
                </label>
                <a href="#/ForgotPassword" class="text-sm text-gray-500 hover:text-gray-600 mr-13">Forgot password?</a>
              </div>
              <button class="border h-10 bg-blue-300 rounded-lg shadow-md w-5/6" @click="login()" type="button">Login</button>
              <a href="#" class="mt-4 text-sm text-gray-500 hover:text-gray-600">Don't have an account? Create one now!</a>
            </div>
        </form>
      </div>
    </div>
</template>
<script>
import router from '../router'
import axios from 'axios'
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
    login () {
      var data = {
        email: this.email,
        password: this.password
      }
      axios.post('/api/login', data)
        .then((response) => {
          router.push('/CreateAccount')
        })
        .catch((e) => {
          this.error = 'Login Error'
          console.log(e.response.data)
        })
    }
  }
}
</script>
