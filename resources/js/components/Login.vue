<template>
    <div>
       <form @submit.prevent="loginUser" >
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" class="form-control" v-model="form.email" id="floatingInput" placeholder="name@example.com" name="email">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="form.password" id="floatingPassword" placeholder="Password" name="password">
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
export default {
    data()
    {
        return {
            form : {
                email : null,
                password : null
            }
        }
    },
    methods : {
        loginUser()
        {
            console.log(this.form);
        }
    }
}
</script>