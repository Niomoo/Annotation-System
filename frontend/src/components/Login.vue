<template>
    <div>
        <h2>Login</h2>
        <div v-if='error'>{{ error }}</div>
        <form>
            <input type='text' name='email' v-model="email" /><br>
            <input type='password' name='password' v-model="password"/><br>
            <button @click="login()" type="button">Login</button>
        </form>
    </div>
</template>
<script>
import router from '../router'
import axios from 'axios'
export default
{
  data () {
    return {
      error: ''
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
          this.error = 'Login Error roi'
          console.log(e.response.data)
        })
    }
  }
}
</script>
