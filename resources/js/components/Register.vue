<template>
    <div>
       <form @submit.prevent="registerUser" >
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <div class="form-floating">
                <input type="text" class="form-control" v-model="form.name" id="floatingInput" placeholder="Name" name="name">
                <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" v-model="form.email" id="floatingInput" placeholder="name@example.com" name="email" >
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password" id="floatingPassword" placeholder="Password" name="password" >
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password_confirmation" id="floatingPasswordConfirmation" placeholder="Password confirmation" name="password_confirmation" >
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

export default {
    data()
    {
        return {
            form : {
                name : null,
                email : null,
                password : null,
                password_confirmation : null
            }
        }
    },
    methods : {
        registerUser()
        {
            console.log(this.form);
        }
    }
}
</script>


<style>
.form-floating
{
    margin: 10px;
}
</style>