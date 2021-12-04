<template>
  <div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data()
    {
        return {
            post : {}
        
        }
    },
    computed : {
        ...mapGetters([
            'allPosts',
            'getOnePost'
        ])
    },
    created()
    {
        this.post = this.getOnePost(this.$route.params.id)

    }

}
</script>

<style>

</style>