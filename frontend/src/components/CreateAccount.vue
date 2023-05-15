<template>
    <div>
        <h2>createAccount</h2>
        <form v-on:submit='CreateAccount'>
            <input type='text' name='userName'/><br>
            <input type='text' name='email' /><br>
            <input type='password' name='password' /><br>
            <input type='submit' value='Submit'/>
            <select name="roles">
                <option value="1">Curator</option>
                <option value="2">Leader</option>
            </select>
        </form>
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
          router.push('/CreateAccount')
        })
        .catch((errors) => {
          console.log('Error in signup..')
        })
    }
  }
}
</script>
