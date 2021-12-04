<template>
    <div>
       <h1>Hello {{ getAuth.name }}, this is your dashboard</h1>

    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters([
            'getLoggedIn',
            'getAuth'
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
