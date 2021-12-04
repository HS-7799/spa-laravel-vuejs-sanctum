<template>
    <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
            <div  v-if="post.user_id == getAuthId" >
                <button class="btn btn-primary" @click="editPost">
                    Edit
                </button>
                <button class="btn btn-danger" @click="deletePost">
                    Delete
                </button>
            </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios'
export default {
    data()
    {
        return {
            post : {}
        
        }
    },
    methods : {
        deletePost()
        {
            axios.delete(`/api/posts/${this.post.id}`).then(response => {
                this.$store.commit('removePost',this.post.id)
                this.$router.push('/posts')
            }).catch(errors => {
                if(errors.response.status == 403)
                {
                    alert("this action is forbidden")
                }
            })
        },
        editPost()
        {
            this.$router.push({ name : 'editPost', params : {id : this.post.id} })
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
        this.post = this.getOnePost(this.$route.params.id)

    }

}
</script>

<style>

</style>