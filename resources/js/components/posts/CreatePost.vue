<template>
    <div>
       <form @submit.prevent="addPost" >
            <ul>
                <li v-for="error,index in errors" v-bind:key="index" >
                    {{ error[0] }}
                </li>
            </ul>

            <div class="form-group mb-2">
                <input type="text" class="form-control" v-model="form.title" placeholder="Title">
            </div>
            <div class="form-group mb-2">
                <textarea class="form-control" rows="3" v-model="form.body" placeholder="Body"></textarea>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Add</button>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters } from 'vuex'
export default {
    data()
    {
        return {
            form : {
                title : null,
                body : null
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
        if(this.getLoggedIn == false)
        {
            this.$router.push('/login')
        }
    },
    methods : {
        addPost()
        {
            axios.post('/api/posts',this.form).then(response => {
                this.form.title = null
                this.form.body = null
            }).catch(errors => {
                if(errors.response.status == 401)
                {
                    this.$router.push('/login')
                }
                else if(errors.response.status == 403)
                {
                    alert('forbidden action')
                } else {
                    this.errors = errors.response.data.errors
                }
            })
        }
    }

}
</script>

<style>

</style>