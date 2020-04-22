<template>
  <div>
    <h1>Bitte registriere dich:</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(register)">
      <validation-provider rules="required" v-slot="{ errors }">
        <input type="vorname"
        name="vorname"
        v-model="vorname"
        placeholder="Vorname"/>
        <br>
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <br>
      <validation-provider rules="required" v-slot="{ errors }">
        <input type="name"
        name="name"
        v-model="name"
        placeholder="Name"/>
        <br>
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <br>
      <validation-provider rules="required" v-slot="{ errors }">
        <input type="email"
        name="email"
        v-model="email"
        placeholder="E-Mail"/>
        <br>
        <span>{{ errors[0] }}</span>
      </validation-provider>      
      <br>
      <validation-provider rules="required" v-slot="{ errors }">
        <input type="password"
        name="password"
        v-model="password"
        placeholder="Passwort"/>
        <br>
        <span>{{ errors[0] }}</span>
        </validation-provider>  
      <br>
      <button type="submit"> Register </button>
    </form>
    </ValidationObserver>
  </div>
</template>


<script>

import { ValidationProvider, extend } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  name: 'Register',
    components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      credentials: [],
      cred:[],
      vorname:'',
      name:'',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      if (confirm (`Hallo ${this.vorname} Du hast dich erfolgreich registriert!`)){
        this.$router.replace({ name: "Login" })
        this.credentials.push({username: this.stringifyUsername, password: this.password }),
        this.cred.push({Vorname: this.vorname, Name: this.name, Email: this.email}),
        localStorage.setItem('credentials', JSON.stringify(this.credentials))
        localStorage.setItem('cred_show', JSON.stringify(this.cred))    
      }
    }
  },
  computed:{
    stringifyUsername() {
      return (`${this.vorname}${this.name}`).toLowerCase()
    }
  },
   created () {
     const credentials = JSON.parse(localStorage.getItem('credentials'))
      if (credentials !== null) {
        for (const cr of credentials) {
          this.credentials.push(cr)
        }
     } 
     const cred = JSON.parse(localStorage.getItem('cred_show'))
      if (cred !== null) {
        for (const cr of cred) {
          this.cred.push(cr)
        }
      } 
   }
}
</script>

