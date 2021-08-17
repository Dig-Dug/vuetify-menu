<template>
<v-container  class=" pa-1" black  >
 <v-row no-gutters >
  
      <v-col 
       cols="sm"  
      >
      <v-toolbar   color="pink accent-3 " dark
            flat class="display-4 ">
     <v-toolbar-title  class="mx-auto font-weight-light ">Veranstaltung Auswählen</v-toolbar-title>
        </v-toolbar>
<v-img 
  lazy-src="../img/grunio.svg"
  max-height="10000"
  max-width="8000"
  src="../img/grunio.svg"
>

<div align="start" class="mx-auto "
   >
   <v-btn-toggle
      class="mt-8"
        v-model="text"
     
        color="pink accent-3 " 
        group
      >
        <v-btn small class="ml-16 ">
         Konzert
        </v-btn>
        <v-btn small value="left">
          Event
        </v-btn>

        <v-btn small value="center">
          Party
        </v-btn>

        <v-btn small value="right">
          Lesung
        </v-btn>

        <v-btn small value="justify">
          Flohmarkt
        </v-btn>
      </v-btn-toggle>
 
 <v-row class="mt-8 ml-2 mr-14" >
 <v-col >
 <p >Einlass:</p>
 </v-col>
 <v-col  >
 <h6 class="ml-5">Datum:</h6>
 </v-col>
  <v-col>
 <v-text-field class="pb-5" 
  height="34px"
 background-color="white"
            label=""
            outlined
            dense
          ></v-text-field>
 </v-col>
  <v-col  width="6px"
          class="ml-5">
 <h6 class="ml-5">Zeit:</h6>
 </v-col>
  <v-col >
 <v-text-field 
           background-color="white"
            label=""
            outlined
            dense
          ></v-text-field>
 </v-col>
 </v-row>

<v-row class="mt-0 ml-2 mr-14 " >
 <v-col >
 <p >Einlass:</p>
 </v-col>
 <v-col  >
 <h6 class="ml-5">Datum:</h6>
 </v-col>
  <v-col>
 <v-text-field class="pb-5" 
  height="34px"
 background-color="white"
            label=""
            outlined
            dense
          ></v-text-field>
 </v-col>
  <v-col  width="6px"
          class="ml-5">
 <h6 class="ml-5">Zeit:</h6>
 </v-col>
  <v-col >
 <v-text-field 

           background-color="white"
            label=""
            outlined
            dense
          ></v-text-field>
 </v-col>
 </v-row>


</div>
<div heiog >



 <v-text-field  
      class="mr-10 ml-8"
      rounded
 autofocus true  
 background-color="green lighten-4"
            v-model="message1"
            label="Veranstaltungsname:"
            clearable
          
            
          ></v-text-field>

<v-container class="px-3 " fluid >
    <v-checkbox 
      height="1"
      red color="pink accent-3 "
      v-model="checkbox"
      :label="`Kein Umbruch in den Wortern`"
    ></v-checkbox>
</v-container>

<p class="mr-10 ml-8 pt-0">Beschreibung:</p>
 <v-textarea background-color="white"
    class="mr-10 ml-8"
          height ="39"
          outlined
          name="input-7-4"
          label=""
          value=""
        >
  </v-textarea>
    <div height="23">
<v-container class="px-34 my-78" fluid >
    <v-checkbox  
      height="1"
      red color="pink accent-3 "
      v-model="checkbox"
      :label="`Kein Umbruch in den Wortern`"
    ></v-checkbox>
      <v-checkbox  
      height="1"
      red color="pink accent-3 "
      v-model="checkbox"
      :label="`Kein Umbruch in den Wortern`"
    ></v-checkbox>
      <v-checkbox  
      height="1"
      red color="pink accent-3 "
      v-model="checkbox"
      :label="`Kein Umbruch in den Wortern`"
    ></v-checkbox>
      <v-checkbox  
      height="1"
      red color="pink accent-3 "
      v-model="checkbox"
      :label="`Kein Umbruch in den Wortern`"
    ></v-checkbox>
</v-container>

    </div>

</div>




</v-img>  


        <v-card 
          class="pa-10 my-4 "
          height="299"
          
         >
         
        </v-card> 
       
        </v-col>
    
<v-col cols="sm 4">

 <v-img 
 class="pt-2 ml-3"
  lazy-src="../img/whitey.svg"
  max-height="10000"
  max-width="8000"
  src="../img/whitey.svg"
>
 

  <v-row  no-gutters class="mt-16">
      <v-col 
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-img  
         class="pa-5 ma-auto mt-4 mb-4"
          outlined
          tile
  lazy-src="../img/SVG/Element 2.svg"
  max-height="80"
  max-width="80"
  src="../img/SVG/Element 2.svg"
> 
<v-file-input 
  hide-input
  truncate-length="15"
></v-file-input>
</v-img>
</v-col>
</v-row> 

  <div class="justify-center">
     <v-btn 
     width="310px"
     color="pink accent-3" 
      class="mt-16 mb-auto ml-16 justify-center"
      :loading="loading"
      :disabled="loading"
     
      @click="loader = 'loading'"
    >
      Vorschau Tagesansicht:
    </v-btn>
    <v-btn
     width="310px"
     color="orange darken-2"
      class="mt-7 mb-7 ml-16"
      :loading="loading"
      :disabled="loading"
      
      @click="loader = 'loading'"
    >
      Vorschau Wochenansicht:
    </v-btn>
    </div>
     <v-img   
         class="  ml-16 mr-16"
        max-height="600"
          max-width="500"
  src="../img/shell.png"
> </v-img>
    
    


</v-img>
        
         -->
        </v-col>
   </v-row> 
  
  </v-container>

 
</template>

<script>
  export default {
    name: 'HelloWorld',


    data () {
     
     return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        checkbox: true,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },}
</script>
