<template>
<div class="">
<v-divider class="mt-13"></v-divider>
 <div class="yellow darken-2  pt-4">
    <h1  
    class="ml-16 pl-16 pb-3 black--text font-weight-bold "
    
          >Mitarbeiter ändern</h1>
    
  </div>
  <div class="ml-16 pl-16 mt-8 ">
  <v-btn class="mr-3 teal lighten-4" >GESCHICHTE</v-btn>
      <v-btn class="teal lighten-4">ALS JOHN EINLOGGEN  </v-btn>
  </div>
  

  <v-container   class="ml-0 mr-0 mt-0  pr-0 ">

    
     <v-row class="ml-16 mt-0">
     <h2 class="ml-16 mt-16 font-weight-bold">John</h2>
     </v-row> 
</v-container>
 <!--
   <v-toolbar
      light
      
      
     src="../img/vbanner.jpg"
    >
 src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    <h1  
    class="ml-16 pl-16 mt-6 pb-3 white--text font-weight-bold "
    
          >Mitarbeiter ändern</h1>
    
  <v-btn class=" ml-8 mr-3 teal lighten-4" >GESCHICHTE</v-btn>
      <v-btn class="teal lighten-4">ALS JOHN EINLOGGEN  </v-btn>
 
  
</v-toolbar>
 -->

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
<v-row class="ml-16  mr-16">
<v-col>
<v-form class="ml-16 mt-16 mr-16"
 
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field class="mt-16 mr-16 font-weight-bold"
      
      :counter="10"
      
      label="Kürzel"
      required
    ></v-text-field>

    <v-text-field class=" mr-16"
      v-model="firstname"
      
      label="Vorname:"
      required
    ></v-text-field>
    <v-text-field class=" mr-16 mb-16"
      v-model="lastname"
     
      label="Nachname:"
      required
    ></v-text-field>
</v-form>
</v-col>
<v-col>
<v-form class="ml-16 mt-16 mr-16"
 
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field class="mt-16 mr-16 font-weight-bold"
      v-model="email"
      
      
      
      :rules="emailRules"
     
      label="E-Mail-Adresse:"
      required
    ></v-text-field>


    <v-text-field class=" mr-16"
      v-model="tel"
      :counter="20"
      :rules="telRules"
      label="Handy:"
      required
    ></v-text-field>
    <v-text-field class=" mr-16 mb-16 font-weight-bold"
      :counter="2"
      label="Urlaubstage:"
      required
    ></v-text-field>
</v-form>
</v-col>
</v-row>

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
░░░▀▄▄▀▀▄▄▀▀▄▄▄█▀

 v-model="ex4"

-->



 <div class="purple darken-2 text-center pt-4" 
>
    <h1  
    class="pb-3 white--text font-weight-bold "
    
          >Schichtpräferenzen</h1>
    
  </div>
<v-checkbox class="mt-9 ml-16"
            
              label="Fester Mitarbeiter (sonst Springer)"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
  <v-checkbox class=" ml-16"
             
              label="Freelancer"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
  <v-checkbox class=" ml-16"
            
              label="In Mitarbeiter(App) anzeigen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<div class="mb-05 ">

<v-row class="ml-16"><v-col class="pr-16 mr-16 pr-16">
<v-form class="ml-16 mt-16 pr-16"
 
    ref="form"
    v-model="firstname"
    lazy-validation
  >
    <v-text-field class="pr-16 mr-16 font-weight-bold"
      v-model="SOLL"
      :counter="2"
      
      label="SOLL:"
      required
    ></v-text-field>

    <v-text-field class="pr-16 mr-16 font-weight-bold"
     
      :counter="2"
      label="MAX:"
      required
    ></v-text-field>
  <v-combobox class="pr-16 mr-16"
          v-model="select"
          :items="items"
          label="Bereiche"
          multiple
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                class="accent white--text"
                left
                v-text="data.item.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
