<template>
    <div id="loginscreen">
        <h1>Log In</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="loginscreen()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'loginScreen',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            loginscreen() {
                if(this.input.username != "" && this.input.password != "") {
                    this.$router.replace({ name: "secure-gallery" });
                } else {
                    console.log("A username and password must be present");
                }
            }
        },
    }
</script>

<style scoped>
    #loginscreen {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>