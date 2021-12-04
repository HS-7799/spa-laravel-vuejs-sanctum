<template>
    <div>
       <form @submit.prevent="loginUser" >
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <ul>
                <li v-for="error,index in errors" v-bind:key="index" >
                    {{ error[0] }}
                </li>
            </ul>

            <div class="form-floating">
                <input type="email" class="form-control" v-model="form.email" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
                
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
    
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            
        </form>
    </div>
</template>

<script>
import axios from "axios"
import {mapGetters} from 'vuex'
export default {
    data()
    {
        return {
            form : {
                email : null,
                password : null
            },
            errors : {}
        }
    },
    computed : {
        ...mapGetters([
            'getLoggedIn'
        ])
    },
    created()
    {
        if(this.getLoggedIn == true)
        {
            this.$router.push('/dashboard')
        }
        else {
            axios.get('/sanctum/csrf-cookie').then(response => {
                console.log("csef token in a cookie in session");
            });
        }
    },
    methods : {
        loginUser()
        {
            axios.post('/login',this.form).then(response => {
                this.errors = {}
                this.$store.dispatch('setLoggedIn',true)
                this.getUser()
                this.$router.push('/dashboard')
            }).catch(errors => {
                this.errors = errors.response.data.errors
            })
        },
        getUser()
        {
            axios.get('/api/user').then(response => {
                this.$store.dispatch('setAuthUser',response.data)
            })
        }
    }
}
</script>

<style scoped>
ul li
{
    color : red
}
</style>