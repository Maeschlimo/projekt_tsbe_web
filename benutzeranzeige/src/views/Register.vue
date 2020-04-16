<template>
  <div>
    <h1>Bitte registriere dich:</h1>
    <input type="vorname"
    name="vorname"
    v-model="vorname"
    placeholder="Vorname"/>
    <br>
    <input type="name"
    name="name"
    v-model="name"
    placeholder="Name"/>
    <br>
    <input type="email"
    name="email"
    v-model="email"
    placeholder="E-Mail"/>
    <br>
    <input type="password"
    name="password"
    v-model="password"
    @keyup.enter="register()"
    placeholder="Passwort"/>
    <br>
    <button @click="register"> Register </button>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      vorname:'',
      name:'',
      email: '',
      password: ''
    }
  },
  methods: {
    register () { 
      if (confirm (`Hallo ${this.vorname} Du hast dich erfolgreich registriert!`)){
        this.$router.replace({ name: "Login" }); 
        localStorage.setItem('vorname', this.vorname) 
        localStorage.setItem('name', this.name) 
        localStorage.setItem('email', this.email) 
        localStorage.setItem('password', this.password)       
      }
    }
  }
}


</script>

export.module = 