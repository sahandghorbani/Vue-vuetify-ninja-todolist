<template>
  <div class="home">
    <h1 class="grey--text"> Dashboard</h1>
    <v-container >
      <v-row>
        <div>
          <v-icon small>person</v-icon>
          <v-btn small text class="font-weight-light" @click="sortme('title')">by perosn</v-btn>
        </div>
        <div>
          <v-icon small>description</v-icon>
          <v-btn small text class="font-weight-light"  @click="sortme('person')">by project</v-btn>
        </div>
      </v-row>
      <v-row  v-for="project in projects" :class=" `project ${project.status}`" class="white">
        <v-col  lg="6" md="12" cols="6">
          <v-card  class="pa-3"  outlined color="transparent"   >
            <div>{{project.title}}</div>
            <div>crewate a new website</div>
          </v-card>
          <v-divider ></v-divider>
        </v-col>
       <v-col lg='2' md="4" cols="6">
          <v-card class="pa-2"   outlined color="transparent"   >
            <div>{{project.person}}</div>
            <div>{{project.due}}</div>
          </v-card>
        </v-col>
          <v-col lg='2' md="4" cols="6">
          <v-card class="pa-2"  outlined color="transparent"    >
            <div>Due Day</div>
            <div>1 11th 2022</div>
          </v-card>
        </v-col>
         <v-col lg='2' md="4" cols="6">
          <v-card class="pa-2 d-flex justify-end"  outlined color="transparent"  >
              <v-chip small :class="`${project.status}`">
                <div>{{ project.status }}</div>
              </v-chip>
          </v-card>
         </v-col>
      </v-row>

    </v-container>







<!--        <h1>Home page</h1>
        <v-btn class="pink white--text">click me</v-btn>
        <v-btn dark color="pink">click me</v-btn>
        <v-btn flat color="pink">click me</v-btn>
        <v-btn text color="pink" block>click me</v-btn>
        
        <v-btn dark color="red">
          <v-icon left>mdi-email</v-icon>
          <span>Email me </span>
        </v-btn>

        <v-btn dark color="red" large>
          <span>Email me </span>
           <v-icon right small>mdi-email</v-icon>    
        </v-btn>

        
        <v-btn fab dark color="green" >
           <v-icon >mdi-mail</v-icon>    
        </v-btn> -->



      </div>    
</template>

<script>
export default {
  data(){
    return{
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  } ,
  methods:{
    sortme(prop){
     this.projects.sort((a,b)=>a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>


<style>
  .project.complete {
    border-left: 4px solid #3cd1c2 !important;
  }
  .project.ongoing {
    border-left: 4px solid orange !important;

  }
  .project.overdue {
    border-left: 4px solid tomato !important;
  }

  .v-chip.complete {
    background-color: #3cd1c2 !important;
  }
  .v-chip.ongoing {
    background: orange !important;

  }
  .v-chip.overdue {
    background:  tomato !important;
  }
</style>