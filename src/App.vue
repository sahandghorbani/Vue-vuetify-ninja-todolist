<template>
  <v-app>
    <v-main class="grey lighten-2">
      <TheNavVue></TheNavVue>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script>
  import TheNavVue from "./components/TheNav.vue" 

export default {

    data: () => ({
    //
    }),
      components:{TheNavVue}
};
</script>
