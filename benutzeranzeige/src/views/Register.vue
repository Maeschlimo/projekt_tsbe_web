<template>
  <div>
    <h1>Bitte registriere dich:</h1>
    <input type="vorname"
    name="vorname"
    v-model="vorname"
    placeholder="Vorrname"/>
    <br>
    <input type="name"
    name="name"
    v-model="email"
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
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
        //vorname: this.vorname
        confirm (`Hallo Du hast dich erfolgreich registriert!`);
    }
  }
}

</script>
