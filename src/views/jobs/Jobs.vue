<template>
  <h1>Jobs</h1>
  <div class="jobs" v-for="job in jobs" :key="job.id">
      <router-link :to="{name:'JobDetails',params:{id:job.id}}">
          <h1>{{job.title}}</h1>
      </router-link>
  </div>
      
</template>

<script>
export default {
    data(){
        return{
            jobs:[
               {id:1,title:'project manager',details:'Creative Coder Project Manager'},
               {id:2,title:'designer',details:'Creative Coder Designer'},
               {id:3,title:'developer',details:'Creative Coder Developer'}
            ]
        }
    }
}
</script>

<style>
    .jobs{
        color:crimson;
    }
</style>