
<template>
  <div class="about">
    <h1 class="grey--text"> Projects</h1>

      <v-row justify="center">
        <v-col cols="6">
              <v-btn @click="clientHandler"> client </v-btn> 
              <v-btn @click="rawardtHandler"> reward </v-btn> 
              <v-btn @click="trHandler"> transactions </v-btn>
        </v-col>
      </v-row>
  <router-view></router-view>

  </div>
</template>

<script>
    export default {
      data(){
        return{
          value:'ziba'
        }
      } , 
      methods:{
        clientHandler(){
           this.$router.push({ name: 'client' })
        } ,
        rawardtHandler(){
            this.$router.push({ name: 'reward' })
        } ,
        trHandler(){
           this.$router.push({path:'transactions' })
        }
      }
    }
</script>

<style scoped>

</style>