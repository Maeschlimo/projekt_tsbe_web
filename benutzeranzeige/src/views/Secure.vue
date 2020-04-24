<template>
  <div id="secure">
  <div v-if="!isHidden">
    <img alt="logo" src="../assets/logo.png"> 
    <h1> {{ credentials[$attrs.index].Vorname }} </h1>
    <h5>Meine Infos</h5>
    <div v-for="(value, name) in this.credentials[$attrs.index]" v-bind:key="value">{{ name }}: {{ value }}</div>
    <p>User ID: {{$attrs.index}}</p>
    <br />
    <br>
    <br> 
</div>
    <img @click="isHidden = !isHidden" src="https://img.icons8.com/color/48/000000/contacts.png"/>
    <br>

    <div v-if="isHidden">
        <div v-for="index in credentials" v-bind:key="index.Telefonnummer" class="border">
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
      isHidden: false,

    };
  },
  created() {
    const credentials = JSON.parse(localStorage.getItem("cred_show"));
    if (credentials !== null) {
      for (const cr of credentials) {
        this.credentials.push(cr);
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
</style>