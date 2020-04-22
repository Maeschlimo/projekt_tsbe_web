<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" @keyup.enter="login()"/>
        <button type="button" v-on:click="login()">Login</button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
    </div>
</template>

<script>



//import Login from "../views/Login.vue"
//import secure from "../views/Secure.vue";


    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                credentials:[],
                isValid : false,
                uid: 5
                //uuid
                
                
            }
        },
        methods: {

            setuid(userid) {
                return userid;
            },
            login() {

                if(this.input.username != "" && this.input.password != "") {
                    
                    for (let index = 0; index < this.credentials.length; index++) {
                        if(this.input.username == this.credentials[index].name && this.input.password == this.credentials[index].password) {
                            this.isValid = true;
                            this.$emit("authenticated", true); 
                            this.$router.replace({ name: "secure", params:{ index } });
                        } 
                    }
                    if (this.isValid===false){
                        alert("The username and / or password is incorrect"); 
                    }
                } else {
                alert("A username and password must be present");
                }
                
            }
            
        },
        created () {
            const credentials = JSON.parse(localStorage.getItem('credentials'))
            if (credentials !== null) {
                for (const cr of credentials) {
                    this.credentials.push(cr)
                }
            }
            
        }, 
 /*       getUID(){
            console.log(this.data().uid);
            return this.data().uid
            
            
        }*/
    }
</script>

export.object userid

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>