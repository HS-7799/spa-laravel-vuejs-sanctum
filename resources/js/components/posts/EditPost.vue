<template>
    <div>
       <form @submit.prevent="updatePost" >
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

            <button class="w-100 btn btn-lg btn-primary" type="submit">update</button>
            
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {
    data()
    {
      return {
        form : {
          title : null,
          body : null
        },
        post : null,
        errors : {}
      }
    },
    computed : {
      ...mapGetters([
        'getOnePost',
        'getAuthId'
      ])
    },
    created()
    {
      this.form.title = this.getOnePost(this.$route.params.id).title
      this.form.body = this.getOnePost(this.$route.params.id).body
      this.post = this.getOnePost(this.$route.params.id)

      if(this.post.user_id != this.getAuthId)
      {
        this.$router.push('/posts')
      }

    },
    methods : {
      updatePost()
      {
        axios.put(`/api/posts/${this.post.id}`,this.form).then(response => {
          const updatePost = response.data
          this.$store.dispatch('updatePosts',updatePost)
          this.$router.push(`/posts/${updatePost.id}`)
        }).catch(err => {
          if(err.response.status == 401)
          {
            this.$router.push("/login")
          } else if (err.response.status == 403) {
            alert("this action is forbidden")
          }
          this.errors = err.response.data.errors
        })
      }
    }
}
</script>

<style>

</style>