</v-form>
</v-col ><v-col class="mr-16 pl-n16 "></v-col></v-row>

<v-checkbox class="mb-8 ml-16 pb-6 pt-0"
            
              label="Kann sich auf Schichten bewerben"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
</div>

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




<div class="purple darken-2 text-center pt-4">
    <h1 class="white--text font-weight-bold pb-3">Leitung</h1>
</div>
<v-checkbox class="ml-16 mt-9"
              
              label="Kann Produktionsleitung übernehmen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16"
             
              label="Kann Tagesleitung übernehmen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16"
            
              label="Kann Abendleitung übernehmen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16"
             
              label="Kann die Kasse übernehmen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16 mb-8"
            
              label="Ist Supervisor"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>


<div class="purple darken-2 text-center pt-4">
    <h1 class="white--text font-weight-bold pb-3">Berechtigungen</h1>
</div>
<v-row>
<v-col>
<v-checkbox class="ml-16 mt-9"
            
              label="Ist für den E-Mail-Versand freigeschalten"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16 mb-8"
              
              label="Bereichsleiter (nur Löschen - Bitte bei Schichttypen als Manager hinzufügen, falls gewünscht)"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            >
</v-checkbox>

<h2 class="ml-16  font-weight-bold">Bereichsleiter fur:</h2>
  <v-checkbox class="ml-16 mt-9"
            
              label="Kann den Schichtplan einsehen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>

            </v-col>
<v-col >
<v-checkbox class="ml-16 mt-9"
           
              label="Monitor-Bearbeiter"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>  
<v-checkbox class="ml-16 "
             
              label="Kann in die Vergangenheit sehen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16 "
            
              label="Kann Schichtplan-Ankundigungen versenden"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16 "
            
              label="Kann alle Bereiche sehen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="ml-16 "
             
              label="Kann den Flohmarkt sehen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
</v-col>    


</v-row>

<v-divider 
 class="purple darken-2 mt-9 mb-9"
  
></v-divider>


<v-row><v-col>

<h2 class="ml-16  font-weight-bold">Letzte Anmeldung:</h2>
        </v-col>
      

</v-row>



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



<h2 class="ml-16  font-weight-bold">Kann Dokumente einsehen</h2>
<v-row class="ml-16 mb-7">
<v-checkbox class="mr-5"
             
              label="Büro"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            >Büro79879</v-checkbox>
<v-checkbox class="mr-5"
             
              label="Catering"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="mr-5"
             
              label="Halle"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="mr-5"
             
              label="Produktion"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="mr-5"
              
              label="Technik"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="mr-5"
             
              label="Tresen"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
<v-checkbox class="mr-5"
             
              label="Tür"
              color="orange darken-3"
              value="orange darken-3"
              hide-details
            ></v-checkbox>
</v-row>
<h2 class="ml-16  font-weight-bold">Eingetrage Schichten (0)</h2>
<h3 class="ml-16 ">keine</h3>

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
<div class="ml-16 mb-10">
<v-row>
<v-col>

<v-btn class="red">Löschen</v-btn>
<v-btn color="primary ml-5">SICHERN</v-btn>
</v-col>
</v-row>

<v-divider class="mt-3" dark></v-divider>
<v-btn elevation="5" small tile color="warning"
 class="mb-3">Sichern und 
 weiter bearbeiten</v-btn>
<v-divider dark></v-divider>

</div>

</div>




</template>


<script>
  export default {
    name: 'Admin',
data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
////////////////////////////
valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
       tel: '',
      telRules: [
        v => !!v || 'Telefon is required',
        v => v.length <= 20 || 'Telefon muss 20 Zahlen enhalten',
      ],
/////////////////////////////

ex4 : ['orange darken-3'],
/////////////////////////////
      select: ['Beispiel', 'BH'],
        items: [
          'BH',
          'Lorem',
          'Ipsum',
          'Beispiel',
        ],
      
    }),
   }
</script>