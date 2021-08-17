<template>
  <v-app>
 
 

 <Navbar/> 
<!-- <Navbar/>  <router-view></router-view> <main> </main>-->
<!-- <router-link to="/Admin">fewrf</router-link> -->
 

<v-main>
      <router-view/>
    </v-main>
    
  </v-app>


</template>



<script>
//import Admin from './components/Admin.vue';
//import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
//import Admin from './components/Admin';
//import HelloWorld from './components/HelloWorld';
//import router from './router';
//HelloWorld,  <HelloWorld/>
export default {
  name: 'App',

  components: {
  //HelloWorld
   Navbar
    
   //Admin
  },

  data: () => ({
    //
  }),
};
</script>
