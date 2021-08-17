<template>
<!--<v-hover v-slot="{ hover }">-->
  <v-card
    height="50"
    width="256"
    class="left"
  >

  
    <!--<Admin/> height="1000"-->
    <v-app-bar  
      color="purple darken-2 "
      dark
    >
      <v-app-bar-nav-icon  app @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>OFFEN</v-toolbar-title>
    </v-app-bar>

   

<!--█▀▀▄░░░░░░░░░░░▄▀▀█
░█░░░▀▄░▄▄▄▄▄░▄▀░░░█
░░▀▄░░░▀░░░░░▀░░░▄▀
░░░░▌░▄▄░░░▄▄░▐▀▀
░░░▐░░█▄░░░▄█░░▌▄▄▀▀▀▀█ #Pikachu
░░░▌▄▄▀▀░▄░▀▀▄▄▐░░░░░░█
▄▀▀▐▀▀░▄▄▄▄▄░▀▀▌▄▄▄░░░█
█░░░▀▄░█░░░█░▄▀░░░░█▀▀▀
░▀▄░░▀░░▀▀▀░░▀░░░▄█▀
░░░█░░░░░░░░░░░▄▀▄░▀▄
░░░█░░░░░░░░░▄▀█░░█░░█
░░░█░░░░░░░░░░░█▄█░░▄▀
░░░█░░░░░░░░░░░████▀
░░░▀▄▄▀▀▄▄▀▀▄▄▄█▀-->

    <v-navigation-drawer app v-model="drawer"
    background-color="pink"
    absolute
      temporary
      
       
      >


 <v-list-item class="ml-3 px-15 my-4 mb-auto">
            <v-list-item-avatar size="103">
              <v-img src="../img/user.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
 <v-list-item>
        <v-list-item-content >
          <v-list-item-title class="ml-6 text-h4 px-6 my-3">
           John Doe
          </v-list-item-title >
          <v-list-item-subtitle  class=" text-h6  blue--text mb-3 ml-14" >
            mein Profil
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider dark></v-divider>
    
 <!-- <Admin/> 
<router-link to="/admin"><v-btn>loco</v-btn></router-link>
<router-view/> --> 





<v-list color="yellow accent-2 "
        dense
       
    >

     
   

 <v-list-item   >
  <v-list-item-icon  class="my-3 mt-7 " >
            <v-icon color="black" 
            
            class="mt-2 ml-4 " 
             nav  
           
            
            
            >mdi-monitor-dashboard</v-icon>
            </v-list-item-icon>
  <v-list-item-content>
   <router-link to="/admin">
            <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Monitor</v-list-item-title>
   </router-link>
  </v-list-item-content>
</v-list-item>

  <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-calendar-month</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
   <router-link to="/kalender">
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Kalender</v-list-item-title>
       </router-link>
  </v-list-item-content>
 </v-list-item>

  <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-notebook-multiple</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Plan</v-list-item-title>
  </v-list-item-content>
 </v-list-item>

   <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-clipboard-list-outline</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Liste</v-list-item-title>
  </v-list-item-content>
 </v-list-item>

    <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-application-cog</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">App</v-list-item-title>
  </v-list-item-content>
 </v-list-item>

     <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-shopping-outline</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Flohmarkt</v-list-item-title>
  </v-list-item-content>
 </v-list-item>



      <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-account-details-outline</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
   <router-link to="/admin">
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">Admin</v-list-item-title>
   </router-link>
  </v-list-item-content>
 </v-list-item>




      <v-list-item>
  <v-list-item-icon class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >mdi-account-details</v-icon>
          </v-list-item-icon>
  <v-list-item-content>
      <v-list-item-title class="text-h6 my-3 pb-4 mt-7">SuperAdmin</v-list-item-title>
  </v-list-item-content>
 </v-list-item>

 
<!--TODO  v-lists items without router links-->


  <v-btn color="teal accent-3"
      class="ml-16 mb-6 mt-8"
      :loading="loading"
      :disabled="loading"
      
      @click="loader = 'loading'"
    >Sichern</v-btn>
        <v-btn color="pink accent-3"
      class="ml-16 mb-10"
      :loading="loading"
      :disabled="loading"
      
      @click="loader = 'loading'"
    >Löschen</v-btn>


    <v-img   
          outlined
          tile
  lazy-src="../img/so36.png"
  max-height="500"
  max-width="800"
  src="../img/so36.png"
> </v-img>

<!--
</v-list>



      <v-list color="yellow accent-2"
        dense
        nav
      >
     
        <v-list-item  
       
          v-for="link in links"
          :key="link.title" 
          
             to="link.route"
                    
        >
     to="link.route"

          <v-list-item-icon
                 
          class="my-3 mt-7 " >
            <v-icon color="black" class="mt-2 ml-4 " >{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content 
          >
            <v-list-item-title class="text-h6 my-3 pb-4 mt-7"
             
            >{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>



        <v-btn color="teal accent-3"
      class="ml-16 mb-6 mt-7"
      :loading="loading"
      :disabled="loading"
      
      @click="loader = 'loading'"
    >Sichern</v-btn>
        <v-btn color="pink accent-3"
      class="ml-16 mb-10"
      :loading="loading"
      :disabled="loading"
      
      @click="loader = 'loading'"
    >Löschen</v-btn>


    <v-img   
          outlined
          tile
  lazy-src="../img/so36.png"
  max-height="500"
  max-width="800"
  src="../img/so36.png"
> </v-img> -->


      </v-list>

    

</v-navigation-drawer>

<!--█▀▀▄░░░░░░░░░░░▄▀▀█
░█░░░▀▄░▄▄▄▄▄░▄▀░░░█
░░▀▄░░░▀░░░░░▀░░░▄▀
░░░░▌░▄▄░░░▄▄░▐▀▀
░░░▐░░█▄░░░▄█░░▌▄▄▀▀▀▀█ #Pikachu
░░░▌▄▄▀▀░▄░▀▀▄▄▐░░░░░░█
▄▀▀▐▀▀░▄▄▄▄▄░▀▀▌▄▄▄░░░█
█░░░▀▄░█░░░█░▄▀░░░░█▀▀▀
░▀▄░░▀░░▀▀▀░░▀░░░▄█▀
░░░█░░░░░░░░░░░▄▀▄░▀▄
░░░█░░░░░░░░░▄▀█░░█░░█
░░░█░░░░░░░░░░░█▄█░░▄▀
░░░█░░░░░░░░░░░████▀
░░░▀▄▄▀▀▄▄▀▀▄▄▄█▀-->




<!--<router-view/> -->
</v-card>

<!--</v-hover>-->
</template>

<style>
.v-card--reveal {
  
  opacity: .5;
  
}
</style>

<script>


  export default {
    
    data () {
      return {
       drawer: false,
      group: null,
        links: [
          { title: 'Monitor', icon: 'mdi-monitor-dashboard',route: '/navbar' },
          { title: 'Kalender', icon: 'mdi-calendar-month' },
          { title: 'Plan', icon: 'mdi-notebook-multiple' },
           { title: 'Liste', icon: 'mdi-clipboard-list-outline' },
            { title: 'App', icon: 'mdi-application-cog ' },
          { title: 'Flohmarkt', icon: 'mdi-shopping-outline' },
          { title: 'Admin', icon: 'mdi-account-details-outline' },
           { title: 'SuperAdmin', icon: 'mdi-account-details' },
        ],
        right: null,

        
      loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        
      }
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  }
</script>