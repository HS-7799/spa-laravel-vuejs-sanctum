<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >SPA</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <template v-if="getLoggedIn" >
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link" >dashboard</router-link>
          </li>
        </template>
        <template v-else >
          <li class="nav-item">
            <router-link to="/login" class="nav-link" >Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" >Register</router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    
    computed : {
      ...mapGetters([
        'getLoggedIn'
      ])
    }
}
</script>

<style>

.router-link-active
{
    color: aliceblue;
}

</style>