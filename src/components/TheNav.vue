<template>
<nav>
  <!--    snackbar-->
  <v-snackbar  v-model="snackbar" top color="primary" :timeout="2000"  >
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>

    <v-toolbar flat  color="blue-grey lighten-4">
        <v-app-bar-nav-icon @click="drawer =!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase gray--text">
            <span>Tood</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="gray" depressed>
            <span>sign out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" color="blue-grey darken-1" height="100%">

     <v-list flat>
       <v-col class="d-flex justify-center">
         <v-avatar  size="120" class="pa-5 align-content-center">
           <img src="../public/avatar-1.png">
         </v-avatar>
       </v-col>
       <v-row  class="d-flex justify-center">
         <span class="white--text caption">Ninja</span>
       </v-row>
<!--dialog Popup-->
       <v-row class="d-flex justify-center pa-5">
         <v-dialog v-model="dialog" width="500">
           <template v-slot:activator="{ on, attrs }">
             <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on" >Click Me
             </v-btn>
           </template>
           <v-card>
             <v-card-title class="text-h5 grey lighten-2">Privacy Policy</v-card-title>
             <v-card-text>
<!-- FORM-->
               <v-form ref="form" v-model="valid" lazy-validation>
                 <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required ></v-text-field>
                 <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                 <input ref="myref">
               </v-form>
             </v-card-text>
             <v-divider></v-divider>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn color="primary" text  @click="formAcception" >
                  I accept
               </v-btn>
             </v-card-actions>

           </v-card>
         </v-dialog>
       </v-row>

      <v-subheader class="white--text">REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary"  >
        <v-list-item v-for="(item, i) in items" :key="i" router :to ='item.route'>
          <v-list-item-icon>
            <v-icon v-text="item.icon" class="white--text"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="white--text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>

export default {
        data(){
            return{
                drawer:false ,
                selectedItem: 1,
                items: [
                        { text: 'Dashboard', icon: 'mdi-clock'  ,route:'/'} ,
                        { text: 'My Projects', icon: 'mdi-account' ,route:'/projects/' }  ,
                        { text: 'persons', icon: 'mdi-flag' ,route:'/team/'}  ,
                 ],
                dialog: false ,
                name: ''      ,
                email: ''     ,
                snackbar: false ,
                text: `new project added`,

        }
    },
          methods:{
            formAcception(){
            this.snackbar =true
             this.dialog = false
            }
          } ,
      }
</script>

<style>

</style>