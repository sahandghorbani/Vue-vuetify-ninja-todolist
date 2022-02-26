<template>
 <v-container class="my-5" >
   <v-row>
    <v-col cols="12" sm="6" md="6" lg="3" v-for="person in team" :key="person.name">
      <v-card class="text-center pa-2" flat>
        <v-responsive>
          <v-avatar size="100">
            <img src="../public/avatar-1.png">
          </v-avatar>
        </v-responsive>
        <v-card-text>
          <div>{{person.name}}</div>
          <div>{{person.role}}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn small text >
            <v-icon left small>message</v-icon>
            <span >message</span>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
   </v-row>
 </v-container>
</template>

<script>
export default {
  data(){
    return{
      team: [
        { name: 'The Net Ninja', role: 'Web developer'  ,avatar:'../public/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer'  ,avatar:'../public/avatar-2.png'},
        { name: 'Chun Li', role: 'Web developer'  ,avatar:'../public/avatar-3.png'},
        { name: 'Gouken', role: 'Social media maverick' ,avatar:'../public/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru' ,avatar:'../public/avatar-5.png'}
      ]
    }
  }
}
</script>

<style scoped>

</style>