<template>
  <div>
      <app-header />
      <div class="container"> 
          <router-view></router-view>
      </div>
      <app-footer />
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'
export default {
    data()
    {
        return {
            greeting :  'hello wolrd'
        }
    },
    components : {
        appHeader,
        appFooter
    }
}
</script>