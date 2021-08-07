<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'Jobs'}">Jobs</router-link>
    
    <!-- Normal link -->
    <!-- <a href="/about">About</a> -->
  </div>

  <!-- Inject page -->
  <router-view/>

  <button @click="redirect">Redirect</button>
  <button @click="goBack">Go Back</button>
  <button @click="goForward">Go Forward</button>
  
</template>

<script>
export default {
  methods:{
    goBack(){
      return this.$router.go(-1);
    },
    goForward(){
      return this.$router.go(1);
    },
    redirect(){
      //Code....

      //Redirect
      return this.$router.push({name:'Home'});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a{
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #fff;
  background: crimson;
  padding:10px;
  border-radius: 10px;
}
</style>
