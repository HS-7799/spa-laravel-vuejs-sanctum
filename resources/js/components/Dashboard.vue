<template>
    <div>
       <h1> this is a dashboard</h1>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
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
    }
 
}
</script>
