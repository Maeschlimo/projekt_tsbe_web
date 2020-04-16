<template>
    <div id="secure">
        <h1>Secure Area</h1>
        <p>
            This is a secure area
        </p>
        <li>{{vorname}}</li>
        <li>{{name}}</li>
        <li>{{email}}</li>
    </div>
</template>

<script>
    export default {
        name: 'secure',
        data() {
            
            return {
                name: localStorage.name,
                vorname: localStorage.vorname,
                email: localStorage.email
            };
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