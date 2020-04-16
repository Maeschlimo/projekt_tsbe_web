<template>
  <div>
    <h1>Bitte registriere dich:</h1>
    <form v-on:keyup.enter="validate">
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
      placeholder="Passwort"/>
      <br>
      <button @click="validate"> Register </button>
    </form>
  </div>
</template>


<script>

export default {
  name: 'Register',
  data () {
    return {
      credentials: [],
      credlabels: ['Vorname','Name','E-Mail','Passwort'],
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
        localStorage.setItem('credentials', this.credentials)    
      }
    },
    validate (){
      this.credentials.push(this.vorname)
      this.credentials.push(this.name)
      this.credentials.push(this.email)
      this.credentials.push(this.password)
      let registration_valid = false;

      for (let index = 0; index < 4; index++) {
        if (this.credentials[index].length<1){
          alert(`${this.credlabels[index]} ist ein Pflichtfeld`)
        }  
      }
      
      if (registration_valid===true){
        this.register ()
      }
  }
}
}
</script>

