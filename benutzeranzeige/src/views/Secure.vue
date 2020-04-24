<template>
  <div id="secure">
  <div v-if="!isHidden">
    <img alt="logo" src="../assets/logo.png"> 
    <h1> {{ cred[$attrs.index].Vorname }} </h1>
    <h5>Meine Infos</h5>
    <div v-for="(value, name) in this.cred[$attrs.index]" v-bind:key="value">{{ name }}: {{ value }}</div>
    <p>User ID: {{$attrs.index}}</p>
    <button @click="deleteUser($attrs.index)">Mein Profil löschen</button>
    <br />
    <br>
    <br> 
</div>
    <a @click="isHidden = !isHidden">Deine Kontakte</a>    
    <br>
    <img @click="isHidden = !isHidden" src="https://img.icons8.com/color/48/000000/contacts.png" cursor: pointer/>
    <br>
    <br>
    <div v-if="isHidden">
        <div v-for="index in cred" v-bind:key="index.Telefonnummer" class="border">
            <br>
            <strong  class="text-uppercase">{{index.Vorname}} {{index.Name}}</strong>
        <div v-for="(value, name) in index" v-bind:key="value.Telefonnummer">{{ name }}: {{ value }} </div>
        <br />
        </div>
    </div>
  </div>
</template> 
 
<script>
export default {
  name: "secure",
  data() {
    return {
      credentials: [],
      cred: [],
      isHidden: false,

    };
  },
  methods:{
    deleteUser (id) {
      const index = id
      this.credentials.splice(index, 1)
      this.cred.splice(index, 1)
      localStorage.setItem('credentials', JSON.stringify(this.credentials))
      localStorage.setItem('cred_show', JSON.stringify(this.cred))
      this.$emit("authenticated", null); 
      this.$router.replace({ name: "Login"});
    }
  },
  created() {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    if (credentials !== null) {
      for (const cr of credentials) {
        this.credentials.push(cr);
      }
    }
    const cred = JSON.parse(localStorage.getItem('cred_show'))
      if (cred !== null) {
        for (const cr of cred) {
          this.cred.push(cr)
      }
    } 
  },
};
</script> 
 
<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
  
}

a {
    color: #000;
    font-size: 30px; /* example size, can be any size, in px, em, rem, % */
    cursor: pointer;
}

img {
    cursor: pointer;
}

</style>