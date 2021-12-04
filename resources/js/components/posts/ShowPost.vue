<template>
  <div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data()
    {
        return {
            post : {}
        
        }
    },
    created()
    {
        axios.get(`/api/posts/${this.$route.params.id}`).then(response => {
            this.post = response.data
        })
    }

}
</script>

<style>

</style>