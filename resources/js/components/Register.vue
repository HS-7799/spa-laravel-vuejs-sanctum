<template>
    <div>
       <form @submit.prevent="registerUser" >
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
            <ul>
                <li v-for="error,index in errors" v-bind:key="index" >
                    {{ error[0] }}
                </li>
            </ul>
            <div class="form-floating">
                <input type="text" class="form-control" v-model="form.name" id="floatingInput" placeholder="Name">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" v-model="form.email" id="floatingInput" placeholder="name@example.com" >
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password" id="floatingPassword" placeholder="Password" >
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password_confirmation" id="floatingPasswordConfirmation" placeholder="Password confirmation" >
                <label for="floatingPasswordConfirmation">Password confirmation</label>
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"> Remember me
            </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex'
export default {
    data()
    {
        return {
            form : {
                name : null,
                email : null,
                password : null,
                password_confirmation : null
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
                console.log("csrf token in a cookie in session");
            });
        }
    },
    methods : {
        registerUser()
        {
            axios.post('/register',this.form).then(response => {
                this.errors = {}
                this.form = {
                    name : null,
                    email : null,
                    password : null,
                    password_confirmation : null
                }
                this.$router.push('/dashboard')
            }).catch(errors => {
                this.errors = errors.response.data.errors
            })
        }
    }
}
</script>


<style>
.form-floating
{
    margin: 10px;
}
ul li
{
    color: red;
}
</style>