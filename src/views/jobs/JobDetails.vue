<template>
  <h1>Job Details{{$route.params.id}}</h1>
  <h1>{{id}}</h1>
  <h2>{{id}}</h2>
</template>

<script>
export default {
   data(){
     return{
      //  id:this.$route.params.id
     }
     
   },
   props:['id']
}
</script>

<style>

</style>