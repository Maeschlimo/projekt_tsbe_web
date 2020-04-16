<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>

        <div v-for="(value, name) in credentials[0]" v-bind:key="value">
            {{ name }}: {{ value }}
        </div>
        <li>{{this.userid}}</li>
        
    </div>
</template>

<script>

// import Login from './Login';
import { integer } from 'vee-validate/dist/rules';

    export default {
        name: 'secure',
        data() { 
            return {
                credentials: [],
                userid: integer

            };
        },
    created () {
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    if (credentials !== null) {
      for (const cr of credentials) {
        this.credentials.push(cr)
        this.userid=1
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