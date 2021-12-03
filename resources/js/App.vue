<template>
  <div>
      <app-header />
      <router-view></router-view>
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