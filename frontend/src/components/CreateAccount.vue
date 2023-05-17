<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white p-10 rounded-lg">
      <span class="font-sans font-bold text-6xl text-black-100 leading-tight">Input your <br/>information</span>
      <!-- <div v-if='error'>{{ error }}</div> -->
      <form>
          <div class="flex flex-col items-center">
            <input class="border p-4 h-10 mt-6 bg-gray-100 rounded-lg w-5/6" type='text' name='username' placeholder="Username" v-model="username" /><br>
            <input class="border p-4 h-10 mt-1 bg-gray-100 rounded-lg w-5/6" type='text' name='user_email' placeholder="Email" v-model="user_email"/><br>
            <input class="border p-4 h-10 mt-1 bg-gray-100 rounded-lg w-5/6" type='password' name='user_password' placeholder="Password" v-model="user_password"/><br>
            <div class="flex items-center justify-between mb-2 mt-2 w-5/6">
              <span class="text-sm">Select your role:</span>
              <select class="text-sm mr-1 border w-1/2" v-model="selectionOption" name="roles">
                <option value="1">Curator</option>
                <option value="2">Leader</option>
              </select>
            </div>
            <button class="border mt-6 h-10 bg-blue-300 rounded-lg shadow-md w-5/6" @click="myTmpFunc()" type="button">Create Account</button>
            <a href="#" class="mt-4 text-sm text-gray-500 hover:text-gray-600" @click="goback()">Already have an account? Login now!</a>
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
  name: 'CreateAccount',
  methods: {
    CreateAccount: (e) => {
      e.preventDefault()
      let data = {
        userName: e.target.elements.userName.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        role: e.target.elements.roles.value
      }
      
      axios.post('/api/createAccount', data)
        .then((response) => {
          console.log('Account created successfully')
          router.push('/success')
        })
        .catch((errors) => {
          console.log('Error in signup..')
        })
  },
  myTmpFunc () {
    router.push( '/success' )
  },

  goback () {
    router.push( '/' )
  }
  }
}
</script>
