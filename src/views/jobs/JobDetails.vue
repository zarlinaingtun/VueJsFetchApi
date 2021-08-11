<template>
  <h1>Job Details{{$route.params.id}}</h1>
  <h1>{{id}}</h1>
  <div v-if=job>
    <h1>Job Title- {{job.title}}</h1>
    <h2>Job Detail-{{job.detail}}</h2>
  </div>
</template>

<script>
export default {
   data(){
     return{
      //  id:this.$route.params.id
      job:null,
     }
     
   },
   props:['id'],
   mounted(){
     fetch(' http://localhost:3000/jobs/'+this.id).
     then((response)=>{
       return response.json();
     }).
     then((data)=>{
      //  console.log(data);
      this.job=data;
     }).
     catch((err)=>{
       console.log(err.message);
     })
   }
}
</script>

<style>

</style>