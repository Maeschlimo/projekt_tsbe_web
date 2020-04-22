<template>
    <div id="contacts">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>

        <div v-for="(value, name) in this.credentials" v-bind:key="value">
            {{ name }}: {{ value }}
        </div>
        <br>
         <li>{{this.userid}}</li>
        
        
        
    </div>
</template>

<script>

import Login from '../views/Login.vue'


    export default {
        name:'contacts',  
        data() { 
            return {
                credentials: [],
                userid: Login.data().uid

            }
        },
    created () {
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    if (credentials !== null) {
      for (const cr of credentials) {
        this.credentials.push(cr)  
      }
    }
  }
}
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>