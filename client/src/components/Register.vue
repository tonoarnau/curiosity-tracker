<template>
  <div class="register">
    <h1>REGISTER PAGE</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>




<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>




<style scoped>
button {
  background: green;
  color: white;
  border: 0;
  cursor: pointer;
  padding: 1em 2em;
  transition: background .3s ease-in-out;
}

button:hover {
  background: red;
}
</style>
