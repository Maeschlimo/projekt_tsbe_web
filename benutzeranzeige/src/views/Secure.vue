<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>

        <div v-for="(value, name) in this.credentials[$attrs.index]" v-bind:key="value">
            {{ name }}: {{ value }}
        </div>

        <li>{{$attrs.index}}</li>     
    
        
    </div>
</template>

<script>


    export default {
        name: 'secure',
        data() { 
            return {
                credentials: [],
                benutzerid: Number

            }
        },

        created () {
        const credentials = JSON.parse(localStorage.getItem('cred_show'))
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